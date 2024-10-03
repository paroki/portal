import api from "@/utils/strapi";
import ArticleList from "../../components/article/list";

type SearchParams = {
  page?: number;
  pageSize?: number;
  category?: string;
  sort?: string[];
  filters?: {
    [key: string]: number | string;
  };
};

type Props = {
  searchParams: SearchParams;
};

const defaults: SearchParams = {
  page: 1,
  pageSize: 10,
  sort: ["publishedAt:desc"],
};

// TODO: find a way to remove the line below
export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: Props) {
  const withDefaults = {
    ...defaults,
    ...searchParams,
  };

  const { items } = await api.article.search(withDefaults);
  return <div>{items && <ArticleList articles={items} />}</div>;
}
