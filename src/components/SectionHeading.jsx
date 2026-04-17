import React from "react";
export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
