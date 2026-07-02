import React, { useRef } from "react";
import Reveal from "./Reveal.jsx";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/content.js";

function ProjectCard({ p, index }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${-py * 8}deg`);
    el.style.setProperty("--ry", `${px * 10}deg`);
    el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
  };
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <Reveal delay={index * 0.06}>
      <article
        ref={ref}
        className="project-card card"
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ "--accent": p.accent }}
        data-cursor="hover"
      >
        <div className="project-glow" />
        <div className="project-index">0{index + 1}</div>
        <h3 className="project-title">{p.title}</h3>
        <p className="project-blurb">{p.blurb}</p>
        <p className="project-highlight">
          <FiArrowUpRight /> {p.highlight}
        </p>
        <div className="project-stack">
          {p.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section">
      <Reveal>
        <p className="eyebrow">Selected Work</p>
        <h2 className="section-title">
          Things I've <span className="gradient-text">built</span>.
        </h2>
      </Reveal>

      <div className="project-grid">
        {projects.map((p, i) => (
          <ProjectCard p={p} index={i} key={p.title} />
        ))}
      </div>
    </section>
  );
}
