import { menus } from "@/config/menu";
import { auth, signIn, signOut } from "@/utils/auth";
import Link from "next/link";

export default async function Sidebar() {
  const linkStyle = "text-gray-700 hover:text-gray-900";
  const session = await auth();

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
            {session ? (
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/auth/login" });
                }}
              >
                <button>Logout</button>
              </form>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn("google");
                }}
              >
                <button type="submit">Login</button>
              </form>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
