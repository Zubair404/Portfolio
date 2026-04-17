import React from "react";
import { socialLinks } from "../data/socialLinks";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <h3>Zubair Hussain</h3>
          <p>Senior Full Stack Software Developer</p>
        </div>

        <div className="footer-links">
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin className="icon linkedin" /> LinkedIn
          </a>

          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            <FaGithub className="icon github" /> GitHub
          </a>

          <a href={socialLinks.email}>
            <FaEnvelope className="icon email" /> Email
          </a>

          <a href={socialLinks.resume} download>
            <FaFileAlt className="icon resume" /> Resume
          </a>
        </div>
      </div>
    </footer>
  );
}