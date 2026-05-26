import { useTranslation } from "react-i18next";
import { SectionTitle } from "./SectionTitle";
import { Container } from "./Container";
import { MenuViewer } from "./MenuViewer";

const categories = [
  "couvert",
  "sopa",
  "entradasFumeiros",
  "mar",
  "pasto",
  "horta",
  "infantis",
  "docaria",
] as const;

interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

export function MenuPageContent() {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-paper py-5 md:py-24">
        <Container>
          <SectionTitle
            eyebrow={t("menu.eyebrow")}
            title={t("menu.title")}
            subtitle={t("menu.subtitle")}
          />
          <div className="mt-12">
            <MenuViewer />
          </div>
        </Container>
      </section>

      <section className="bg-background py-5 md:py-28">
        <Container className="max-w-4xl">
          <div className="space-y-20">
            {categories.map((cat) => {
              const items = t(`menu.items.${cat}`, { returnObjects: true }) as MenuItem[];
              return (
                <div key={cat}>
                  <div className="flex items-baseline gap-4 mb-8">
                    <h3 className="font-serif text-3xl md:text-4xl text-primary">
                      {t(`menu.categories.${cat}`)}
                    </h3>
                    <div className="flex-1 border-b border-dashed border-border" />
                  </div>
                  <ul className="space-y-6">
                    {items.map((item, i) => (
                      <li key={i} className="flex gap-6 items-baseline">
                        <div className="flex-1">
                          <p className="font-serif text-xl text-foreground">{item.name}</p>
                          {item.desc ? (
                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          ) : null}
                        </div>
                        <div className="flex-1 border-b border-dotted border-border/60 mb-2 mx-2 hidden sm:block" />
                        <p className="font-serif text-lg text-primary whitespace-nowrap">
                          {item.price}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-20 rounded-lg border border-border bg-paper/50 p-6 md:p-8">
            <h3 className="font-serif text-xl md:text-2xl text-primary mb-4">
              {t("menu.allergens.title")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("menu.allergens.text")}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
