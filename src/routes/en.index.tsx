import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DishesSection } from "@/components/DishesSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "Restaurante Lino · Traditional Portuguese cuisine in Paredes de Coura" },
      {
        name: "description",
        content:
          "Flavour, tradition and authenticity in Castanheira, Paredes de Coura. Minho cuisine with local ingredients, family recipes and regional wines.",
      },
      { property: "og:title", content: "Restaurante Lino · Traditional Portuguese cuisine" },
      {
        property: "og:description",
        content:
          "Family-run restaurant in Castanheira, Paredes de Coura. Arroz de sarrabulho, Barrosã steak, baked salt cod and homemade desserts.",
      },
      { property: "og:url", content: "/en" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "pt_PT" },
    ],
    links: [
      { rel: "canonical", href: "/en" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "pt-PT", href: "/" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
  }),
  component: HomePageEn,
});

function HomePageEn() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DishesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
