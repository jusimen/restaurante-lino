import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DishesSection } from "@/components/DishesSection";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restaurante Lino · Cozinha tradicional em Paredes de Coura" },
      {
        name: "description",
        content:
          "Sabor, tradição e autenticidade em Castanheira, Paredes de Coura. Cozinha minhota com ingredientes locais, pratos de família e vinhos da região.",
      },
      { property: "og:title", content: "Restaurante Lino · Cozinha tradicional minhota" },
      {
        property: "og:description",
        content:
          "Restaurante familiar em Castanheira, Paredes de Coura. Arroz de sarrabulho, posta barrosã, bacalhau no forno e sobremesas de família.",
      },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_PT" },
      { property: "og:locale:alternate", content: "en_US" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "alternate", hrefLang: "pt-PT", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DishesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
