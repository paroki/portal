import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export default function BlogLayout({ children }: Props) {
  return (
    <div>
      <h1 className="text-2xl">Blog</h1>
      <div>{children}</div>
    </div>
  );
}
