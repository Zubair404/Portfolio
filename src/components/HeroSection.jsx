import React from "react";
import { stats, techOrbit } from "../data/portfolioData";
import { socialLinks } from "../data/socialLinks";
import { useTypingText } from "../hooks/useTypingText";
import { useCountUp } from "../hooks/useCountUp";

function CounterCard({ value, suffix, label }) {
  const count = useCountUp(value);
  return (
    <article className="counter-card reveal">
      <h3>
        {count}
        {suffix}
      </h3>
      <p>{label}</p>
    </article>
  );
}

export default function HeroSection() {
  const typed = useTypingText([
    "Full Stack Web Developer",
    ".Net Backend Expert",
    "React Frontend Expert",
    "Scalable API Architect",
    "Enterprise Solution Builder",
    "Performance Optimization Expert",
    "Modern Web Platform Engineer",
  ]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="shell hero-grid">
        <div className="hero-copy reveal">
          <div className="eyebrow">Available for Senior Software Engineer Roles</div>
          <h1>
            Zubair Hussain
            <span>Senior Software Engineer</span>
          </h1>
          <p className="hero-lead">
          Senior Full Stack Developer with a strong backend focus and proven expertise in building scalable enterprise web platforms. Experienced across ASP.NET Core, C#, SQL Server, React, and modern frontend architecture delivering complete solutions from robust APIs and system design to polished, high performance user interfaces.
          </p>
          <div className="typing-chip">{typed}</div>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Portfolio
            </a>
            <a className="button button-secondary" href={socialLinks.resume} download>
              Download Resume
            </a>
            <a className="button button-ghost" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="glass-panel profile-panel">
            <div className="profile-badge">Senior Engineer</div>
            <div className="terminal-card">
              <div className="terminal-top">
                <span />
                <span />
                <span />
              </div>
              <div className="terminal-body">
                <p>&gt; stack.specialization()</p>
                <p className="terminal-highlight">"Full Stack Web Development"</p>
                <p>&gt; Frontend()</p>
                <p className="terminal-highlight">"React + Angular"</p>
                <p>&gt; Backend()</p>
                <p className="terminal-highlight">"ASP.NET Core + C#"</p>
              </div>
            </div>
            <div className="orbit-cloud">
              {techOrbit.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="shell stats-grid">
        {stats.map((item) => (
          <CounterCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}
