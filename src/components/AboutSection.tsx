import { useTranslation } from "react-i18next";
import { SectionTitle } from "./SectionTitle";
import { Container } from "./Container";

export function AboutSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <Container>
        <SectionTitle eyebrow={t("about.eyebrow")} title={t("about.title")} />
        <div className="mt-12 grid gap-10 md:grid-cols-3 max-w-5xl mx-auto">
          <p className="text-base leading-relaxed text-foreground/85">{t("about.p1")}</p>
          <p className="text-base leading-relaxed text-foreground/85">{t("about.p2")}</p>
          <p className="text-base leading-relaxed text-foreground/85 italic">{t("about.p3")}</p>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto text-center border-t border-border pt-12">
          {[
            { v: "60+", k: "years" },
            { v: "100%", k: "local" },
            { v: "30+", k: "recipes" },
          ].map((s) => (
            <div key={s.k}>
              <dt className="font-serif text-4xl md:text-5xl text-primary">{s.v}</dt>
              <dd className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {t(`about.stats.${s.k}`)}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
