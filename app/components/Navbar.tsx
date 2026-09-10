import { FaGithub, FaLinkedin } from "react-icons/fa";
import Menu from "./Menu";
import Navlink from "./ui/Navlink";
import SocialLink from "./ui/SocialLink";
import * as motion from "motion/react-client";
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
    <div className="fixed top-5 w-full z-50 px-5 sm:px-8">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center max-w-360 mx-auto border border-Muted bg-Gray px-6 py-4 rounded-full relative"
      >
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
      </motion.nav>
    </div>
  );
}
