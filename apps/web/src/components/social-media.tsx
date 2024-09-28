'use client';

import Link from 'next/link';
import { FacebookCircle, Instagram, Tiktok, Youtube } from './icons/socials';

export default function SocialMedia() {
  return (
    <ul className="flex justify-center gap-5">
      <li>
        <Link href="#" className="p-2 text-primary-50 rounded-full bg-primary-300 block">
          <Instagram />
        </Link>
      </li>
      <li>
        <Link href="#" className="p-2 text-primary-50 rounded-full bg-primary-300 block">
          <FacebookCircle />
        </Link>
      </li>
      <li>
        <Link href="#" className="p-2 text-primary-50 rounded-full bg-primary-300 block">
          <Youtube />
        </Link>
      </li>
      <li>
        <Link href="#" className="p-2 text-primary-50 rounded-full bg-primary-300 block">
          <Tiktok />
        </Link>
      </li>
    </ul>
  );
}
