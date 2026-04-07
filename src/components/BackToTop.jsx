import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, var(--gold), #a8762e)",
        color: "#050f1e",
        border: "none",
        fontSize: "1.1rem",
        cursor: "pointer",
        zIndex: 999,
        boxShadow: "0 6px 24px rgba(201,168,76,0.4)",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.4s ease",
        pointerEvents: show ? "auto" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;
