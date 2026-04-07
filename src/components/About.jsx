import { FaAnchor, FaBullseye, FaGlobeAfrica, FaStar, FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "110px 5%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div className="reveal" style={{ textAlign: "center", marginBottom: "70px" }}>
        <div style={{ fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px" }}>
          ── Who We Are ──
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            background: "linear-gradient(135deg, var(--white), var(--silver))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About SilverTide
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
        {/* Overview card */}
        <div
          className="reveal-left"
          style={{
            background: "var(--card-bg)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(184,196,212,0.12)",
            borderRadius: "16px",
            padding: "38px 32px",
            transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.4)";
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.borderColor = "rgba(184,196,212,0.12)";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "20px", color: "var(--gold)" }}>
            <FaAnchor />
          </div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.4rem",
              color: "var(--gold-light)",
              marginBottom: "16px",
            }}
          >
            Company Overview
          </h3>
          <p style={{ color: "var(--silver)", lineHeight: 1.85, fontSize: "0.93rem" }}>
            SilverTide Tanzania Limited is a full-service logistics and clearing company
            headquartered in Tanzania. We bridge businesses to global markets through
            professional handling of imports, exports, customs clearing, and end-to-end
            freight solutions.
          </p>
          <p style={{ color: "var(--silver)", lineHeight: 1.85, fontSize: "0.93rem", marginTop: "14px" }}>
            With deep expertise in Tanzania Revenue Authority (TRA) procedures and
            strong networks at Dar es Salaam Port and JNIA, we ensure your cargo
            moves swiftly and compliantly.
          </p>
        </div>

        {/* Mission & Vision */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {[
            {
              icon: <FaBullseye />,
              title: "Our Mission",
              text: "To deliver reliable, transparent, and efficient logistics services that empower Tanzanian businesses to compete confidently in the global marketplace.",
            },
            {
              icon: <FaGlobeAfrica />,
              title: "Our Vision",
              text: "To become East Africa's most trusted logistics partner — known for integrity, precision, and client-first solutions that move commerce forward.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "var(--card-bg)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(184,196,212,0.12)",
                borderRadius: "16px",
                padding: "28px 28px",
                transition: "transform 0.3s, border-color 0.3s",
                flex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(184,196,212,0.12)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "14px", color: "var(--gold)" }}>{item.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "var(--gold-light)", marginBottom: "12px" }}>
                {item.title}
              </h3>
              <p style={{ color: "var(--silver)", lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div
          className="reveal-right"
          style={{
            background: "var(--card-bg)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(184,196,212,0.12)",
            borderRadius: "16px",
            padding: "38px 32px",
            transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.4)";
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.borderColor = "rgba(184,196,212,0.12)";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "20px", color: "var(--gold)" }}>
            <FaStar />
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "var(--gold-light)", marginBottom: "20px" }}>
            Why Choose Us
          </h3>
          {[
            "Licensed & TRA-compliant clearing agents",
            "Real-time shipment tracking & updates",
            "Port-to-door delivery across Tanzania",
            "Expert customs documentation handling",
            "Competitive freight rates & fast turnaround",
            "Dedicated client support team",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                marginBottom: "14px",
                color: "var(--silver)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: "var(--gold)", marginTop: "3px", flexShrink: 0, fontSize: "0.85rem" }}>
                <FaCheckCircle />
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
