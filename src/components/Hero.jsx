import { Canvas, useFrame } from "@react-three/fiber";
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
  useFrame(({ pointer, clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.15 + pointer.x * 0.8;
    ref.current.rotation.x = pointer.y * 0.5;
  });
  return (
    <Float speed={2} floatIntensity={1.5}>
      <mesh ref={ref} scale={2.2}>
        <icosahedronGeometry args={[1, 14]} />
        <MeshDistortMaterial color="#ff3d81" distort={0.5} speed={2} wireframe />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  let letterIndex = 0;

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 1.5]}
          frameloop={reduced ? "demand" : "always"}
          eventSource={document.getElementById("root")}
          eventPrefix="client"
        >
          <Blob />
        </Canvas>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32">
        <h1 aria-label={lines.join(" ")} className="font-display font-black leading-[0.95]">
          {lines.map((line) => (
            <span
              key={line}
              aria-hidden="true"
              className="block overflow-hidden pb-1 text-[clamp(2.1rem,8.2vw,8rem)]"
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
          className="mt-8 max-w-md text-lg text-dim"
        >
          {profile.role} at {profile.company}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Magnetic>
            <a href="#projects" className="block rounded-full bg-hot px-7 py-4 font-semibold text-void">
              View projects
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="block rounded-full border border-white/30 px-7 py-4 font-semibold backdrop-blur"
            >
              Get in touch
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
