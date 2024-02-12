import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  const Link_Info = [
    { id: "main", href: "/", text: "主页" },
    { id: "mental", href: "/mental", text: "心理" },
    { id: "resources", href: "/resources", text: "资源" },
    { id: "tools", href: "/tools", text: "工具" },
    { id: "about", href: "/about", text: "关于" },
  ];

  return (
    <html lang="en">
      <body className="bg-white">
        <div className="flex flex-row border-0 border-b">
          {Link_Info.map((Link_Item) => (
            <div className="basis-1/5">
              <Link
                id={Link_Item.id}
                href={Link_Item.href}
                className="block font-mono text-center text-xl font-semibold hover:text-indigo-500"
              >
                {Link_Item.text}
              </Link>
            </div>
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
