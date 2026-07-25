import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import menuImg from "@/assets/menu-fim-de-semana-lino.jpeg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Ementa · Restaurante Lino" },
      {
        name: "description",
        content:
          "Consulte a ementa do Restaurante Lino: couvert, sopas, entradas e fumeiros, mar e rio, pasto e monte, horta minhota, pratos infantis e doçaria.",
      },
      { property: "og:title", content: "Ementa · Restaurante Lino" },
      {
        property: "og:description",
        content:
          "Ementa tradicional minhota: couvert, entradas, bacalhau, carnes, sobremesas e pratos infantis.",
      },
      { property: "og:url", content: "/menu" },
    ],
    links: [
      { rel: "canonical", href: "/menu" },
      { rel: "alternate", hrefLang: "pt-PT", href: "/menu" },
      { rel: "alternate", hrefLang: "en", href: "/en/menu" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* <MenuPageContent /> */}
        <img src={menuImg} alt="Menu" className="w-full h-full object-contain mx-auto" />
      </main>
      <Footer />
    </>
  );
}
