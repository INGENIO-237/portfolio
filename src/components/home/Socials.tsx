import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Socials() {
  const socials = [
    { icon: <FaGithub size={25} />, href: "https://github.com/INGENIO-237/" },
    {
      icon: <FaLinkedinIn size={25} />,
      href: "https://www.linkedin.com/in/ben-hamadou-abdel-kalif-671111228/",
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.href} target="_blank">
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}
