import ArticleForm from "@/components/article/form";

export default async function CreateArticlePage() {
  const item = {};
  return (
    <div>
      <h1>Create Article</h1>
      <ArticleForm article={item} context="create" />
    </div>
  );
}
