"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] absolute mix-blend-lighten"
        >
          <Image
            src="/assets/photo-2.png"
            priority
            quality={100}
            fill
            alt="Photo"
            className="obect-contain rounded-full pointer-events-none"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] h-[300px] lg:w-[505px] lg:h-[505px]"
          fill="transparent"
          viewBox="0 0 505 505"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={253}
            cy={253}
            r={250}
            stroke="#00ff99"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "240 10 2" }}
            animate={{
              strokeDasharray: ["14 115 24 24", "16 25 92 72", "4 250 22 22"],
              rotate: [180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
