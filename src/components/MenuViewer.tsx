import { useTranslation } from "react-i18next";
import { Download, ExternalLink } from "lucide-react";

const PDF_PATH = "/menu.pdf";

export function MenuViewer() {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href={PDF_PATH}
          download
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md hover:bg-[oklch(0.36_0.13_25)] transition-colors"
        >
          <Download className="h-4 w-4" />
          {t("menu.download")}
        </a>
        <a
          href={PDF_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          {t("menu.openPdf")}
        </a>
      </div>
    </div>
  );
}
