import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const next = height > 0 ? (window.scrollY / height) * 100 : 0;
      setProgress(next);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />;
}
