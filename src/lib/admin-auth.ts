import { getCmsEnv } from "./cf-env";

const COOKIE = "lino_admin";

async function adminPassword(): Promise<string | undefined> {
  return (await getCmsEnv()).ADMIN_PASSWORD;
}

async function sha256Hex(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function expectedToken(): Promise<string | null> {
  const pw = await adminPassword();
  if (!pw) return null;
  return sha256Hex(pw);
}

function readCookie(request: Request, name: string): string | null {
  const header = request.headers.get("cookie");
  if (!header) return null;
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return decodeURIComponent(v.join("="));
  }
  return null;
}

export async function isAuthed(request: Request): Promise<boolean> {
  const token = await expectedToken();
  if (!token) return false;
  return readCookie(request, COOKIE) === token;
}

export async function checkPassword(password: string): Promise<boolean> {
  const pw = await adminPassword();
  return !!pw && password === pw;
}

export async function sessionCookie(): Promise<string> {
  const token = (await expectedToken()) ?? "";
  return `${COOKIE}=${token}; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=${60 * 60 * 24 * 30}`;
}
