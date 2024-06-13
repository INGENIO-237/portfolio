"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

export default function StairsTransition() {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div
          key={pathname}
          className="h-screen w-screen fixed top-0 flex pointer-events-none"
        >
          <Stairs />
        </div>
      </AnimatePresence>
    </>
  );
}
