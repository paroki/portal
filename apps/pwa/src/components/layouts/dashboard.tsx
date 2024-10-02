import { PropsWithChildren } from "react";
import Sidebar from "./sidebar";

interface Props extends PropsWithChildren {}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
