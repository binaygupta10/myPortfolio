import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown, FiDownload, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaCode } from "react-icons/fa";
import Scene3D from "./Scene3D.jsx";
import { profile, roles, stats } from "../data/content.js";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="hero-role">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="gradient-text"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-canvas-wrap">
        <Scene3D />
      </div>
      <div className="hero-scrim" aria-hidden />
      <div className="hero-vignette" aria-hidden />

      <motion.div
        className="hero-inner section"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="eyebrow" variants={item}>
          {profile.role} · {profile.location}
        </motion.p>

        <motion.h1 className="hero-name" variants={item}>
          Binay Kumar
          <br />
          <span className="gradient-text">Gupta</span>
        </motion.h1>

        <motion.div className="hero-role-line" variants={item}>
          <span className="hero-role-prefix">I build</span> <RotatingRole />
        </motion.div>

        <motion.p className="hero-summary lead" variants={item}>
          {profile.summary}
        </motion.p>

        <motion.div className="hero-cta" variants={item}>
          <a href="#work" className="btn btn-primary" data-cursor="hover">
            View my work <FiArrowUpRight />
          </a>
          <a
            href={profile.resume}
            download
            className="btn btn-ghost"
            data-cursor="hover"
          >
            <FiDownload /> Résumé
          </a>
          <div className="hero-socials">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-cursor="hover"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              data-cursor="hover"
            >
              <FaGithub />
            </a>
            <a
              href={profile.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              data-cursor="hover"
            >
              <FaCode />
            </a>
          </div>
        </motion.div>

        <motion.div className="hero-stats" variants={item}>
          {stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <div className="hero-stat-num gradient-text">
                {s.value}
                <span>{s.suffix}</span>
              </div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <a href="#about" className="hero-scroll" aria-label="Scroll down">
        <span>Scroll</span>
        <FiArrowDown />
      </a>
    </section>
  );
}
