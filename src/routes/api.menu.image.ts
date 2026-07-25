import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { isAuthed } from "@/lib/admin-auth";
import { deleteMenuImage, saveMenuImage } from "@/lib/menu-cms";
import type { Locale } from "@/lib/menu-types";

function getLocale(request: Request): Locale | null {
  const l = new URL(request.url).searchParams.get("locale");
  return l === "pt" || l === "en" ? l : null;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

// Cap stored image at ~4MB of base64 to stay well under the 25MB KV value limit.
const MAX_DATA_URL_LEN = 4 * 1024 * 1024;

export const Route = createFileRoute("/api/menu/image")({
  server: {
    handlers: {
      // Upload/replace the menu image (already converted to WebP data URL client-side).
      POST: async ({ request }) => {
        if (!(await isAuthed(request))) return json({ error: "unauthorized" }, 401);
        const locale = getLocale(request);
        if (!locale) return json({ error: "invalid locale" }, 400);
        let dataUrl: string;
        try {
          dataUrl = ((await request.json()) as { dataUrl?: string }).dataUrl ?? "";
        } catch {
          return json({ error: "invalid body" }, 400);
        }
        if (!dataUrl.startsWith("data:image/")) {
          return json({ error: "expected an image data URL" }, 400);
        }
        if (dataUrl.length > MAX_DATA_URL_LEN) {
          return json({ error: "image too large (max ~3MB)" }, 413);
        }
        await saveMenuImage(locale, dataUrl);
        return json({ ok: true });
      },
      // Clear the image, reverting to structured data.
      DELETE: async ({ request }) => {
        if (!(await isAuthed(request))) return json({ error: "unauthorized" }, 401);
        const locale = getLocale(request);
        if (!locale) return json({ error: "invalid locale" }, 400);
        await deleteMenuImage(locale);
        return json({ ok: true });
      },
    },
  },
});
