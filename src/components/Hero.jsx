import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "motion/react";
import Magnetic from "./Magnetic";
import { profile } from "../data/content";

const lines = ["DHRUV", "ZANZMERA", "FULL-STACK DEV."];
const reduced =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Blob() {
  const ref = useRef();
  const { viewport } = useThree();
  useFrame(({ pointer, clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.15 + pointer.x * 0.8;
    ref.current.rotation.x = pointer.y * 0.5;
  });
  return (
    <Float speed={1.2} floatIntensity={0.45}>
      <mesh ref={ref} position={[viewport.width * 0.19, 0.15, 0]} scale={1.7}>
        <icosahedronGeometry args={[1, 7]} />
        <MeshDistortMaterial
          color="#c9f06b"
          distort={0.32}
          speed={1.2}
          wireframe
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  let letterIndex = 0;

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 1.5]}
          frameloop={reduced ? "demand" : "always"}
          eventSource={document.getElementById("root")}
          eventPrefix="client"
        >
          <ambientLight intensity={1.5} />
          <pointLight position={[4, 3, 5]} intensity={2} color="#c9f06b" />
          <Blob />
        </Canvas>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32">
        <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-dim sm:text-sm">
          <span className="h-px w-8 bg-hot" />
          {profile.role} <span className="text-hot">/</span> {profile.company}
        </p>

        <h1 aria-label={lines.join(" ")} className="font-display font-bold leading-[0.92] tracking-[-0.065em]">
          {lines.map((line) => (
            <span
              key={line}
              aria-hidden="true"
              className={`block overflow-hidden pb-1 ${line === "FULL-STACK DEV." ? "text-[clamp(1.7rem,8.5vw,7.8rem)] text-hot" : "text-[clamp(2.5rem,9.2vw,8.6rem)]"}`}
            >
              {[...line].map((ch) => {
                const i = letterIndex++;
                return (
                  <motion.span
                    key={i}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.15 + i * 0.035, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-7 max-w-lg text-base leading-relaxed text-dim sm:text-lg"
        >
          I build thoughtful web experiences, bringing frontend craft and full-stack thinking together from the first idea to the final detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Magnetic>
            <a href="#projects" className="group flex items-center gap-3 rounded-full bg-hot px-6 py-3.5 font-semibold text-void transition-transform hover:scale-[1.03]">
              Explore my work
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="block rounded-full border border-white/20 px-6 py-3.5 font-semibold transition-colors hover:border-hot/60 hover:bg-white/5"
            >
              Let&apos;s talk
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
