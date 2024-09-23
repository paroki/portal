import "@radix-ui/themes/styles.css";

export default function BeritaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
