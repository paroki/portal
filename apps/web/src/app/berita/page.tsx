import api from "@/util/strapi";
import Homepage from "./client-news/news-list";

export default async function Page() {
  const { items } = await api.article.search({});
  return <Homepage news={items} />;
}
