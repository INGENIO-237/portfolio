"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const pathname = usePathname();

  const links = [
    { name: "home", href: "/" },
    { name: "resume", href: "/resume" },
    { name: "work", href: "/work" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-accent" size={30} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <h1 className="text-4xl text-white font-semibold">
              INGENIO<span className="text-accent">.</span>
            </h1>
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="flex justify-center">
          <div className="flex flex-col items-center justify-center mt-8 gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={cn(
                    "capitalize font-medium hover:text-accent text-white text-2xl",
                    pathname == link.href &&
                      "border-b border-accent pb-2 w-max border-b-2 text-accent"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
