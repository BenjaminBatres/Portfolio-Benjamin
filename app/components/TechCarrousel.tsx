"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import CssSvg from "../assets/tech/css3.svg";
import GitSvg from "../assets/tech/git.svg";
import HtmlSvg from "../assets/tech/html5.svg";
import JavaScriptSvg from "../assets/tech/javascript.svg";
import TypeScriptSvg from "../assets/tech/typescript.svg";
import NextjsSvg from "../assets/tech/nextjs.svg";
import ReactSvg from "../assets/tech/react.svg";
import ReduxSvg from "../assets/tech/redux.svg";
import TailwindSvg from "../assets/tech/tailwind.svg";
import FigmaSvg from "../assets/tech/figma.svg";
import Firebasesvg from "../assets/tech/firebase.svg";

export default function TechCarrousel() {
  const techSvgs = [
    {
      name: "NextJS",
      svg: NextjsSvg,
    },
    {
      name: "JavaScript",
      svg: JavaScriptSvg,
    },
    {
      name: "TypeScript",
      svg: TypeScriptSvg,
    },
    {
      name: "Tailwind",
      svg: TailwindSvg,
    },
    {
      name: "Redux",
      svg: ReduxSvg,
    },
    {
      name: "React",
      svg: ReactSvg,
    },
    {
      name: "CSS",
      svg: CssSvg,
    },
    {
      name: "HTML",
      svg: HtmlSvg,
    },
    {
      name: "Git",
      svg: GitSvg,
    },
    {
      name: "Figma",
      svg: FigmaSvg,
    },
    {
      name: "Firebase",
      svg: Firebasesvg,
    },
  ];
  return (
    <div className="relative overflow-hidden">
      <Swiper
        slidesPerView="auto"
        speed={3000}
        spaceBetween={40}
        autoplay={{ delay: 0 }}
        loop={true}
        allowTouchMove={false}
        modules={[Autoplay]}
      >
        {techSvgs.map((tech, id) => (
          <SwiperSlide key={id} className="w-auto!">
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-xl
                        border border-white/10 bg-white/3
                        hover:bg-white/6 transition-colors"
            >
              <Image src={tech.svg} alt={tech.name} className="w-10 h-10" />

              <span className="text-sm text-white/70">{tech.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-black to-transparent z-10" />

      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-black to-transparent z-10" />
    </div>
  );
}
