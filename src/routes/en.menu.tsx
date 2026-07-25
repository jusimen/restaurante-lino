import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MenuPageContent } from "@/components/MenuPageContent";
import { getMenuPayload } from "@/lib/menu-cms";

const loadMenu = createServerFn().handler(() => getMenuPayload("en"));

export const Route = createFileRoute("/en/menu")({
  loader: () => loadMenu(),
  head: () => ({
    meta: [
      { title: "Menu · Restaurante Lino" },
      {
        name: "description",
        content:
          "Browse the Restaurante Lino menu: starters, meats, fish, salt cod, homemade desserts and Minho regional wines.",
      },
      { property: "og:title", content: "Menu · Restaurante Lino" },
      {
        property: "og:description",
        content: "Traditional Minho dishes, vinho verde and family desserts.",
      },
      { property: "og:url", content: "/en/menu" },
    ],
    links: [
      { rel: "canonical", href: "/en/menu" },
      { rel: "alternate", hrefLang: "en", href: "/en/menu" },
      { rel: "alternate", hrefLang: "pt-PT", href: "/menu" },
    ],
  }),
  component: MenuPageEn,
});

function MenuPageEn() {
  const payload = Route.useLoaderData();
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <MenuPageContent payload={payload} />
      </main>
      <Footer />
    </>
  );
}
