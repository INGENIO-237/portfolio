"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathname = usePathname();

  const links = [
    { name: "home", href: "/" },
    { name: "resume", href: "/resume" },
    { name: "work", href: "/work" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={cn(
              "capitalize font-medium hover:text-accent",
              link.href == pathname && "border-b border-accent text-accent"
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
