import { FaFileImport, FaFileExport, FaExchangeAlt, FaTruck, FaWarehouse, FaPlane } from "react-icons/fa";

const services = [
  {
    icon: <FaFileImport />,
    title: "Import Services",
    desc: "Comprehensive import handling from bill of lading to final delivery. We manage TRA assessments, duty payments, and port release efficiently.",
    tags: ["Customs Clearance", "Duty Assessment", "Port Release"],
  },
  {
    icon: <FaFileExport />,
    title: "Export Services",
    desc: "Seamless export facilitation including documentation, phytosanitary certification, and freight booking for all commodity types.",
    tags: ["Documentation", "Certification", "Freight Booking"],
  },
  {
    icon: <FaExchangeAlt />,
    title: "Clearing & Forwarding",
    desc: "End-to-end customs brokerage services. Our licensed clearing agents handle declarations, assessments, and release processes with precision.",
    tags: ["Licensed Agents", "Declarations", "Compliance"],
  },
  {
    icon: <FaTruck />,
    title: "Logistics & Transportation",
    desc: "Nationwide trucking and distribution network. From Dar es Salaam Port to upcountry destinations — secure, timely, trackable.",
    tags: ["Nationwide Coverage", "GPS Tracked", "Door-to-Door"],
  },
  {
    icon: <FaWarehouse />,
    title: "Warehousing",
    desc: "Secure bonded and open storage facilities in Dar es Salaam. Inventory management, palletizing, and distribution from a single location.",
    tags: ["Bonded Storage", "Inventory Mgmt", "Security"],
  },
  {
    icon: <FaPlane />,
    title: "Air Freight",
    desc: "Time-critical air cargo solutions through JNIA and regional airports. Ideal for perishables, electronics, and urgent consignments.",
    tags: ["JNIA Hub", "Perishables", "Express"],
  },
];

function Services() {
  return (
    <section
      id="services"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "110px 5%",
        background: "linear-gradient(180deg, transparent 0%, rgba(5,15,30,0.6) 50%, transparent 100%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "70px" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px" }}>
            ── What We Offer ──
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              background: "linear-gradient(135deg, var(--white), var(--silver))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "18px",
            }}
          >
            Our Services
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8, fontSize: "0.95rem" }}>
            Comprehensive logistics solutions tailored to Tanzania's trade landscape
            and your business needs.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                style={{
                  background: "var(--card-bg)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(184,196,212,0.1)",
                  borderRadius: "18px",
                  padding: "36px 30px",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "transform 0.35s, box-shadow 0.35s, border-color 0.35s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.01)";
                  e.currentTarget.style.boxShadow = "0 30px 70px rgba(0,0,0,0.5)";
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(184,196,212,0.1)";
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                />

                <div style={{
                  fontSize: "2.2rem",
                  marginBottom: "20px",
                  color: "var(--gold)",
                  animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
                }}>
                  {svc.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    color: "var(--white)",
                    marginBottom: "14px",
                  }}
                >
                  {svc.title}
                </h3>
                <p style={{ color: "var(--silver)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "24px" }}>
                  {svc.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(201,168,76,0.1)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        color: "var(--gold-light)",
                        borderRadius: "999px",
                        padding: "4px 12px",
                        fontSize: "0.72rem",
                        letterSpacing: "0.06em",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
