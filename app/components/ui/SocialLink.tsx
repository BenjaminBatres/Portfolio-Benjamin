import Link from "next/link";

interface SocialLinkProps {
  link: {
    path: string;
    icon: React.ReactNode;
  };
}

export default function SocialLink({ link }: SocialLinkProps) {
  return (
    <li>
      <Link
        href={link.path}
        target="_blank"
        className="text-lg sm:text-2xl sm:text-secondary/70 hover:text-white duration-300"
      >
        <div className="py-3.5 px-6 rounded-[14px] z-3 shadow-section-title-container bg-Blue hover:bg-Blue-dark transition-colors duration-300">
          {link.icon}
        </div>
      </Link>
    </li>
  );
}
