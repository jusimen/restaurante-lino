import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { checkPassword, sessionCookie } from "@/lib/admin-auth";

const json = (body: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });

export const Route = createFileRoute("/api/menu/login")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let password: string;
        try {
          password = ((await request.json()) as { password?: string }).password ?? "";
        } catch {
          return json({ error: "invalid body" }, 400);
        }
        if (!(await checkPassword(password))) {
          return json({ error: "wrong password" }, 401);
        }
        return json({ ok: true }, 200, { "set-cookie": await sessionCookie() });
      },
    },
  },
});
