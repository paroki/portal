import BeritaList from "@/components/berita/list";
import Container from "@/components/ui/container";
import { strapi } from "@/util/strapi";

export default async function Page() {
  const list = await strapi.berita.list({
    params: {
      query: {
        sort: "publishedAt:desc",
      },
    },
  });

  return (
    <Container className="max-w-screen-lg">
      <h1>Berita</h1>

      {/* daftar berita */}
      <BeritaList list={list} />
    </Container>
  );
}
