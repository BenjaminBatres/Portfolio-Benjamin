"use client";
import { IoIosMenu } from "react-icons/io";

import { useState } from "react";
import Navlink from "./ui/Navlink";
import SocialLink from "./ui/SocialLink";

interface MenuProps {
  links: { path: string; name: string }[];
  socialLinks: { path: string; icon: React.ReactNode }[];
}

export default function Menu({ links, socialLinks }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <IoIosMenu
        onClick={() => setIsOpen(!isOpen)}
        className="text-4xl cursor-pointer"
      />
      <div
        className={`${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"} absolute top-23 w-full left-0 transition-all duration-300 z-10`}
      >
        <div className="bg-Gray p-6 rounded-lg space-y-6">
          <ul className="space-y-5">
            {links.map((link, id) => (
              <Navlink key={id} link={link} setIsOpen={setIsOpen} />
            ))}
          </ul>
          <ul className="flex gap-2">
            {socialLinks.map((link, id) => (
              <SocialLink key={id} link={link} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
