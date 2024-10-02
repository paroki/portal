import { menus } from "@/config/menu";
import Link from "next/link";

export default function Sidebar() {
  const linkStyle = "text-gray-700 hover:text-gray-900";

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
        </ul>
      </nav>
    </div>
  );
}
