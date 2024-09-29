import BeritaItem from "@/components/berita/view";
import Container from "@/components/ui/container";
import { strapi } from "@/util/strapi";
import { Berita } from "@pkrbt/openapi";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  let berita: Berita | undefined = undefined;
  const listBerita = await strapi.berita.list({
    params: {
      query: {
        filters: {
          slug: {
            $eq: params.slug,
          },
        },
      },
    },
  });

  if (listBerita.items) {
    berita = listBerita.items[0];
  }

  return (
    <Container className="max-w-screen-lg">
      {berita ? <BeritaItem item={berita} /> : notFound()}
    </Container>
  );
}
