import React, { useEffect, useState } from "react";
import { socialLinks } from "../data/socialLinks";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav shell">
        <a className="brand" href="#home">
          <span className="brand-mark">ZH</span>
          <span className="brand-copy">
            <strong>Zubair Hussain</strong>
            <small>Senior Full Stack Developer</small>
          </span>
        </a>

        <button className={`nav-toggle ${open ? "active" : ""}`} type="button" onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-panel ${open ? "open" : ""}`}>
          <div className="nav-links">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>

          <a className="nav-resume" href={socialLinks.resume} download>
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
