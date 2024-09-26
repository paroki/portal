"use client";

import { Berita, PagedCollection } from "@pkrbt/strapi-bridge";
import { useState } from "react";
import invariant from "tiny-invariant";
import { readBerita } from "./fetch";

type Nullable<T> = T | null;

export default function Testing({
  initial,
}: {
  initial: PagedCollection<Berita>;
}) {
  const [data] = useState(initial);
  const [item, setItem] = useState<Nullable<Berita>>(null);

  const stringify = (value: object) => {
    return JSON.stringify(value, undefined, 2);
  };

  return (
    <div>
      <h1>Testing strapi</h1>
      <button
        type={"button"}
        onClick={async () => {
          invariant(data.items);
          invariant(data.items[0]);
          const documentId = data.items[0].documentId;
          invariant(documentId);
          const berita = await readBerita(documentId);
          setItem(berita);
          console.log(item);
        }}
      >
        Read Berita
      </button>
      <div>{stringify(data)}</div>
    </div>
  );
}
