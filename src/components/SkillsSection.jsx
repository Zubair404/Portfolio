import React from "react";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section className="section section-tinted" id="skills">
      <div className="shell">
        <SectionHeading
          eyebrow="Skills"
          title="Built for modern product teams, scalable frontends, and real delivery pressure"
          description="A balanced skill profile covering frontend craft, backend understanding, data modeling, tooling, deployment awareness, and leadership fundamentals."
        />

        <div className="skills-grid">
          {skills.map((group) => (
            <article className="glass-panel skill-group reveal" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-list">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
