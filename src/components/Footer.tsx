import { useTranslation } from "react-i18next";
import { useLocation } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { Container } from "./Container";
import { getLocaleFromPath, localizedPath } from "@/lib/locale";

export function Footer() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const year = new Date().getFullYear();
  const home = localizedPath(locale, "/");
  const menu = localizedPath(locale, "/menu");

  return (
    <footer className="bg-espresso text-cream/85" style={{ background: "oklch(0.22 0.025 40)" }}>
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-3xl text-white">
              Restaurante <span className="italic text-[oklch(0.85_0.1_55)]">Lino</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed max-w-xs text-white/70">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">{t("footer.explore")}</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href={home} className="hover:text-white">{t("nav.home")}</a></li>
              <li><a href={`${home === "/" ? "" : home}#about`} className="hover:text-white">{t("nav.about")}</a></li>
              <li><a href={menu} className="hover:text-white">{t("nav.menu")}</a></li>
              <li><a href={`${home === "/" ? "" : home}#contact`} className="hover:text-white">{t("nav.contact")}</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">{t("footer.visit")}</p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-white/80">
              {t("contact.address")}<br />
              <a href={`tel:${t("contact.phone").replace(/\s/g, "")}`} className="hover:text-white">{t("contact.phone")}</a><br />
              <a href={`mailto:${t("contact.email")}`} className="hover:text-white">{t("contact.email")}</a>
            </address>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Instagram" className="rounded-full border border-white/20 p-2 hover:bg-white/10 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-white/20 p-2 hover:bg-white/10 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
          <p>© {year} Restaurante Lino. {t("footer.rights")}</p>
          <p>Castanheira · Paredes de Coura · Portugal</p>
        </div>
      </Container>
    </footer>
  );
}
