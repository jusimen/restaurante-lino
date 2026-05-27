import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { Container } from "./Container";

export function ContactSection() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <Container>
        <SectionTitle eyebrow={t("contact.eyebrow")} title={t("contact.title")} />

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="space-y-8">
            <InfoRow icon={<MapPin className="h-5 w-5" />} label={t("contact.eyebrow")}>
              {t("contact.address")}
            </InfoRow>
            <InfoRow icon={<Phone className="h-5 w-5" />} label={t("contact.phoneLabel")}>
              <a
                href={`tel:${t("contact.phone").replace(/\s/g, "")}`}
                className="hover:text-primary"
              >
                {t("contact.phone")}
              </a>
            </InfoRow>
            <InfoRow icon={<Mail className="h-5 w-5" />} label={t("contact.emailLabel")}>
              <a href={`mailto:${t("contact.email")}`} className="hover:text-primary">
                {t("contact.email")}
              </a>
            </InfoRow>
            <InfoRow icon={<Clock className="h-5 w-5" />} label={t("contact.hoursLabel")}>
              <span className="block">{t("contact.hours.hours1")}</span>
              <span className="block">{t("contact.hours.hours2")}</span>
              <span className="block">{t("contact.hours.hours3")}</span>
            </InfoRow>

            <a
              href={`tel:${t("contact.phone").replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-md hover:bg-[oklch(0.36_0.13_25)] transition-colors"
            >
              {t("contact.ctaReserve")}
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-md aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <iframe
              title={t("contact.mapTitle")}
              src="https://www.google.com/maps?q=Castanheira,+Paredes+de+Coura,+Portugal&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <div className="mt-1 text-base text-foreground">{children}</div>
      </div>
    </div>
  );
}
