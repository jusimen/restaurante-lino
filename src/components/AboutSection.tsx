import { useTranslation } from "react-i18next";
import { SectionTitle } from "./SectionTitle";
import { Container } from "./Container";
import chefJoseGomes from "@/assets/chef-jose-gomes.jpeg";

export function AboutSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <Container>
        <SectionTitle eyebrow={t("about.eyebrow")} title={t("about.title")} />
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(260px,320px)_1fr] lg:gap-16 items-start max-w-6xl mx-auto lg:items-center">
          <figure className="mx-auto w-full max-w-xs lg:max-w-none lg:mx-0">
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-md aspect-3/4 bg-muted">
              <img
                src={chefJoseGomes}
                alt={t("about.chef.alt")}
                width={800}
                height={1067}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-4 text-center font-serif text-lg text-foreground lg:text-left">
              {t("about.chef.caption")}
            </figcaption>
          </figure>
          <div className="space-y-10">
            <div className="grid gap-10 md:grid-cols-2 text-center lg:text-left">
              <p className="text-base leading-relaxed text-foreground/85">{t("about.p1")}</p>
              <p className="text-base leading-relaxed text-foreground/85">{t("about.p2")}</p>
            </div>
            <p className="text-base leading-relaxed text-foreground/85 italic text-center lg:text-left">
              {t("about.p3")}
            </p>
          </div>
        </div>

        {/* <dl className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto text-center border-t border-border pt-12">
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
        </dl> */}
      </Container>
    </section>
  );
}
