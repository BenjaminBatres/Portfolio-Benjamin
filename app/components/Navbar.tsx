import { FaGithub, FaLinkedin } from "react-icons/fa";
import Menu from "./Menu";
import Navlink from "./ui/Navlink";
import SocialLink from "./ui/SocialLink";

export default function Navbar() {
  const links = [
    {
      path: "#",
      name: "Home",
    },
    {
      path: "#projects",
      name: "Projects",
    },
    {
      path: "#about",
      name: "About",
    },
    {
      path: "#contact",
      name: "Contact",
    },
  ];

  const socialLinks = [
    {
      path: "https://github.com/BenjaminBatres",
      icon: <FaGithub />,
    },
    {
      path: "https://www.linkedin.com/in/benjamin-batres-9216b5329/",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <div className="pt-8 px-5 sm:px-8">
      <nav className="flex justify-between items-center max-w-360 mx-auto border border-Muted bg-Gray px-6 py-4 rounded-full relative">
        <h1 className="text-xl sm:text-2xl lg:text-[32px] font-extralight uppercase">
          Ben Batres
        </h1>
        <ul className="hidden lg:flex gap-10">
          {links.map((link, id) => (
            <Navlink key={id} link={link} />
          ))}
        </ul>
        <ul className="hidden lg:flex gap-4">
          {socialLinks.map((link, id) => (
            <SocialLink key={id} link={link} />
          ))}
        </ul>

        <Menu links={links} socialLinks={socialLinks} />
      </nav>
    </div>
  );
}
