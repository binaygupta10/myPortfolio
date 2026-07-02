import React from "react";
import Reveal from "./Reveal.jsx";
import { skillGroups, achievements } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="skills-header">
        <Reveal>
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">recognition</span>.
          </h2>
        </Reveal>
      </div>

      <div className="skills-layout">
        <div className="skills-groups">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <div className="skill-group card">
                <h3 className="skill-group-title">{g.label}</h3>
                <div className="skill-chips">
                  {g.items.map((it) => (
                    <span className="chip" key={it}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="achievements">
          <Reveal>
            <h3 className="achievements-title">Achievements</h3>
          </Reveal>
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="achievement card">
                <div className="achievement-bar" />
                <div>
                  <div className="achievement-title">{a.title}</div>
                  <div className="achievement-detail">{a.detail}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
