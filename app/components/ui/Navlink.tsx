'use client'
import Link from "next/link";

interface NavlinkProps {
  link: {
    path: string;
    name: string;
  };
  setIsOpen? : React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navlink({ link, setIsOpen }: NavlinkProps) {
  return (
    <li>
      <Link
      onClick={() => setIsOpen?.(false)}
        href={link.path}
        className="text-Secondary uppercase font-light hover:text-Blue transition-colors duration-300"
      >
        {link.name}
      </Link>
    </li>
  );
}
