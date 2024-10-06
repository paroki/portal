import type { Metadata } from "next";
import localFont from "next/font/local";
import "../assets/css/globals.css";
import DashboardLayout from "@/components/layouts/dashboard";
import { SessionProvider } from "next-auth/react";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PKRBT Dashboard",
  description: "Aplikasi Layanan Informasi Paroki Kristus Raja Barong Tongkok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <DashboardLayout>{children}</DashboardLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
