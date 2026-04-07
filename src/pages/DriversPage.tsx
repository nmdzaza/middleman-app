import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const TELEGRAM_BOT = "8678819131:AAEl4WDsPhp4X8PEAGJ1MFSHS6x6kwdOvIw";
const TELEGRAM_ADMIN = "5258417842";

async function sendTelegram(message: string) {
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TELEGRAM_ADMIN, text: message }),
  });
}

export default function DriversPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bikeType, setBikeType] = useState("Regular Bike");
  const [area, setArea] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const msg = `🚴 NEW DRIVER APPLICATION\n👤 ${name}\n📱 ${phone}\n📧 ${email}\n🚲 ${bikeType}\n📍 Area: ${area}`;
    try {
      await sendTelegram(msg);
    } catch {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Drive with Middleman — Earn $25-33/hr in Phoenix, AZ</title>
        <meta name="description" content="Join the Middleman driver network. Keep 100% of fees and tips. Work your own hours. Phoenix, AZ." />
      </Helmet>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 24 }}>🤝</span>
            <span style={{ fontWeight: 800, fontSize: 20, color: "#22c55e", letterSpacing: "-0.5px" }}>MIDDLEMAN</span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Link to="/" style={{ textDecoration: "none", color: "#374151", fontSize: 15, fontWeight: 500 }}>Home</Link>
            <Link to="/#quote" style={{ background: "#22c55e", color: "#fff", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 15 }}>Request Delivery</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)", padding: "96px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#22c55e", color: "#fff", padding: "6px 16px", borderRadius: 999, fontSize: 14, fontWeight: 700, marginBottom: 24, textTransform: "uppercase", letterSpacing: 1 }}>
            Now Hiring — Phoenix, AZ
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 24, letterSpacing: "-1.5px" }}>
            NOW HIRING:<br />
            <span style={{ color: "#22c55e" }}>Middleman Drivers</span>
          </h1>
          <p style={{ fontSize: 20, color: "#9ca3af", lineHeight: 1.6, marginBottom: 40 }}>
            Earn $25-33/hr. Keep every dollar. Work when you want. Phoenix, AZ.
          </p>
          <a href="#apply" style={{ background: "#22c55e", color: "#fff", padding: "16px 40px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 18, display: "inline-block", boxShadow: "0 4px 14px rgba(34,197,94,0.4)" }}>
            Apply Now →
          </a>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: "80px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, color: "#111827", marginBottom: 56 }}>Driver Benefits</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              { icon: "🚴", text: "Use your bike or eBike" },
              { icon: "💰", text: "Keep 100% of delivery fees" },
              { icon: "💸", text: "Keep 100% of tips" },
              { icon: "⏰", text: "Work your own hours" },
              { icon: "📱", text: "Jobs sent via text/app" },
              { icon: "₿", text: "BTC donations = priority queue" },
              { icon: "🛡️", text: "No experience needed" },
              { icon: "📍", text: "Phoenix, AZ only (10-mile max)" },
            ].map((b, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 28, textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{b.icon}</div>
                <p style={{ color: "#374151", fontWeight: 600, fontSize: 15 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, color: "#111827", marginBottom: 48 }}>What You'll Do</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              "Pick up items from sellers across Phoenix",
              "Inspect item condition before pickup — protect the customer",
              "Deliver safely and on time to the customer's door",
              "Confirm delivery with a quick photo",
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 20, background: "#f0fdf4", borderRadius: 10, border: "1px solid #bbf7d0" }}>
                <span style={{ color: "#22c55e", fontSize: 22, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <p style={{ color: "#374151", fontSize: 16, fontWeight: 500 }}>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" style={{ padding: "80px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, color: "#111827", marginBottom: 12 }}>Apply to Drive</h2>
          <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 40, fontSize: 17 }}>Takes 60 seconds. We'll be in touch fast.</p>
          {submitted ? (
            <div style={{ background: "#f0fdf4", border: "2px solid #22c55e", borderRadius: 16, padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🚴</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#166534", marginBottom: 12 }}>Application Received!</h3>
              <p style={{ color: "#374151", fontSize: 17, lineHeight: 1.6 }}>We'll text you within 24 hours to get you onboarded. Welcome to the team! 🤝</p>
            </div>
          ) : (
            <form onSubmit={handleApply} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 40, display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={{ display: "block", fontWeight: 600, color: "#374151", marginBottom: 8 }}>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                  style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: "1.5px solid #d1d5db", fontSize: 16, outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 600, color: "#374151", marginBottom: 8 }}>Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="(602) 555-0100"
                  required
                  style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: "1.5px solid #d1d5db", fontSize: 16, outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 600, color: "#374151", marginBottom: 8 }}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                  style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: "1.5px solid #d1d5db", fontSize: 16, outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 600, color: "#374151", marginBottom: 8 }}>Do you have a bike or eBike?</label>
                <select
                  value={bikeType}
                  onChange={e => setBikeType(e.target.value)}
                  style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: "1.5px solid #d1d5db", fontSize: 16, background: "#fff", outline: "none" }}
                >
                  <option>Regular Bike</option>
                  <option>eBike</option>
                  <option>Both</option>
                  <option>Neither (I'm looking to get one)</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 600, color: "#374151", marginBottom: 8 }}>What area of Phoenix?</label>
                <input
                  type="text"
                  value={area}
                  onChange={e => setArea(e.target.value)}
                  placeholder="e.g. Tempe, Scottsdale, Downtown PHX"
                  required
                  style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: "1.5px solid #d1d5db", fontSize: 16, outline: "none" }}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{ background: loading ? "#86efac" : "#22c55e", color: "#fff", padding: "18px", borderRadius: 10, border: "none", fontWeight: 700, fontSize: 18, cursor: loading ? "wait" : "pointer", boxShadow: "0 4px 14px rgba(34,197,94,0.4)" }}
              >
                {loading ? "Submitting..." : "Submit Application →"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111827", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 24 }}>🤝</span>
            <span style={{ fontWeight: 800, fontSize: 20, color: "#22c55e" }}>MIDDLEMAN</span>
          </div>
          <p style={{ color: "#6b7280", marginBottom: 24, fontSize: 15 }}>Local delivery for the people.</p>
          <p style={{ color: "#4b5563", fontSize: 13 }}>Launching Phoenix, AZ 2026 — © Middleman</p>
        </div>
      </footer>
    </>
  );
}
