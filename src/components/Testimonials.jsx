import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Amina Hassan",
    role: "Managing Director, Coastal Traders Ltd",
    quote: "SilverTide cleared our containers in record time. Their professionalism at Dar port is unmatched.",
    stars: 5,
  },
  {
    name: "David Mwangi",
    role: "Supply Chain Lead, Nairobi Connect",
    quote: "Excellent communication throughout the process. Real-time updates and zero hidden charges.",
    stars: 5,
  },
  {
    name: "Fatuma Salim",
    role: "Director, Zanzibar Exports",
    quote: "They handled our export documentation flawlessly. We now use SilverTide exclusively.",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section
      style={{ position: "relative", zIndex: 1, padding: "100px 5%" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px" }}>
            ── Client Voices ──
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
            What Our Clients Say
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "28px" }}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div
                style={{
                  background: "var(--card-bg)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(184,196,212,0.1)",
                  borderRadius: "16px",
                  padding: "32px 28px",
                  position: "relative",
                  transition: "transform 0.3s, border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(184,196,212,0.1)";
                }}
              >
                <div style={{ fontSize: "2rem", color: "rgba(201,168,76,0.3)", lineHeight: 1, marginBottom: "16px" }}>
                  <FaQuoteLeft />
                </div>
                <p style={{ color: "var(--silver)", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "24px", fontStyle: "italic" }}>
                  {t.quote}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--navy-light), var(--gold))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ color: "var(--white)", fontWeight: 600, fontSize: "0.9rem" }}>{t.name}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "2px" }}>{t.role}</div>
                  </div>
                  <div style={{ marginLeft: "auto", display: "flex", gap: "2px", color: "var(--gold)", fontSize: "0.85rem" }}>
                    {Array.from({ length: t.stars }).map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
