/* eslint-disable @next/next/no-img-element */
import { extractSeo } from '@/utils/blocks';
import type { Article } from '@pkrbt/openapi';
import { Box, Card, Inset } from '@radix-ui/themes';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import DateReadable from './date';

export function ArticleItem({ article }: { article: Article }) {
  const seo = extractSeo(article);
  return (
    <Link href={`/${article.slug ?? 'no-slug'}`} className="hover:text-inherit">
      {/* TODO: every article should have slug! remove line above */}
      <Box maxWidth="240px" className="group">
        <Card size="2">
          <Inset clip="padding-box" side="top" pb="current" className="relative rounded overflow-hidden">
            <div className="absolute w-full h-full bg-primary-400 opacity-0 group-hover:opacity-50 top-0 flex justify-center items-center transition-all">
              <EyeIcon className="text-white w-9 h-9" />
            </div>
            <img
              width={200}
              height={140}
              src={seo.shareImageUrl ?? '/static/noimg.jpg'}
              alt={`image for ${article.title}`}
              style={{
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: 140,
                backgroundColor: 'var(--gray-5)'
              }}
            />
          </Inset>
          <div>
            <h3 className="my-1 text-lg group-hover:text-primary-600">{article.title}</h3>
            <p className="text-base hover:text-inherit">{article.description?.substring(0, 75)}...</p>
            <DateReadable isoDate={article.publishedAt as string} showIcon className="text-sm my-2" />
          </div>
        </Card>
      </Box>
    </Link>
  );
}
