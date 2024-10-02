import ArticleView from "@/components/article/view";
import api from "@/utils/api";
import Link from "next/link";

// TODO: should be fixed by openapi libs
export const dynamic = "force-dynamic";

export default async function ArticlePage() {
  const { items, meta } = await api.article.search({
    page: 1,
    limit: 3,
    filters: {},
    sort: ["publishedAt:desc"],
  });

  if (!meta) {
    return {
      notFound: true,
    };
  }

  return (
    <div>
      <div className="pb-4">
        <Link href="/articles/create">Buat Baru</Link>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <ArticleView key={index} article={item} />
        ))}
      </div>
      <div className="flex flex-col">
        <span>Page: {meta.pagination.page}</span>
        <span>Page Total: {meta.pagination.pageCount}</span>
        <span>Per Page: {meta.pagination.pageSize}</span>
        <span>Rows: {meta.pagination.total}</span>
      </div>
    </div>
  );
}
