import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaCheckCircle, FaPaperPlane, FaSpinner } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1800);
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: "rgba(10,31,58,0.6)",
    border: `1px solid ${errors[field] ? "rgba(255,80,80,0.5)" : "rgba(184,196,212,0.15)"}`,
    borderRadius: "8px",
    padding: "14px 18px",
    color: "var(--white)",
    fontFamily: "'Outfit', sans-serif",
    fontSize: "0.92rem",
    outline: "none",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
  });

  const contactItems = [
    { icon: <FaPhone />, label: "Phone / WhatsApp", value: "+255 782 944 117", link: "tel:+255782944117" },
    { icon: <FaEnvelope />, label: "Email", value: "info@silvertide.co.tz", link: "mailto:info@silvertide.co.tz" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Dar es Salaam, Tanzania", link: null },
    { icon: <FaInstagram />, label: "Instagram", value: "@silvertide_tz", link: "#" },
  ];

  const iconCircle = {
    width: "42px", height: "42px", borderRadius: "50%",
    background: "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(10,31,58,0.8))",
    border: "1px solid rgba(201,168,76,0.25)",
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "var(--gold-light)", fontSize: "1.1rem", flexShrink: 0,
  };

  return (
    <section id="contact" style={{ position: "relative", zIndex: 1, padding: "110px 5%" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "70px" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px" }}>
            ── Reach Out ──
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, background: "linear-gradient(135deg, var(--white), var(--silver))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Contact Us
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "start" }}>
          <div className="reveal-left">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "var(--gold-light)", marginBottom: "30px" }}>Get in Touch</h3>
            <p style={{ color: "var(--silver)", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "36px" }}>
              Whether you need a freight quote, customs advice, or logistics planning — our team is ready to assist.
            </p>
            {contactItems.map((c) => (
              <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", padding: "18px 20px", background: "rgba(13,45,82,0.4)", border: "1px solid rgba(184,196,212,0.1)", borderRadius: "12px", transition: "border-color 0.3s, transform 0.3s", cursor: c.link ? "pointer" : "default" }}
                onClick={() => c.link && window.open(c.link)}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(184,196,212,0.1)"; e.currentTarget.style.transform = "translateX(0)"; }}>
                <div style={iconCircle}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px" }}>{c.label}</div>
                  <div style={{ color: "var(--silver-light)", fontSize: "0.95rem", fontWeight: 500 }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-right" style={{ background: "var(--card-bg)", backdropFilter: "blur(16px)", border: "1px solid rgba(184,196,212,0.12)", borderRadius: "20px", padding: "42px 36px" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "4rem", marginBottom: "20px", color: "var(--gold)" }}><FaCheckCircle /></div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "var(--gold-light)", marginBottom: "14px" }}>Message Sent!</h3>
                <p style={{ color: "var(--silver)", lineHeight: 1.8 }}>Thank you for reaching out. Our team will respond within 24 hours.</p>
                <button onClick={() => { setStatus(null); setForm({ name: "", email: "", phone: "", message: "" }); }} style={{ marginTop: "24px", background: "rgba(201,168,76,0.15)", border: "1px solid var(--gold)", color: "var(--gold-light)", borderRadius: "8px", padding: "12px 28px", fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", cursor: "pointer", transition: "all 0.3s" }}>Send Another</button>
              </div>
            ) : (
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "var(--white)", marginBottom: "28px" }}>Send us a Message</h3>
                {[
                  { key: "name", label: "Full Name *", type: "text", placeholder: "Your full name" },
                  { key: "email", label: "Email Address *", type: "email", placeholder: "your@email.com" },
                  { key: "phone", label: "Phone (Optional)", type: "tel", placeholder: "+255 ..." },
                ].map((f) => (
                  <div key={f.key} style={{ marginBottom: "18px" }}>
                    <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>{f.label}</label>
                    <input style={inputStyle(f.key)} value={form[f.key]} placeholder={f.placeholder} type={f.type}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = errors[f.key] ? "rgba(255,80,80,0.5)" : "rgba(184,196,212,0.15)")} />
                    {errors[f.key] && <span style={{ color: "#ff6b6b", fontSize: "0.78rem", marginTop: "5px", display: "block" }}>{errors[f.key]}</span>}
                  </div>
                ))}
                <div style={{ marginBottom: "28px" }}>
                  <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Message *</label>
                  <textarea style={{ ...inputStyle("message"), minHeight: "130px", resize: "vertical" }} value={form.message} placeholder="Describe your shipment or inquiry..."
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = errors.message ? "rgba(255,80,80,0.5)" : "rgba(184,196,212,0.15)")} />
                  {errors.message && <span style={{ color: "#ff6b6b", fontSize: "0.78rem", marginTop: "5px", display: "block" }}>{errors.message}</span>}
                </div>
                <button onClick={handleSubmit} disabled={status === "loading"}
                  style={{ width: "100%", background: status === "loading" ? "rgba(201,168,76,0.4)" : "linear-gradient(135deg, var(--gold), #a8762e)", color: "#050f1e", border: "none", borderRadius: "8px", padding: "16px", fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.08em", cursor: status === "loading" ? "not-allowed" : "pointer", transition: "all 0.3s", boxShadow: "0 6px 24px rgba(201,168,76,0.3)", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                  onMouseEnter={(e) => { if (status !== "loading") { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(201,168,76,0.5)"; } }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(201,168,76,0.3)"; }}>
                  {status === "loading" ? <><FaSpinner style={{ animation: "rotateSlow 1s linear infinite" }} /> Sending...</> : <><FaPaperPlane /> Send Message</>}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
