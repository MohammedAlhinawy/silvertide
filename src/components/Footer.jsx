import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaChevronRight } from "react-icons/fa";

function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(184,196,212,0.1)",
        padding: "60px 5% 30px",
        background: "rgba(5,15,30,0.85)",
        backdropFilter: "blur(20px)"
      }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "50px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  // background: "linear-gradient(135deg, var(--gold), var(--navy-light))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  // boxShadow: "0 0 12px rgba(201,168,76,0.3)"
                }}>
                <img src="/logo.png" alt="SilverTide Logo" style={{ width: "38px", height: "38px", objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--white)" }}>SilverTide</div>
                <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Tanzania Limited</div>
              </div>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.8, maxWidth: "240px" }}>
              Connecting Tanzania to global trade through expert logistics and customs solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "var(--gold-light)", fontFamily: "'Playfair Display', serif", fontSize: "1rem", marginBottom: "18px", letterSpacing: "0.05em" }}>Quick Links</h4>
            {["Home", "About", "Services", "Contact"].map((link) => (
              <div key={link} onClick={() => scrollTo(link.toLowerCase())}
                style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "10px", cursor: "pointer", transition: "color 0.3s", display: "flex", alignItems: "center", gap: "8px" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                <FaChevronRight style={{ fontSize: "0.55rem", color: "var(--gold)" }} />
                {link}
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "var(--gold-light)", fontFamily: "'Playfair Display', serif", fontSize: "1rem", marginBottom: "18px", letterSpacing: "0.05em" }}>Services</h4>
            {["Import Services", "Export Services", "Clearing & Forwarding", "Logistics", "Warehousing"].map((s) => (
              <div key={s} style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                <FaChevronRight style={{ fontSize: "0.55rem", color: "var(--gold)" }} />
                {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "var(--gold-light)", fontFamily: "'Playfair Display', serif", fontSize: "1rem", marginBottom: "18px", letterSpacing: "0.05em" }}>Contact</h4>
            {[
              { icon: <FaPhone />, text: "+255 782 944 117" },
              { icon: <FaEnvelope />, text: "info@silvertide.co.tz" },
              { icon: <FaMapMarkerAlt />, text: "Dar es Salaam, TZ" },
              { icon: <FaInstagram />, text: "@silvertide_tz" },
            ].map((c) => (
              <div key={c.text} style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "var(--gold-light)", fontSize: "0.85rem" }}>{c.icon}</span>
                {c.text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(184,196,212,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} SilverTide Tanzania Limited. All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
            Licensed Clearing Agent · TRA Compliant · Dar es Salaam Port
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
