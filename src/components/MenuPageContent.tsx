import { useTranslation } from "react-i18next";
import { SectionTitle } from "./SectionTitle";
import { Container } from "./Container";

interface MenuItem {
  name: string;
  desc?: string;
}

interface MenuSubsection {
  title?: string;
  items: MenuItem[];
}

interface MenuSection {
  title: string;
  subsections?: MenuSubsection[];
  items?: MenuItem[];
}

interface MenuNote {
  label: string;
  text: string;
}

export function MenuPageContent() {
  const { t } = useTranslation();
  const sections = t("menu.sections", { returnObjects: true }) as MenuSection[];
  const notes = t("menu.notes", { returnObjects: true }) as MenuNote[];

  return (
    <>
      <section className="bg-paper py-5 md:py-24">
        <Container>
          <SectionTitle
            eyebrow={t("menu.eyebrow")}
            title={t("menu.title")}
            subtitle={t("menu.subtitle")}
          />
        </Container>
      </section>

      <section className="bg-background py-5 md:py-28">
        <Container className="max-w-4xl">
          <div className="space-y-20">
            {sections.map((section, i) => (
              <div key={i}>
                <div className="flex items-baseline gap-4 mb-8">
                  <h3 className="font-serif text-3xl md:text-4xl text-primary">{section.title}</h3>
                  <div className="flex-1 border-b border-dashed border-border" />
                </div>

                {section.subsections ? (
                  <div className="space-y-12">
                    {section.subsections.map((subsection, j) => (
                      <div key={j}>
                        {subsection.title ? (
                          <h4 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-6 tracking-normal">
                            {subsection.title}
                          </h4>
                        ) : null}
                        <MenuItemList items={subsection.items} />
                      </div>
                    ))}
                  </div>
                ) : section.items ? (
                  <MenuItemList items={section.items} />
                ) : null}
              </div>
            ))}
          </div>

          {notes.length > 0 ? (
            <div className="mt-16 space-y-4 text-base text-foreground/80 leading-relaxed">
              {notes.map((note, i) => (
                <p key={i}>
                  <span className="font-semibold text-foreground">{note.label}:</span> {note.text}
                </p>
              ))}
            </div>
          ) : null}

          <div className="mt-20 rounded-lg border border-border bg-paper/50 p-6 md:p-8">
            <h3 className="font-serif text-xl md:text-2xl text-primary mb-4">
              {t("menu.allergens.title")}
            </h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              {t("menu.allergens.text")}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

function MenuItemList({ items }: { items: MenuItem[] }) {
  return (
    <ul className="space-y-7">
      {items.map((item, i) => (
        <li key={i} className="border-l-2 border-primary/20 pl-4 md:pl-5">
          <p className="font-sans text-lg md:text-xl font-medium text-foreground leading-snug">
            {item.name}
          </p>
          {item.desc ? (
            <p className="font-sans text-base text-foreground/75 mt-1.5 leading-relaxed max-w-2xl">
              {item.desc}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
