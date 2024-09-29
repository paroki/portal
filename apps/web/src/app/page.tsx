import { strapi } from "@/util/strapi";
import Homepage from "@/components/Homepage";

export default async function Home() {
  const berita = await strapi.berita.list();
  return <Homepage listBerita={berita} />;
}
