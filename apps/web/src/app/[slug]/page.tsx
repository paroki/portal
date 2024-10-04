import BlocksView from "@/components/blocks/blocks";
import ContainerHeader from "@/components/container-header";
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

  const article = await api.article.read(slug);
  if (!article) {
    return notFound();
  }

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <ContainerHeader>{article.title}</ContainerHeader>
        {/* start content */}
        <BlocksView blocks={article.blocks} />
        {/* end content */}
      </div>
    </Container>
  );
}
