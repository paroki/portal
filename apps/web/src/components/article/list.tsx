/* eslint-disable @next/next/no-img-element */

import Container from '@/components/ui/container';
import { Box, Inset, Card } from '@radix-ui/themes';
import Link from 'next/link';
import { Article } from '@pkrbt/openapi';
import { extractSeo } from '@/utils/blocks';
import { Search } from '../ui/search';
import PaginationCustom from '../pagination';
import DateReadable from '../date';

interface ArticleElProps {
  articles: Article[];
  pageMeta: {
    size: number;
    page?: number;
    search?: string;
  };
}

const ListView = ({ article }: { article: Article }) => {
  const seo = extractSeo(article);
  return (
    <Box maxWidth="240px" className="rounded overflow-hidden group transition-all hover:scale-[1.01]">
      <Card size="2" className="relative">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={seo.shareImageUrl ?? '/static/noimg.jpg'}
            alt="Bold typography"
            width="200"
            height="140"
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: 140,
              backgroundColor: 'var(--gray-5)'
            }}
          />
        </Inset>
        <div className="absolute top-2 right-2 bg-primary-500 p-1 tracking-wider uppercase text-white rounded text-xs">
          <p>{article.category?.name}</p>
        </div>
        <div>
          <h3 className="text-base mb-2 group-hover:text-primary-600">{article.title}</h3>
          <p>{seo.metaDescription?.substring(0, 85)}...</p>
          <div className="mt-4 text-gray-500 w-full">
            <DateReadable isoDate={article.publishedAt as string} />
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default function ArticleList({ articles, pageMeta }: ArticleElProps) {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <h2 className="uppercase tracking-widest font-bold">Berita</h2>
        <p>
          {pageMeta.search ? (
            <>
              Berikut hasil pencarian <span className="font-bold">{pageMeta.search}</span>
            </>
          ) : (
            'Berikut artikel terkini PKRBT'
          )}
        </p>
        <Search />
        {articles.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-sm">
              {articles.map((article, index) => (
                <Link key={index} href={`/${article.slug}`} className="hover:text-inherit">
                  <ListView article={article} />
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <PaginationCustom page={pageMeta.page ?? 1} size={pageMeta.size} search={pageMeta.search} />
            </div>
          </>
        ) : (
          <p className="w-full text-center text-gray-400 p-6">
            Wah kami tidak menemukan artikel dengan pencarian tersebut ...
          </p>
        )}
      </div>
    </Container>
  );
}
