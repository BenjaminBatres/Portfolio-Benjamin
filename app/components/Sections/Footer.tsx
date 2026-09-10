import { BiBriefcase } from "react-icons/bi";
import * as motion from "motion/react-client";
export default function Footer() {
  return (
    <footer className="py-10 px-5 sm:px-8 border-t border-Muted/60">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-360 mx-auto flex justify-between flex-wrap"
      >
        <p className="text-sm font-medium text-Secondary">
          © {new Date().getFullYear()} Ben Batres
        </p>
        <p className="text-sm font-medium text-Secondary flex items-center gap-2">
          <BiBriefcase className="text-base" />
          Frontend Developer
        </p>
      </motion.div>
    </footer>
  );
}
