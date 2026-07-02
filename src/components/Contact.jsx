import React from "react";
import Reveal from "./Reveal.jsx";
import { FiMail, FiArrowUpRight, FiMapPin, FiPhone } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaCode } from "react-icons/fa";
import { profile } from "../data/content.js";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h2 className="contact-headline">
          Let's build something
          <br />
          <span className="gradient-text">worth shipping.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <a
          href={`mailto:${profile.email}`}
          className="contact-email"
          data-cursor="hover"
        >
          <FiMail />
          {profile.email}
          <FiArrowUpRight className="contact-email-arrow" />
        </a>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="contact-meta">
          <span>
            <FiMapPin /> {profile.location}
          </span>
          <span>
            <FiPhone /> {profile.phone}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.35}>
        <div className="contact-socials">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            data-cursor="hover"
          >
            <FaLinkedinIn /> LinkedIn
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            data-cursor="hover"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={profile.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            data-cursor="hover"
          >
            <FaCode /> LeetCode
          </a>
        </div>
      </Reveal>
    </section>
  );
}
