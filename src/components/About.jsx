import React from "react";
import Reveal from "./Reveal.jsx";
import { profile, marqueeTech, education } from "../data/content.js";
import profilePic from "../img/profile.jpeg";

function Marquee() {
  const row = [...marqueeTech, ...marqueeTech];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span className="marquee-item" key={i}>
            <t.icon /> {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <p className="eyebrow">About</p>
        <h2 className="section-title">
          I turn requirements into <span className="gradient-text">reliable</span>{" "}
          backend systems.
        </h2>
      </Reveal>

      <div className="about-grid">
        <Reveal delay={0.1} className="about-photo-wrap">
          <div className="about-photo card">
            <img src={profilePic} alt={profile.name} />
            <div className="about-photo-badge">
              <span className="dot" /> Open to opportunities
            </div>
          </div>
        </Reveal>

        <div className="about-copy">
          <Reveal delay={0.15}>
            <p className="about-lead">
              I'm a backend engineer based in {profile.location} with{" "}
              <strong>~4 years</strong> shipping Java / Spring Boot services on
              PostgreSQL and AWS. I like owning a service end-to-end — from schema
              design and query tuning to third-party integrations and the 2am
              on-call page.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="about-lead muted">
              My work has run through RBI-regulated lending at Protium and
              hospitality tech at Simplotel — domains where correctness,
              idempotency, and compliance aren't optional. I use AI-assisted tools
              day-to-day, but everything ships through review and tests.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="about-edu">
              {education.map((e) => (
                <div className="about-edu-item" key={e.school}>
                  <div>
                    <div className="about-edu-degree">{e.degree}</div>
                    <div className="about-edu-school">{e.school}</div>
                  </div>
                  <div className="about-edu-meta">
                    <span>{e.period}</span>
                    <span className="gradient-text">{e.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1}>
        <Marquee />
      </Reveal>
    </section>
  );
}
