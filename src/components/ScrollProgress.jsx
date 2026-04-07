import { useState, useEffect } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${progress}%`,
        background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
        zIndex: 9999,
        transition: "width 0.1s",
        boxShadow: "0 0 12px var(--gold)",
      }}
    />
  );
}

export default ScrollProgress;
