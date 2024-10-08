import type { Metadata } from 'next';
import '../assets/globals.css';
import Navigation from '@/components/nav-server';
import { Footer } from '@/components/layouts/footer';
import { Montserrat } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Paroki Kristus Raja Barong Tongkok',
  description: 'Portal Paroki Kristus Raja Barong Tongkok',
  openGraph: {
    title: 'Paroki Kristus Raja Barong Tongkok',
    description: 'Portal informasi digital Paroki Kristus Raja Barong Tongkok.'
  }
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
        <Navigation />
        {/* <Header /> */}
        <main className="mx-auto min-h-[90vh]">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
