"use client";

import { getNewsByIdPromise, News } from "@/util/news";
import React, { useEffect, useState } from "react";

export default function NewsDetail({ params }: { params: { id: string } }) {
  const [newsDetail, setNewsDetail] = useState<News>();

  useEffect(() => {
    const fetchData = async () => {
      const fetched = await getNewsByIdPromise(Number(params.id));
      setNewsDetail(fetched);
    };

    fetchData().catch((err) => {
      console.log(err);
    });
  }, [params]);

  return (
    <div>
      <h3>{newsDetail?.title}</h3>
    </div>
  );
}
