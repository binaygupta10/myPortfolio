import React from "react";
import Reveal from "./Reveal.jsx";
import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">
          Where I've <span className="gradient-text">shipped</span>.
        </h2>
      </Reveal>

      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <article className="timeline-item card">
              <div className="timeline-marker" aria-hidden />
              <div className="timeline-head">
                <div>
                  <h3 className="timeline-company">{job.company}</h3>
                  <p className="timeline-role">{job.role}</p>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-tag">{job.tag}</span>
                  <span className="timeline-period">{job.period}</span>
                  <span className="timeline-loc">{job.location}</span>
                </div>
              </div>
              <ul className="timeline-points">
                {job.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
