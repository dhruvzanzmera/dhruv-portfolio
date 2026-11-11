import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const [big, setBig] = useState(false);
  const x = useSpring(useMotionValue(-100), { damping: 28, stiffness: 400, mass: 0.4 });
  const y = useSpring(useMotionValue(-100), { damping: 28, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => setBig(!!e.target.closest("a, button, input, textarea, [data-cursor]"));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      animate={{ scale: big ? 3.5 : 1 }}
      className="pointer-events-none fixed left-0 top-0 z-[100] -ml-2 -mt-2 hidden h-3.5 w-3.5 rounded-full border-2 border-white bg-accent shadow-sm shadow-slate-900/20 [@media(pointer:fine)]:block"
    />
  );
}
