import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { Locale, MenuData, MenuItem, MenuPayload, MenuSection } from "@/lib/menu-types";

export const Route = createFileRoute("/admin/menu")({
  component: AdminMenu,
});

const LOCALES: Locale[] = ["pt", "en"];

function AdminMenu() {
  const [authed, setAuthed] = useState(false);

  return (
    <main className="min-h-screen bg-background px-4 py-10 md:px-8">
      <Toaster />
      <div className="mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl text-primary mb-8">Menu CMS</h1>
        {authed ? <Editor /> : <LoginForm onSuccess={() => setAuthed(true)} />}
      </div>
    </main>
  );
}

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const res = await fetch("/api/menu/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        onSuccess();
      } else {
        toast.error("Wrong password");
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="pw">Admin password</Label>
        <Input
          id="pw"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
        />
      </div>
      <Button type="submit" disabled={busy}>
        {busy ? "Checking…" : "Log in"}
      </Button>
    </form>
  );
}

function Editor() {
  return (
    <Tabs defaultValue="pt">
      <TabsList className="mb-6">
        {LOCALES.map((l) => (
          <TabsTrigger key={l} value={l}>
            {l.toUpperCase()}
          </TabsTrigger>
        ))}
      </TabsList>
      {LOCALES.map((l) => (
        <TabsContent key={l} value={l}>
          <LocaleEditor locale={l} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function LocaleEditor({ locale }: { locale: Locale }) {
  const [payload, setPayload] = useState<MenuPayload | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch(`/api/menu?locale=${locale}`);
    if (!res.ok) {
      toast.error("Failed to load menu");
      return;
    }
    setPayload((await res.json()) as MenuPayload);
  }, [locale]);

  useEffect(() => {
    load();
  }, [load]);

  if (!payload) return <p className="text-muted-foreground">Loading…</p>;

  const { data, imageUrl } = payload;

  function setData(next: MenuData) {
    setPayload((p) => (p ? { ...p, data: next } : p));
  }

  async function saveData() {
    setSaving(true);
    try {
      const res = await fetch(`/api/menu?locale=${locale}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ data }),
      });
      if (res.ok) toast.success("Menu saved");
      else toast.error("Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function uploadImage(file: File) {
    try {
      const dataUrl = await toWebpDataUrl(file);
      const res = await fetch(`/api/menu/image?locale=${locale}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ dataUrl }),
      });
      if (res.ok) {
        setPayload((p) => (p ? { ...p, imageUrl: dataUrl } : p));
        toast.success("Image uploaded — it now overrides the structured menu");
      } else {
        const { error } = (await res.json()) as { error?: string };
        toast.error(error ?? "Upload failed");
      }
    } catch {
      toast.error("Could not process image");
    }
  }

  async function clearImage() {
    const res = await fetch(`/api/menu/image?locale=${locale}`, { method: "DELETE" });
    if (res.ok) {
      setPayload((p) => (p ? { ...p, imageUrl: null } : p));
      toast.success("Image cleared — showing structured menu");
    } else {
      toast.error("Failed to clear image");
    }
  }

  return (
    <div className="space-y-10">
      <ImagePanel imageUrl={imageUrl} onUpload={uploadImage} onClear={clearImage} />

      <div className={imageUrl ? "opacity-50 pointer-events-none" : ""}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-2xl text-foreground">Structured menu</h2>
          <Button onClick={saveData} disabled={saving}>
            {saving ? "Saving…" : "Save menu"}
          </Button>
        </div>
        {imageUrl ? (
          <p className="text-sm text-muted-foreground mb-4">
            An image override is active. Clear it above to edit the structured menu.
          </p>
        ) : null}

        <div className="space-y-8">
          {data.sections.map((section, si) => (
            <SectionEditor
              key={si}
              section={section}
              onChange={(next) => {
                const sections = [...data.sections];
                sections[si] = next;
                setData({ ...data, sections });
              }}
              onRemove={() => {
                const sections = data.sections.filter((_, i) => i !== si);
                setData({ ...data, sections });
              }}
              onMove={(dir) => setData({ ...data, sections: move(data.sections, si, dir) })}
            />
          ))}
        </div>

        <Button
          variant="outline"
          className="mt-6"
          onClick={() =>
            setData({
              ...data,
              sections: [...data.sections, { title: "New section", items: [] }],
            })
          }
        >
          + Add section
        </Button>
      </div>
    </div>
  );
}

function ImagePanel({
  imageUrl,
  onUpload,
  onClear,
}: {
  imageUrl: string | null;
  onUpload: (file: File) => void;
  onClear: () => void;
}) {
  return (
    <div className="rounded-lg border border-border p-6">
      <h2 className="font-serif text-2xl text-foreground mb-2">Menu image (optional)</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Upload a photo of a special/handwritten menu. While set, it replaces the structured menu on
        the site. Clear it to go back to the structured list.
      </p>
      <Input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onUpload(file);
          e.target.value = "";
        }}
      />
      {imageUrl ? (
        <div className="mt-4 space-y-3">
          <img
            src={imageUrl}
            alt="Current menu"
            className="max-h-80 rounded border border-border object-contain"
          />
          <Button variant="destructive" onClick={onClear}>
            Clear image
          </Button>
        </div>
      ) : null}
    </div>
  );
}

function SectionEditor({
  section,
  onChange,
  onRemove,
  onMove,
}: {
  section: MenuSection;
  onChange: (next: MenuSection) => void;
  onRemove: () => void;
  onMove: (dir: -1 | 1) => void;
}) {
  // ponytail: editor handles the flat `items` shape. Sections that use
  // `subsections` (nested) are shown read-only with a hint, since the site's
  // seed data only nests a couple sections and full nested editing is YAGNI
  // until someone needs it.
  if (section.subsections) {
    return (
      <div className="rounded-lg border border-border p-4">
        <Input
          value={section.title}
          onChange={(e) => onChange({ ...section, title: e.target.value })}
          className="font-serif text-lg mb-2"
        />
        <p className="text-sm text-muted-foreground">
          This section has grouped subsections; edit its items in the JSON seed or ask to enable
          nested editing.
        </p>
      </div>
    );
  }

  const items = section.items ?? [];

  function setItems(next: MenuItem[]) {
    onChange({ ...section, items: next });
  }

  return (
    <div className="rounded-lg border border-border p-4 space-y-4">
      <div className="flex items-center gap-2">
        <Input
          value={section.title}
          onChange={(e) => onChange({ ...section, title: e.target.value })}
          className="font-serif text-lg"
        />
        <Button variant="ghost" size="sm" onClick={() => onMove(-1)} title="Move up">
          ↑
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onMove(1)} title="Move down">
          ↓
        </Button>
        <Button variant="ghost" size="sm" onClick={onRemove} title="Remove section">
          ✕
        </Button>
      </div>

      <div className="space-y-4">
        {items.map((item, ii) => (
          <div key={ii} className="grid grid-cols-1 gap-2 rounded border border-border/60 p-3">
            <div className="flex gap-2">
              <Input
                placeholder="Item name"
                value={item.name}
                onChange={(e) => setItems(replace(items, ii, { ...item, name: e.target.value }))}
              />
              <Input
                placeholder="Price"
                value={item.price ?? ""}
                onChange={(e) => setItems(replace(items, ii, { ...item, price: e.target.value }))}
                className="w-28"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setItems(items.filter((_, i) => i !== ii))}
                title="Remove item"
              >
                ✕
              </Button>
            </div>
            <Textarea
              placeholder="Description (optional)"
              value={item.desc ?? ""}
              onChange={(e) => setItems(replace(items, ii, { ...item, desc: e.target.value }))}
              rows={2}
            />
          </div>
        ))}
      </div>

      <Button variant="outline" size="sm" onClick={() => setItems([...items, { name: "" }])}>
        + Add item
      </Button>
    </div>
  );
}

// --- helpers ---

function replace<T>(arr: T[], i: number, value: T): T[] {
  const next = [...arr];
  next[i] = value;
  return next;
}

function move<T>(arr: T[], i: number, dir: -1 | 1): T[] {
  const j = i + dir;
  if (j < 0 || j >= arr.length) return arr;
  const next = [...arr];
  [next[i], next[j]] = [next[j], next[i]];
  return next;
}

// Convert any browser-decodable image to a WebP data URL, capped at 1600px wide.
function toWebpDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const maxW = 1600;
      const scale = Math.min(1, maxW / img.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("no canvas context"));
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/webp", 0.85));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("image decode failed"));
    };
    img.src = url;
  });
}
