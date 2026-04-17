import React from "react";
import SectionHeading from "./SectionHeading";
import { socialLinks } from "../data/socialLinks";

const contacts = [
  { label: "Email", value: "zubairhussain404@gmail.com", href: socialLinks.email },
  { label: "LinkedIn", value: socialLinks.linkedin, href: socialLinks.linkedin },
  { label: "GitHub", value: socialLinks.github, href: socialLinks.github },
  { label: "WhatsApp", value: "+92 303 9557979", href: socialLinks.whatsapp },
];

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="shell">
        <SectionHeading
          eyebrow="Contact" title="Open to Senior Engineering Roles"
          description="Available to contribute to scalable systems, modern web platforms, and engineering teams focused on clean architecture and real world delivery."
        />

        <div className="contact-grid">
          <article className="glass-panel contact-card reveal">
            <h3>Let&apos;s connect</h3>
            <p>
              Reach out if you are building something serious and want a strong engineer who can take ownership of frontend, backend, or full stack delivery. I am open to product discussions, engineering challenges, and collaboration on scalable web applications.
            </p>
            <div className="contact-list">
              {contacts.map((item) => (
                <a className="contact-link" href={item.href} key={item.label} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </article>

          <article className="glass-panel action-card reveal">
            <h3>Quick actions</h3>
            <p>Use the links below to explore the profile, access the resume, or jump directly into a conversation.</p>
            <div className="action-list">
              <a className="button button-primary" href={socialLinks.resume} download>
                Download CV
              </a>
              <a className="button button-secondary" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                Open LinkedIn
              </a>
              <a className="button button-ghost" href={socialLinks.github} target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
