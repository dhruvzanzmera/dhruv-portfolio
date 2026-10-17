import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gradient-to-r from-hot to-electric"
    />
  );
}
