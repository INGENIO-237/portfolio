import { ScrollArea } from "../ui/scroll-area";

export default function Experiences() {
  const experiences = [
    {
      period: "Apr. 2023 - Present",
      position: "Software Engineer",
      company: "Mentalists",
    },
    {
      period: "May 2022 - Apr. 2023",
      position: "Software Engineer",
      company: "SECEL",
    },
    {
      period: "Sept. 2022 - Dec. 2022",
      position: "Web Developer - Freelance",
      company: "MYWAY Consulting SARL",
    },
  ];
  return (
    <div className="flex flex-col gap-[30px] text-center lg:text-left">
      <h1 className="text-4xl">Experience</h1>
      <p className="max-w-[600px] text-white/45 mx-auto lg:mx-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        similique incidunt dignissimos.
      </p>
      <ScrollArea className="h-[300px]">
        <ul className="grid lg:grid-cols-2 gap-5">
          {experiences.map((experience, index) => {
            return (
              <li key={index} className="bg-[#27272c] py-5 pl-5 rounded w-full">
                <span className="text-accent">{experience.period}</span>
                <h3>{experience.position}</h3>
                <div className="mt-5 flex gap-2 items-center">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/45">{experience.company}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}
