import { strapi } from '@/util/strapi';
import Homepage from './client-news/news-list';

export default async function Page() {
  const { items } = await strapi.berita.list();
  console.log(items);
  return <Homepage news={items} />;
}
