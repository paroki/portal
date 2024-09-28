import type { Metadata } from 'next';
import '../assets/globals.css';
import Navigation from '@/components/nav-server';
import { Header } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/footer';
import { Montserrat } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Paroki Kristus Raja Barong Tongkok',
  description: 'Portal Paroki Kristus Raja Barong Tongkok'
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        <Navigation />
        <main className="mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
