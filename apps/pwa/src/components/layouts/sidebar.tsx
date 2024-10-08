"use client";
import { menus } from "@/config/menu";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Sidebar() {
  const linkStyle = "text-gray-700 hover:text-gray-900";
  const session = useSession();

  return (
    <div className="w-64 bg-white shadow-md">
      <nav className="p-4">
        <ul>
          {menus.map((item, index) => (
            <li key={index} className="mb-4">
              <Link href={item.href} className={linkStyle}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            {session.data ? (
              <button onClick={() => signOut({ redirectTo: "/" })}>
                Logout
              </button>
            ) : (
              <button onClick={() => signIn("google", { redirectTo: "/" })}>
                Login
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
