'use client';

import { signIn, signOut } from 'next-auth/react';
import { BrandsGoogle } from '../icons/socials';
import { Text } from '@radix-ui/themes';

export function SignIn() {
  return (
    <button
      className="bg-primary-500 p-2 rounded text-white hover:bg-primary-600 transition-all"
      onClick={() => signIn('google')}>
      <div className="flex items-center gap-2">
        <BrandsGoogle />
        <Text as="p" className="text-sm">
          Masuk
        </Text>
      </div>
    </button>
  );
}

export function SignOut() {
  return (
    <button className="bg-red-500 p-2 rounded text-white hover:bg-red-600 transition-all" onClick={() => signOut()}>
      <div className="flex items-center gap-2">
        <Text as="p" className="text-sm">
          Keluar
        </Text>
      </div>
    </button>
  );
}
