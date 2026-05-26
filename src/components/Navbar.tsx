import { Link, useLocation } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { getLocaleFromPath, localizedPath } from "@/lib/locale";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const isHomePage = pathname === "/" || pathname === "/en";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const showScrolled = scrolled || open || !isHomePage;

  useEffect(() => {
    if (!isHomePage) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  const home = localizedPath(locale, "/");
  const menu = localizedPath(locale, "/menu");
  const homeSection = (id: string) => `${home}#${id}`;

  const links = [
    { href: home, label: t("nav.home") },
    { href: homeSection("about"), label: t("nav.about") },
    { href: homeSection("dishes"), label: t("nav.dishes") },
    { href: menu, label: t("nav.menu") },
    { href: homeSection("contact"), label: t("nav.contact") },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 text-red-50",
        showScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          to={home}
          className={cn(
            "font-serif text-4xl tracking-tight text-secondary transition-colors",
            showScrolled ? "text-primary" : "text-secondary",
          )}
          aria-label="Restaurante Lino"
          onClick={() => setOpen(false)}
        >
          Restaurante Lino
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                showScrolled
                  ? "text-primary hover:text-primary/80"
                  : "text-secondary hover:text-secondary/80",
              )}
            >
              {l.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href={menu}
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-[oklch(0.36_0.13_25)] transition-colors"
          >
            {t("nav.reserve")}
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X
              className={cn(
                "h-6 w-6 text-secondary transition-colors",
                showScrolled ? "text-primary" : "text-secondary",
              )}
            />
          ) : (
            <Menu
              className={cn(
                "h-6 w-6 text-secondary transition-colors",
                showScrolled ? "text-primary" : "text-secondary",
              )}
            />
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-cream/98 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                className={cn(
                  "py-3 text-base font-medium border-b border-border/40 last:border-0 transition-colors",
                  showScrolled
                    ? "text-primary hover:text-primary/80"
                    : "text-secondary hover:text-secondary/80",
                )}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
