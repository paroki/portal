'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

interface SearchProps {
  exec: (search: string) => void;
}

export default function Search({ exec }: SearchProps) {
  const [search, setSearch] = useState('');

  const execSearch = async () => {
    exec(search);
  };
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 my-4">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          execSearch();
        }}
        className="flex justify-center gap-4 w-full max-w-96">
        <Input
          type="text"
          placeholder="Cari berita ..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Button type="submit">Cari</Button>
      </form>
    </div>
  );
}
