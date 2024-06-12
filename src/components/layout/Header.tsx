import Link from "next/link";
import DesktopNav from "./DesktopNav";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="">
          <h1 className="text-4xl font-semibold">
            INGENIO<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <DesktopNav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
}
