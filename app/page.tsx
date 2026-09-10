import ContactSection from "./components/Sections/ContactSection";
import HeroSection from "./components/Sections/HeroSection";
import ProjectSection from "./components/Sections/ProjectSection";
import Footer from "./components/Sections/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}
