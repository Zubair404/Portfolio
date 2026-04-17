import React, { useEffect } from "react";
import AboutSection from "./components/AboutSection";
import BackToTopButton from "./components/BackToTopButton";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ScrollProgress from "./components/ScrollProgress";
import SkillsSection from "./components/SkillsSection";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => element.classList.add("revealed"));

    if (!("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <BackToTopButton />
    </div>
  );
}
