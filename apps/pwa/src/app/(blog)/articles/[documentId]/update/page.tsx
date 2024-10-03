"use server";
import ArticleForm from "@/components/article/form";
import api from "@/utils/api";

export default async function ArticleUpdatePage({
  params,
}: {
  params: { documentId: string };
}) {
  const item = await api.article.read(params.documentId);
  return (
    <div>
      <ArticleForm article={item} context="update" />
    </div>
  );
}
