"use client";

import CountUp from "react-countup";

const stats = [
  { num: 2, text: "Years of experience" },
  { num: 4, text: "Intl. Certications" },
  { num: 4, text: "Projects" },
];

export default function Stats() {
  return (
    <div className="flex justify-between flex-wrap mb-5 lg:justify-start lg:gap-8">
      {stats.map((stat, index) => {
        return (
          <div key={index} className="flex items-center gap-2">
            <CountUp
              end={stat.num}
              duration={5}
              delay={2}
              className="text-4xl lg:text-6xl font-extrabold text-accent"
            />
            <p className="max-w-[100px]">{stat.text}</p>
          </div>
        );
      })}
    </div>
  );
}
