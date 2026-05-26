import { useTranslation } from "react-i18next";
import { SectionTitle } from "./SectionTitle";
import { Container } from "./Container";
import interior from "@/assets/gallery-interior.jpg";
import wine from "@/assets/gallery-wine.jpg";
import exterior from "@/assets/gallery-exterior.jpg";
import table from "@/assets/gallery-table.jpg";
import fireplace from "@/assets/gallery-fireplace.jpg";
import chef from "@/assets/gallery-chef.jpg";

const items = [
  { src: interior, alt: "Sala do restaurante", span: "md:col-span-2 md:row-span-1 aspect-[16/10]" },
  { src: wine, alt: "Vinho português", span: "aspect-[3/4]" },
  { src: table, alt: "Mesa servida", span: "aspect-square" },
  { src: fireplace, alt: "Lareira", span: "aspect-[3/4]" },
  { src: exterior, alt: "Exterior do restaurante", span: "md:col-span-2 aspect-[16/10]" },
  { src: chef, alt: "Empratamento", span: "aspect-square" },
];

export function GallerySection() {
  const { t } = useTranslation();
  return (
    <section id="gallery" className="bg-paper py-24 md:py-32">
      <Container>
        <SectionTitle eyebrow={t("gallery.eyebrow")} title={t("gallery.title")} />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl bg-muted ${it.span} group`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
