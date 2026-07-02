import React from "react";
import { FaLinkedinIn, FaGithub, FaCode } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner section">
        <div className="footer-brand">
          <span className="nav-logo-mark">B</span>
          <span>Binay Kumar Gupta</span>
        </div>
        <p className="footer-note">
          Backend Engineer · {profile.tagline}
        </p>
        <div className="footer-socials">
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
            <FaCode />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Binay Kumar Gupta</span>
          <a href="#home" className="footer-top" data-cursor="hover">
            Back to top <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
