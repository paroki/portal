/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { getNewsByIdPromise, News } from '@/util/news';
import React, { useEffect, useState } from 'react';

export default function NewsDetail({ params }: { params: { slug: string } }) {
  const [newsDetail, setNewsDetail] = useState<News>();

  useEffect(() => {
    const fetchData = async () => {
      const fetched = await getNewsByIdPromise(Number(params.slug));
      setNewsDetail(fetched);
    };

    fetchData().catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <h3>{newsDetail?.title}</h3>
    </div>
  );
}
