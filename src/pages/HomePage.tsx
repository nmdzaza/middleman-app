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

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState("Under 3 miles $8");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const fee = distance.split("$")[1];
    const msg = `🤝 NEW MIDDLEMAN REQUEST\n📦 Item: ${url}\n📍 Deliver to: ${address}\n💰 Fee: $${fee}\n⏰ Just now`;
    try {
      await sendTelegram(msg);
    } catch {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Middleman — Local Marketplace Delivery in Arizona</title>
        <meta name="description" content="We pick up from Facebook Marketplace, OfferUp, and Craigslist and deliver to your door. Arizona only. Under 10 miles." />
      </Helmet>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 24 }}>🤝</span>
            <span style={{ fontWeight: 800, fontSize: 20, color: "#22c55e", letterSpacing: "-0.5px" }}>MIDDLEMAN</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <a href="#how-it-works" style={{ textDecoration: "none", color: "#374151", fontSize: 15, fontWeight: 500 }}>How It Works</a>
            <Link to="/drivers" style={{ textDecoration: "none", color: "#374151", fontSize: 15, fontWeight: 500 }}>For Drivers</Link>
            <a href="#quote" style={{ textDecoration: "none", color: "#374151", fontSize: 15, fontWeight: 500 }}>Get a Quote</a>
            <a href="#quote" style={{ background: "#22c55e", color: "#fff", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 15 }}>Get Started</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)", padding: "96px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "#bbf7d0", color: "#166534", padding: "6px 16px", borderRadius: 999, fontSize: 14, fontWeight: 600, marginBottom: 24 }}>
            🚀 Now Launching in Phoenix, AZ
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 900, color: "#111827", lineHeight: 1.1, marginBottom: 24, letterSpacing: "-1.5px" }}>
            Local Marketplace Delivery —{" "}
            <span style={{ color: "#22c55e" }}>Done Right</span>
          </h1>
          <p style={{ fontSize: 20, color: "#4b5563", lineHeight: 1.6, marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" }}>
            We pick up from Facebook Marketplace, OfferUp, and Craigslist and deliver to your door. Arizona only. Under 10 miles. No car needed.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#quote" style={{ background: "#22c55e", color: "#fff", padding: "16px 36px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 18, boxShadow: "0 4px 14px rgba(34,197,94,0.4)" }}>
              Request a Delivery
            </a>
            <Link to="/drivers" style={{ background: "transparent", color: "#22c55e", padding: "16px 36px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 18, border: "2px solid #22c55e" }}>
              Become a Driver
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, color: "#111827", marginBottom: 16 }}>How It Works</h2>
          <p style={{ textAlign: "center", color: "#6b7280", fontSize: 18, marginBottom: 56 }}>Three simple steps — you never leave the couch.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            {[
              { icon: "🔍", step: "Step 1", title: "Find Your Deal", desc: "Browse Facebook Marketplace, OfferUp, or any local listing. Screenshot or copy the link." },
              { icon: "📦", step: "Step 2", title: "Book a Middleman", desc: "Enter pickup + delivery address and get an instant price. No hidden fees." },
              { icon: "🚴", step: "Step 3", title: "Relax", desc: "Your Middleman picks up, inspects, and delivers. You never leave home." },
            ].map((s) => (
              <div key={s.step} style={{ textAlign: "center", padding: 40, borderRadius: 16, border: "1px solid #e5e7eb", background: "#fafafa" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{s.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#22c55e", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{s.step}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "#6b7280", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MIDDLEMAN */}
      <section style={{ padding: "80px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, color: "#111827", marginBottom: 56 }}>Why Middleman?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { icon: "💰", text: "Only $0.50 goes to us — drivers keep everything else" },
              { icon: "📍", text: "10-mile max radius — fast local delivery" },
              { icon: "🛡️", text: "Item inspection before pickup — no surprises" },
              { icon: "🚴", text: "Bikes & eBikes only — eco-friendly, no traffic excuses" },
              { icon: "💸", text: "Tips go 100% to your driver" },
              { icon: "🌵", text: "Launching in Phoenix, AZ" },
            ].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 24, background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb" }}>
                <span style={{ fontSize: 28, flexShrink: 0 }}>{f.icon}</span>
                <p style={{ color: "#374151", fontWeight: 600, fontSize: 16, lineHeight: 1.5 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE WIDGET */}
      <section id="quote" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, color: "#111827", marginBottom: 12 }}>Request a Delivery</h2>
          <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 40, fontSize: 17 }}>Paste your listing link, tell us where to deliver, and we'll handle the rest.</p>
          {submitted ? (
            <div style={{ background: "#f0fdf4", border: "2px solid #22c55e", borderRadius: 16, padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🤝</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#166534", marginBottom: 12 }}>We got it!</h3>
              <p style={{ color: "#374151", fontSize: 17, lineHeight: 1.6 }}>A Middleman driver will reach out via text within 15 minutes. 🤝</p>
            </div>
          ) : (
            <form onSubmit={handleQuote} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={{ display: "block", fontWeight: 600, color: "#374151", marginBottom: 8 }}>Item Listing URL</label>
                <input
                  type="url"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder="Paste item URL (Facebook, OfferUp, Craigslist)"
                  required
                  style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: "1.5px solid #d1d5db", fontSize: 16, outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 600, color: "#374151", marginBottom: 8 }}>Your Delivery Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  placeholder="Your delivery address"
                  required
                  style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: "1.5px solid #d1d5db", fontSize: 16, outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 600, color: "#374151", marginBottom: 8 }}>Distance Estimate</label>
                <select
                  value={distance}
                  onChange={e => setDistance(e.target.value)}
                  style={{ width: "100%", padding: "14px 16px", borderRadius: 10, border: "1.5px solid #d1d5db", fontSize: 16, background: "#fff", outline: "none" }}
                >
                  <option>Under 3 miles $8</option>
                  <option>3-6 miles $12</option>
                  <option>6-10 miles $15</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{ background: loading ? "#86efac" : "#22c55e", color: "#fff", padding: "18px", borderRadius: 10, border: "none", fontWeight: 700, fontSize: 18, cursor: loading ? "wait" : "pointer", boxShadow: "0 4px 14px rgba(34,197,94,0.4)" }}
              >
                {loading ? "Sending..." : "Request Delivery →"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOR DRIVERS */}
      <section style={{ padding: "80px 24px", background: "#111827" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "#fff", marginBottom: 16 }}>Earn $25-33/hr on Your Own Schedule</h2>
          <p style={{ color: "#9ca3af", fontSize: 18, marginBottom: 48 }}>Join the Middleman driver network in Phoenix, AZ.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 48 }}>
            {[
              { icon: "⏰", text: "Flexible Hours" },
              { icon: "💰", text: "Keep 100% of delivery fee" },
              { icon: "💸", text: "Keep all tips" },
              { icon: "🚴", text: "Use your bike or eBike" },
              { icon: "₿", text: "Priority jobs via BTC donation" },
              { icon: "✅", text: "No experience needed" },
            ].map((c, i) => (
              <div key={i} style={{ background: "#1f2937", borderRadius: 12, padding: 28, border: "1px solid #374151" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
                <p style={{ color: "#f9fafb", fontWeight: 600, fontSize: 16 }}>{c.text}</p>
              </div>
            ))}
          </div>
          <Link to="/drivers" style={{ background: "#22c55e", color: "#fff", padding: "16px 40px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 18, display: "inline-block" }}>
            Apply to Drive →
          </Link>
        </div>
      </section>

      {/* BTC SECTION */}
      <section style={{ padding: "80px 24px", background: "#fffbeb", borderTop: "1px solid #fde68a" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>₿</div>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#111827", marginBottom: 16 }}>Support the Network, Get Priority Jobs</h2>
          <p style={{ color: "#6b7280", fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>
            Drivers who donate BTC to the platform get pushed to the top of the job queue. Every satoshi counts.
          </p>
          <div style={{ background: "#fff", border: "1.5px solid #fde68a", borderRadius: 16, padding: 32, marginBottom: 24 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#92400e", marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>BTC Address</p>
            <code style={{ fontSize: 14, color: "#111827", wordBreak: "break-all", fontFamily: "monospace", background: "#fef9c3", padding: "12px 16px", borderRadius: 8, display: "block", lineHeight: 1.6 }}>
              bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
            </code>
          </div>
          <div style={{ background: "#f3f4f6", border: "2px dashed #d1d5db", borderRadius: 12, padding: 48, color: "#9ca3af", fontSize: 15 }}>
            [ QR Code Coming Soon ]
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111827", padding: "48px 24px", borderTop: "1px solid #1f2937" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 24 }}>🤝</span>
            <span style={{ fontWeight: 800, fontSize: 20, color: "#22c55e" }}>MIDDLEMAN</span>
          </div>
          <p style={{ color: "#6b7280", textAlign: "center", marginBottom: 24, fontSize: 15 }}>Local delivery for the people.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", marginBottom: 32 }}>
            {[
              { label: "How It Works", href: "#how-it-works" },
              { label: "Drive with Us", href: "#/drivers" },
              { label: "Arizona Launch", href: "#quote" },
              { label: "Contact", href: "mailto:hello@middlemandelivery.com" },
            ].map((l) => (
              <a key={l.label} href={l.href} style={{ color: "#9ca3af", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{l.label}</a>
            ))}
          </div>
          <p style={{ color: "#4b5563", textAlign: "center", fontSize: 13 }}>Launching Phoenix, AZ 2026 — © Middleman</p>
        </div>
      </footer>
    </>
  );
}
