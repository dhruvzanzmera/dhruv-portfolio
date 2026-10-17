import { motion } from "motion/react";

export default function SectionHeading({ title, text }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.2rem,7vw,5.5rem)] font-black leading-none"
        >
          {title}
        </motion.h2>
      </div>
      {text && <p className="mt-4 max-w-xl text-dim">{text}</p>}
    </div>
  );
}
