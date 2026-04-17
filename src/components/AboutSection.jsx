import React from "react";
import SectionHeading from "./SectionHeading";
import { highlights } from "../data/portfolioData";

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <SectionHeading
          eyebrow="About"
          title="Senior Full Stack Engineer focused on building reliable, scalable web systems"
          description="Zubair Hussain is a full stack developer with strong experience in ASP.NET Core and React, building production-grade applications where clean architecture, performance, and usability matter equally."
        />

        <div className="about-grid">
          <article className="glass-panel about-card reveal">
            <p>
              I’m a Senior Full Stack Developer working mainly with ASP.NET Core and modern JavaScript frameworks like React and Angular.
              Most of my experience comes from building real business applications where performance, structure, and reliability actually matter.
            </p>

            <p>
              On the frontend, I focus on building clean and maintainable UI systems rather than one-off screens. I like working with
              component-based architecture, keeping things scalable as the product grows, and making sure the UX stays fast and predictable.
            </p>

            <p>
              On the backend side, I work with .NET Core, REST APIs, and database-driven systems. I’m comfortable designing APIs,
              structuring business logic properly, and making sure everything connects cleanly from database to UI without unnecessary complexity.
            </p>
          </article>

          <div className="about-highlights">
            {highlights.map((item) => (
              <article className="glass-panel highlight-card reveal" key={item}>
                <div className="highlight-dot" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
