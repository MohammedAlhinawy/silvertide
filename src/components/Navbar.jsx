import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const nav = ["Home", "About", "Services", "Contact"];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 5%",
          height: scrolled ? "68px" : "84px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "rgba(5,15,30,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
          transition: "all 0.4s ease",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }} onClick={() => scrollTo("home")}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              // background: "linear-gradient(135deg, var(--gold), var(--navy-light))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // boxShadow: "0 0 18px rgba(201,168,76,0.4)",
              animation: "pulse-ring 3s ease-in-out infinite",
              overflow: "hidden",
            }}
          >
            <img
              src="/logo.png"
              alt="SilverTide Logo"
              style={{
                width: "38px",
                height: "38px",
                objectFit: "contain",
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.15rem",
                fontWeight: 700,
                background: "linear-gradient(90deg, var(--white), var(--gold-light))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.02em",
                lineHeight: 1.1,
              }}
            >
              SilverTide
            </div>
            <div style={{ fontSize: "0.62rem", color: "var(--silver)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Tanzania Limited
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: "36px", alignItems: "center" }} className="desktop-nav">
          {nav.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              style={{
                background: "none",
                border: "none",
                color: "var(--silver-light)",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                cursor: "pointer",
                padding: "6px 0",
                position: "relative",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--gold-light)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--silver-light)")}
            >
              {item}
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "0%",
                  height: "1px",
                  background: "var(--gold)",
                  transition: "width 0.3s ease",
                }}
              />
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            style={{
              background: "linear-gradient(135deg, var(--gold), #a8762e)",
              color: "#050f1e",
              border: "none",
              borderRadius: "4px",
              padding: "10px 22px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              cursor: "pointer",
              transition: "all 0.3s",
              boxShadow: "0 4px 18px rgba(201,168,76,0.3)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 24px rgba(201,168,76,0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 18px rgba(201,168,76,0.3)";
            }}
          >
            Get a Quote
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--gold-light)",
            fontSize: "1.5rem",
            cursor: "pointer",
            zIndex: 1100,
            padding: "8px",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="mobile-menu-overlay"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(5,15,30,0.98)",
          backdropFilter: "blur(24px)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        {nav.map((item, i) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            style={{
              background: "none",
              border: "none",
              color: "var(--silver-light)",
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              cursor: "pointer",
              padding: "14px 0",
              transition: "color 0.3s, transform 0.3s",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: menuOpen ? `${i * 0.08}s` : "0s",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "var(--gold-light)";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "var(--silver-light)";
              e.target.style.transform = "scale(1)";
            }}
          >
            {item}
          </button>
        ))}
        <div style={{ width: "60px", height: "1px", background: "rgba(201,168,76,0.3)", margin: "10px 0" }} />
        <button
          onClick={() => scrollTo("contact")}
          style={{
            background: "linear-gradient(135deg, var(--gold), #a8762e)",
            color: "#050f1e",
            border: "none",
            borderRadius: "6px",
            padding: "14px 40px",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            cursor: "pointer",
            boxShadow: "0 6px 24px rgba(201,168,76,0.4)",
            marginTop: "10px",
          }}
        >
          Get a Quote
        </button>
      </div>
    </>
  );
}

export default Navbar;
