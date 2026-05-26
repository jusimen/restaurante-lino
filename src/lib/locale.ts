import type { Locale } from "@/i18n";

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}

export function localizedPath(locale: Locale, path: string): string {
  // path is in the canonical PT form: "/", "/menu"
  const clean = path === "/" ? "" : path;
  return locale === "en" ? `/en${clean || ""}` || "/en" : path;
}

export function swapLocalePath(pathname: string, target: Locale): string {
  const current = getLocaleFromPath(pathname);
  if (current === target) return pathname;
  if (target === "en") {
    return pathname === "/" ? "/en" : `/en${pathname}`;
  }
  // pt
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}
