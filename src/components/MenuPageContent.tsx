import { useTranslation } from "react-i18next";
import { SectionTitle } from "./SectionTitle";
import { Container } from "./Container";
import type { MenuItem, MenuPayload } from "@/lib/menu-types";

export function MenuPageContent({ payload }: { payload: MenuPayload }) {
  const { t } = useTranslation();

  // Image override: if an image is set, show it instead of structured data.
  if (payload.imageUrl) {
    return (
      <section className="bg-background py-5 md:py-12">
        <Container className="max-w-4xl">
          <img
            src={payload.imageUrl}
            alt={t("menu.title")}
            className="w-full h-auto object-contain mx-auto rounded-lg"
          />
        </Container>
      </section>
    );
  }

  const { sections, notes } = payload.data;

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
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-sans text-lg md:text-xl font-medium text-foreground leading-snug">
              {item.name}
            </p>
            {item.price ? (
              <span className="font-sans text-lg md:text-xl font-medium text-primary whitespace-nowrap">
                {item.price}
              </span>
            ) : null}
          </div>
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
