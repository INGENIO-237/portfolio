import Photo from "@/components/home/Photo";
import Socials from "@/components/home/Socials";
import Stats from "@/components/home/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <main className="h-full container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:pt-8 lg:pb-24 mb-8 lg:mb-0">
        <div className="text-center lg:text-left order-2 lg:order-none">
          <span className="text-xl">Software Engineer</span>
          <h1 className="h1 my-6">
            Hello I'm
            <br />
            <span className="text-accent">BEN HAMADOU A.</span> (aka{" "}
            <span className="text-accent">INGENIO</span>)
          </h1>
          <p className="max-w-[500px] mb-9">
            Backend Engineer with some descent knowledge(kinda) in frontend.😅{" "}
            <br />
            {/* Passion for the art of crafting digital solutions to address
            real-world problems.🦾
            <br /> */}
            {/* Driven by stimulating, challenging and rewarding projects.🧭 */}
          </p>

          <div className="flex flex-col lg:flex-row lg:justify-start items-center gap-5">
            <Button variant="outline" className="flex items-center gap-2">
              <span>Download CV</span>
              <FiDownload />
            </Button>
            <div>
              <Socials />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-none mb-8 lg:mb-0">
          <Photo />
        </div>
      </div>
      <Stats />
    </main>
  );
}
