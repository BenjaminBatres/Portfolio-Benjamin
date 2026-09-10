import Image from "next/image";
import ProfileImage from "../../assets/images/Hero-img.jpg";
import Link from "next/link";
import TechCarrousel from "../TechCarrousel";
import * as motion from "motion/react-client";
export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-20 px-5 sm:px-8 max-w-370 mx-auto overflow-hidden relative pt-30 lg:pt-20">
      <div className="flex flex-col items-center lg:flex-row gap-10 lg:gap-20 ">
        <div className="lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col gap-1 text-4xl sm:text-5xl xl:text-[55px] leading-[120%] font-extralight text-center lg:text-left mb-4 xl:mb-6"
          >
            Hi! I'm Ben Batres,
            <span className="font-bold italic xl:text-6xl">
              Frontend Developer
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="xl:text-lg text-center lg:text-left max-w-xl mb-6"
          >
            I build modern, responsive web experiences that combine clean design
            with intuitive functionality. I'm passionate about solving problems,
            learning new technologies, and creating digital experiences that
            provide real value to users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <Link
              href="#projects"
              className="bg-Blue-dark text-white px-8 py-5 rounded-full hover:bg-Blue-dark/80 duration-300"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="bg-Gray border border-Muted text-white px-8 py-5 rounded-full hover:bg-Gray/80 duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
        <div
          className="absolute
            h-135
            lg:h-200
            w-full
            lg:w-130
            xl:w-180
            bottom-0
            right-0
            rounded-full
            bg-[radial-gradient(circle,rgba(0,105,255,0.55)_0%,rgba(0,75,170,0.35)_35%,transparent_75%)]
            blur-[30px]
            -z-10"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-[65%] sm:w-1/2 lg:w-[32%]"
        >
          <Image
            src={ProfileImage}
            alt="Ben Batres"
            priority
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="aspect-square w-full rounded-full border-2 border-Muted"
          />
        </motion.div>
      </div>
      <TechCarrousel />
    </div>
  );
}
