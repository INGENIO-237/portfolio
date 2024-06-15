import { ScrollArea } from "../ui/scroll-area";

export default function Certifications() {
  const certifications = [
    {
      date: "Aug. 2023",
      title: "API Security Architect",
      institution: "API Academy",
    },
    {
      date: "Aug. 2023",
      title: "Postman API Student Expert",
      institution: "Postman",
    },
    {
      date: "Jul. 2023",
      title: "API DesignerAPI Designer",
      institution: "API Academy",
    },

    {
      date: "Jul. 2023",
      title: "Scrum Fundamentals Certified (SFC)",
      institution: "SCRUMstudy - Accreditation Body for Scrum and Agile",
    },
  ];
  return (
    <div className="flex flex-col gap-[30px] text-center lg:text-left">
      <h1 className="text-4xl">Certifications</h1>
      <p className="max-w-[600px] text-white/45 mx-auto lg:mx-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        similique incidunt dignissimos.
      </p>
      <ScrollArea className="h-[300px]">
        <ul className="grid lg:grid-cols-2 gap-5">
          {certifications.map((experience, index) => {
            return (
              <li key={index} className="bg-[#27272c] py-5 pl-5 rounded w-full">
                <span className="text-accent">{experience.date}</span>
                <h3>{experience.title}</h3>
                <div className="mt-5 flex gap-2 items-center">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/45">{experience.institution}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}
