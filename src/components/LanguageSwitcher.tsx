import { useLocation, useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { getLocaleFromPath, swapLocalePath } from "@/lib/locale";
import { setLocale } from "@/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const locale = getLocaleFromPath(pathname);

  const go = (target: "pt" | "en") => {
    if (target === locale) return;
    setLocale(target);
    void navigate({ to: swapLocalePath(pathname, target) });
  };

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className="inline-flex items-center rounded-full border border-border bg-card/60 p-0.5 text-xs font-medium"
    >
      {(["pt", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => go(l)}
          className={cn(
            "px-3 py-1 rounded-full transition-colors uppercase tracking-wider",
            locale === l
              ? "bg-primary text-primary-foreground"
              : "text-foreground/70 hover:text-foreground",
          )}
        >
          {t(`lang.${l}`)}
        </button>
      ))}
    </div>
  );
}
