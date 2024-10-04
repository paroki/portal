/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "@/components/ui/container";
import { useEffect, useState } from "react";
import { Box, Inset, Text, Card } from "@radix-ui/themes";
import Loading from "@/components/loading";
import Link from "next/link";
import { Article } from "@pkrbt/openapi";
import { extractSeo } from "@/utils/blocks";

const ListView = ({ article }: { article: Article }) => {
  const seo = extractSeo(article);
  console.log(seo.shareImageUrl);
  return (
    <Box
      maxWidth="240px"
      className="rounded overflow-hidden bg-gray-100  shadow-sm"
    >
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={seo.shareImageUrl ?? "/static/noimg.jpg"}
            alt="Bold typography"
            width="200"
            height="140"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <div className="p-4">
          <h3 className="text-base mb-2">{article.title}</h3>
          <Text as="p" size="3">
            {seo.metaDescription?.substring(0, 100)}
          </Text>
        </div>
      </Card>
    </Box>
  );
};

export default function ArticleList({ articles }: { articles: Article[] }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <h2 className="uppercase tracking-widest font-bold">Berita</h2>
        <p>Berikut adalah berita terkini PKRBT</p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm">
          {isLoading ? (
            <Loading />
          ) : (
            articles.map((article, index) => (
              <Link key={index} href={`/${article.slug}`}>
                <ListView article={article} />
              </Link>
            ))
          )}
        </div>
      </div>
    </Container>
  );
}
