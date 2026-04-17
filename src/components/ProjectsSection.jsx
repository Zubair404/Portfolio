import React from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolioData";

export default function ProjectsSection() {
  return (
    <section className="section section-tinted" id="projects">
      <div className="shell">
        <SectionHeading
          eyebrow="Projects"
          title="Portfolio concepts that reflect senior-level product thinking"
          description="A premium showcase of realistic platforms aligned with the kind of systems senior full stack engineers are trusted to shape and scale."
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card glass-panel reveal" key={project.title} style={{ "--delay": `${index * 60}ms` }}>
              <div className="project-topline">
                <span>{project.category}</span>
                <strong>0{index + 1}</strong>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="chip-list">
                {project.tags.map((tag) => (
                  <span className="chip chip-soft" key={tag}>
                    {tag}
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
