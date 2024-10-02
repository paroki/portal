import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export default function OrganizationLayout({ children }: Props) {
  return (
    <div>
      <h1 className="text-2xl">Organisasi</h1>
      <div>{children}</div>
    </div>
  );
}
