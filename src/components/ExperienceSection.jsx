import React from "react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolioData";

export default function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience grounded in enterprise execution"
          description="A focused track record of shipping production-ready interfaces, improving maintainability, and collaborating effectively with product and engineering teams."
        />

        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-card glass-panel reveal" key={job.company}>
              <div className="timeline-header">
                <span className="timeline-period">{job.period}</span>
                <h3>{job.role}</h3>
                <p>{job.company}</p>
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
