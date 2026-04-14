import { useState, useEffect } from "react";

function FloatingBackground() {
  const images = [
    { src: "/images/IMG_6373.JPG", animation: "carouselLeft" },
    { src: "/images/IMG_6374.JPG", animation: "carouselRight" },
    { src: "/images/IMG_6375.JPG", animation: "carouselCenter" },
    { src: "/images/IMG_6376.JPG", animation: "carouselDiagonal" },
    { src: "/images/IMG_6377.WEBP", animation: "carouselFloat" },
    { src: "/images/IMG_6378.WEBP", animation: "carouselLeft" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Gradient mesh */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 80% 60% at 20% 40%, rgba(12,55,110,0.35) 0%, transparent 70%),
                        radial-gradient(ellipse 60% 50% at 80% 70%, rgba(10,40,90,0.25) 0%, transparent 65%),
                        linear-gradient(180deg, var(--navy) 0%, #050c1a 100%)`,
        }}
      />
      {/* Animated wave lines */}
      <svg
        style={{ position: "absolute", bottom: "0", left: 0, width: "200%", opacity: 0.06, animation: "wave 18s linear infinite" }}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120Z" fill="var(--gold)" />
      </svg>

      {/* Animated background image - shows one at a time, covers full background */}
      <img
        key={currentIndex}
        src={images[currentIndex].src}
        alt=""
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.15,
          animation: "centerPulse 5s ease-in-out infinite",
          filter: "blur(2px) brightness(0.5)",
          pointerEvents: "none",
          transition: "opacity 1s ease-in-out",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(180,200,220,0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(180,200,220,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export default FloatingBackground;
