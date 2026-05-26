import { useTranslation } from "react-i18next";
import { useLocation } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { getLocaleFromPath, localizedPath } from "@/lib/locale";

export function HeroSection() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);

  return (
    <section className="relative isolate min-h-[100svh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Interior do Restaurante Lino"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <p className="ornament text-xs md:text-sm uppercase tracking-[0.35em] justify-center text-white/80">
          {t("hero.eyebrow")}
        </p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05]">
          Restaurante <span className="italic text-[oklch(0.85_0.1_55)]">Lino</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/85 italic font-serif">
          {t("brand.tagline")}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href={localizedPath(locale, "/menu")}
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:bg-[oklch(0.36_0.13_25)] transition-colors"
          >
            {t("hero.ctaMenu")}
          </a>
          <a
            href="tel:+351251000000"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 backdrop-blur-sm px-7 py-3 text-sm font-medium text-white hover:bg-white/15 transition-colors"
          >
            {t("hero.ctaReserve")}
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase">
        Castanheira · Paredes de Coura
      </div>
    </section>
  );
}
