import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { isAuthed } from "@/lib/admin-auth";
import { getMenuPayload, saveMenuData } from "@/lib/menu-cms";
import type { Locale, MenuData } from "@/lib/menu-types";

function getLocale(request: Request): Locale | null {
  const l = new URL(request.url).searchParams.get("locale");
  return l === "pt" || l === "en" ? l : null;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

export const Route = createFileRoute("/api/menu")({
  server: {
    handlers: {
      // Read current menu payload for the admin editor.
      GET: async ({ request }) => {
        if (!(await isAuthed(request))) return json({ error: "unauthorized" }, 401);
        const locale = getLocale(request);
        if (!locale) return json({ error: "invalid locale" }, 400);
        return json(await getMenuPayload(locale));
      },
      // Save structured menu data.
      POST: async ({ request }) => {
        if (!(await isAuthed(request))) return json({ error: "unauthorized" }, 401);
        const locale = getLocale(request);
        if (!locale) return json({ error: "invalid locale" }, 400);
        let data: MenuData;
        try {
          data = ((await request.json()) as { data: MenuData }).data;
        } catch {
          return json({ error: "invalid body" }, 400);
        }
        if (!data || !Array.isArray(data.sections) || !Array.isArray(data.notes)) {
          return json({ error: "invalid menu data" }, 400);
        }
        await saveMenuData(locale, data);
        return json({ ok: true });
      },
    },
  },
});
