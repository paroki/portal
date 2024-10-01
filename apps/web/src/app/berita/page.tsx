"use client";

import Search from "@/components/search";
import Container from "@/components/ui/container";
import { useEffect, useState } from "react";
import { type News, newsAllPromise } from "@/util/news";
import { Box, Inset, Text, Card } from "@radix-ui/themes";
import Loading from "@/util/loading";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const renderNews = async (search: string) => {
    try {
      const data = await newsAllPromise(search);
      setIsLoading(false);
      setNewsData(data);
    } catch (error) {
      console.error("Error fetching news:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await renderNews("");
    };

    fetchData().catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <h2 className="uppercase tracking-widest font-bold">Berita</h2>
        <p>Berikut adalah berita terkini PKRBT</p>
        <Search exec={renderNews} />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm">
          {isLoading ? (
            <Loading />
          ) : (
            newsData.map((newsItem, index) => (
              <Link key={index} href={`/berita/${newsItem.id}`}>
                <Box
                  maxWidth="240px"
                  key={index}
                  className="rounded overflow-hidden bg-gray-100  shadow-sm"
                >
                  <Card size="2">
                    <Inset clip="padding-box" side="top" pb="current">
                      <Image
                        src={newsItem.thumb}
                        alt="Bold typography"
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
                      <h3 className="text-base mb-2">{newsItem.title}</h3>
                      <Text as="p" size="3">
                        {newsItem.slug}
                      </Text>
                    </div>
                  </Card>
                </Box>
              </Link>
            ))
          )}
        </div>
      </div>
    </Container>
  );
}
