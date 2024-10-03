import BlocksView from "@/components/blocks/blocks";
import Container from "@/components/ui/container";
import api from "@/utils/strapi";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

// TODO: find a way to remove the line below
export const dynamic = "force-dynamic";

export default async function Page({ params }: Props) {
  const { slug } = params;

  const item = await api.article.read(slug);
  if (!item) {
    return notFound();
  }

  return (
    <Container>
      {/* start header */}
      <div>
        <h1>{item.title}</h1>
      </div>
      {/* end header */}

      {/* start content */}
      <BlocksView blocks={item.blocks} />
      {/* end content */}
    </Container>
  );
}
