import { useTranslation } from "react-i18next";
import { SectionTitle } from "./SectionTitle";
import { Container } from "./Container";
import { DishCard } from "./DishCard";
import bacalhauZePipo from "@/assets/dish-bacalhau-ze-pipo.png";
import arrozPicaChao from "@/assets/dish-arroz-pica-chao.png";
import cabrito from "@/assets/dish-cabrito.png";

const dishKeys = [
  { key: "bacalhauZePipo", image: bacalhauZePipo },
  { key: "arrozPicaChao", image: arrozPicaChao },
  { key: "cabrito", image: cabrito },
] as const;

export function DishesSection() {
  const { t } = useTranslation();
  return (
    <section id="dishes" className="bg-paper py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow={t("dishes.eyebrow")}
          title={t("dishes.title")}
          subtitle={t("dishes.subtitle")}
        />
        <div className="mt-16 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishKeys.map(({ key, image }) => (
            <DishCard
              key={key}
              image={image}
              name={t(`dishes.items.${key}.name`)}
              description={t(`dishes.items.${key}.desc`)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
