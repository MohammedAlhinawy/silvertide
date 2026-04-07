function FloatingBackground() {
  const ships = [
    { size: 80, top: "18%", delay: "0s", duration: "38s", opacity: 0.12 },
    { size: 55, top: "55%", delay: "12s", duration: "50s", opacity: 0.08 },
    { size: 100, top: "35%", delay: "25s", duration: "42s", opacity: 0.07 },
    { size: 45, top: "72%", delay: "6s", duration: "35s", opacity: 0.1 },
    { size: 65, top: "82%", delay: "18s", duration: "46s", opacity: 0.06 },
  ];
  const containers = [
    { size: 36, top: "25%", delay: "5s", duration: "60s", opacity: 0.09 },
    { size: 28, top: "65%", delay: "20s", duration: "55s", opacity: 0.07 },
    { size: 44, top: "45%", delay: "33s", duration: "65s", opacity: 0.06 },
  ];

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

      {/* Drifting ships */}
      {ships.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: s.top,
            left: 0,
            fontSize: s.size,
            opacity: s.opacity,
            animation: `drift ${s.duration} linear ${s.delay} infinite`,
            filter: "drop-shadow(0 0 8px rgba(201,168,76,0.3))",
          }}
        >
          🚢
        </div>
      ))}

      {/* Drifting containers */}
      {containers.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: c.top,
            left: 0,
            fontSize: c.size,
            opacity: c.opacity,
            animation: `drift2 ${c.duration} linear ${c.delay} infinite`,
          }}
        >
          📦
        </div>
      ))}

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
