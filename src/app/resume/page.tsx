"use client";

import Certifications from "@/components/resume/Certifications";
import Experiences from "@/components/resume/Experiences";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
// import {} from "react-icons"

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80px] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto">
        <Tabs className="flex flex-col lg:flex-row lg:items-start gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div>
            <TabsContent value="experience" className="w-full">
              <Experiences />
            </TabsContent>
            <TabsContent value="certifications" className="w-full">
              <Certifications />
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              About me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
