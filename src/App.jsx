import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

import Cursor from "./components/Cursor.jsx";
import Preloader from "./components/Preloader.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./components/components.css";

const SNAP = new URLSearchParams(window.location.search).has("snap");

export default function App() {
  const [loading, setLoading] = useState(!SNAP);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  // Smooth scroll (Lenis)
  useEffect(() => {
    if (SNAP) return;
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // route anchor clicks through Lenis for smooth section jumps
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length > 1) {
        e.preventDefault();
        lenis.scrollTo(id, { offset: -10 });
      }
    };
    document.addEventListener("click", onClick);

    // Honour an initial deep-link hash (e.g. /#work) once mounted.
    if (window.location.hash.length > 1) {
      const target = window.location.hash;
      setTimeout(() => lenis.scrollTo(target, { immediate: true, offset: -10 }), 300);
    }

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  // Preloader lifecycle
  useEffect(() => {
    if (SNAP) return;
    const t = setTimeout(() => setLoading(false), 2300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className="bg-fx" aria-hidden />
      <div className="grain" aria-hidden />
      <Cursor />
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <AnimatePresence>{loading && <Preloader key="pre" />}</AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
