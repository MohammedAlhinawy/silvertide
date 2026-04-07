import { FaRocket } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        padding: "100px 5% 60px",
        overflow: "hidden",
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.08)",
          boxShadow: "inset 0 0 120px rgba(10,40,90,0.5)",
          animation: "rotateSlow 60s linear infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-6%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.05)",
          animation: "rotateSlow 40s linear infinite reverse",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "800px", textAlign: "center", position: "relative" }}>
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(201,168,76,0.1)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "999px",
            padding: "7px 20px",
            marginBottom: "32px",
            animation: "fadeInUp 0.8s ease both",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", display: "inline-block", animation: "blink 1.6s ease infinite" }} />
          <span style={{ fontSize: "0.78rem", color: "var(--gold-light)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500 }}>
            Tanzania's Premier Logistics Partner
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.08,
            marginBottom: "28px",
            animation: "fadeInUp 0.9s ease 0.15s both",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, var(--white) 30%, var(--silver-light) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SilverTide
          </span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, var(--gold) 20%, var(--gold-light) 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "0.65em",
            }}
          >
            Tanzania Limited
          </span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
            color: "var(--silver)",
            marginBottom: "14px",
            fontWeight: 300,
            letterSpacing: "0.03em",
            lineHeight: 1.7,
            animation: "fadeInUp 1s ease 0.3s both",
          }}
        >
          Reliable Clearing, Shipping &amp; Logistics Solutions
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            marginBottom: "52px",
            maxWidth: "520px",
            margin: "0 auto 52px",
            lineHeight: 1.8,
            animation: "fadeInUp 1s ease 0.45s both",
          }}
        >
          Connecting Tanzania to the world through seamless customs clearance,
          freight forwarding, and end-to-end logistics.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeInUp 1s ease 0.6s both",
          }}
        >
          <button
            onClick={() => scrollTo("contact")}
            style={{
              background: "linear-gradient(135deg, var(--gold) 0%, #b8892a 100%)",
              color: "#050f1e",
              border: "none",
              borderRadius: "6px",
              padding: "16px 38px",
              fontSize: "0.95rem",
              fontWeight: 700,
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "0.08em",
              cursor: "pointer",
              transition: "all 0.3s",
              boxShadow: "0 6px 28px rgba(201,168,76,0.45)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 12px 36px rgba(201,168,76,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 28px rgba(201,168,76,0.45)";
            }}
          >
            <FaRocket /> Get a Quote
          </button>
          <button
            onClick={() => scrollTo("services")}
            style={{
              background: "transparent",
              color: "var(--silver-light)",
              border: "1px solid rgba(184,196,212,0.3)",
              borderRadius: "6px",
              padding: "16px 38px",
              fontSize: "0.95rem",
              fontWeight: 500,
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "0.06em",
              cursor: "pointer",
              transition: "all 0.3s",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--gold-light)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(184,196,212,0.3)";
              e.currentTarget.style.color = "var(--silver-light)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Our Services <HiArrowDown />
          </button>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(20px, 5vw, 60px)",
            marginTop: "72px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(184,196,212,0.1)",
            animation: "fadeInUp 1s ease 0.75s both",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "500+", label: "Shipments Cleared" },
            { num: "12+", label: "Years Experience" },
            { num: "98%", label: "Client Satisfaction" },
            { num: "50+", label: "Trade Partners" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
