import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import Cursor from "./components/Cursor";
import ScrollBar from "./components/ScrollBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  // smooth inertia scrolling (skipped when the visitor prefers reduced motion)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ anchors: true });
    let id;
    const raf = (t) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Cursor />
      <ScrollBar />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </MotionConfig>
  );
}
