import api from '@/utils/strapi';

export async function getArticles(limit: number = 5) {
  // TODO: fix unit test error
  try {
    const { items } = await api.article.search({
      page: 1,
      limit,
      sort: ['publishedAt:desc']
    });
    return items;
  } catch (e) {
    console.error(e);
    return [];
  }
}
