import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Services", "Gallery", "About", "Contact"];

const SERVICES = [
  {
    icon: "🌳",
    title: "Tree Cutting & Removal",
    desc: "Safe, professional removal of hazardous, overgrown, or storm-damaged trees. We protect your property from root to canopy.",
  },
  {
    icon: "🏠",
    title: "Roof Cleaning & Repairs",
    desc: "Moss, algae, and debris removal. Tile, shingle, and flat roof repairs that extend the life of your home.",
  },
  {
    icon: "💧",
    title: "Power Washing",
    desc: "Driveways, patios, fences, decks — we blast away years of grime to reveal the surface underneath.",
  },
  {
    icon: "🌿",
    title: "Gardening & Landscaping",
    desc: "Hedge trimming, lawn care, planting, and seasonal tidying. A garden that stays beautiful all year round.",
  },
  {
    icon: "🛣️",
    title: "Driveway Repair and Installation",
    desc: "Expert repair and installation of driveways to restore their functionality and appearance.",
  },
  {
    icon: "🎨",
    title: "Painting and Exterior Maintenance",
    desc: "Professional painting and exterior maintenance services to protect and enhance the beauty of your home.",
  },
];

const GALLERY_ITEMS = [
  {
    id: 1,
    label: "Tree Removal",
    color: "#2d4a2d",
    emoji: "🌲",
    after: "Large oak safely felled & cleared",
  },
  {
    id: 2,
    label: "Roof Repair",
    color: "#3a3328",
    emoji: "🔨",
    after: "Tiles replaced, moss treated",
  },
  {
    id: 3,
    label: "Power Wash",
    color: "#1e3a4a",
    emoji: "💧",
    after: "Driveway fully restored",
  },
  {
    id: 4,
    label: "Garden Design",
    color: "#2d4a35",
    emoji: "🌿",
    after: "Full garden redesign & tidy",
  },
  {
    id: 5,
    label: "Storm Damage",
    color: "#4a3228",
    emoji: "⚡",
    after: "Emergency storm clearance",
  },
  {
    id: 6,
    label: "Hedge Trimming",
    color: "#283d28",
    emoji: "✂️",
    after: "Overgrown hedges shaped",
  },
];

// const TESTIMONIALS = [
//   {
//     name: "Margaret O'Brien",
//     text: "Incredible work on our storm-damaged oak. Professional, fast, and left the garden spotless.",
//     stars: 5,
//   },
//   {
//     name: "Tom Kavanagh",
//     text: "The roof looks brand new. They found two cracked tiles we didn't even know about. Highly recommend.",
//     stars: 5,
//   },
//   {
//     name: "Sarah Flynn",
//     text: "Power washed our entire driveway and patio — transformed. Will be using them every year.",
//     stars: 5,
//   },
// ];

// function StarRating({ count }) {
//   return (
//     <div style={{ color: "#c8a84b", fontSize: "1rem", letterSpacing: "2px" }}>
//       {"★".repeat(count)}
//     </div>
//   );
// }

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeGallery, setActiveGallery] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const [heroRef, heroIn] = useInView(0.1);
  const [servRef, servIn] = useInView(0.1);
  const [gallRef, gallIn] = useInView(0.1);
  // const [testRef, testIn] = useInView(0.1);
  const [contRef, contIn] = useInView(0.1);

  return (
    <div
      style={{
        fontFamily:
          "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif",
        background: "#0f1a0f",
        color: "#e8e0d0",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --green-dark: #0f1a0f;
          --green-mid: #1a2e1a;
          --green-rich: #2a4a2a;
          --green-accent: #4a7c4a;
          --gold: #23c3d5;
          --gold-light: #e0c070;
          --cream: #e8e0d0;
          --stone: #8a7e6e;
          --stone-light: #b0a898;
        }
        html { scroll-behavior: smooth; }
        body { background: var(--green-dark); }
        .playfair { font-family: 'Playfair Display', Georgia, serif; }
        .lato { font-family: 'Lato', sans-serif; }
        .fade-up { opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .fade-up.in { opacity: 1; transform: translateY(0); }
        .fade-up-delay-1 { transition-delay: 0.1s; }
        .fade-up-delay-2 { transition-delay: 0.2s; }
        .fade-up-delay-3 { transition-delay: 0.3s; }
        .fade-up-delay-4 { transition-delay: 0.4s; }
        a { color: inherit; text-decoration: none; }
        input, textarea, select { font-family: 'Lato', sans-serif; }
        ::-webkit-scrollbar { width: 6px; background: var(--green-dark); }
        ::-webkit-scrollbar-thumb { background: var(--green-rich); border-radius: 3px; }
        .nav-link {
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--cream);
          cursor: pointer;
          padding: 4px 0;
          position: relative;
          opacity: 0.85;
          transition: opacity 0.2s, color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .nav-link:hover { opacity: 1; color: var(--gold); }
        .nav-link:hover::after { width: 100%; }
        .service-card {
          background: linear-gradient(135deg, #1a2e1a 0%, #152015 100%);
          border: 1px solid rgba(74,124,74,0.2);
          border-radius: 4px;
          padding: 40px 32px;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .service-card:hover {
          transform: translateY(-6px);
          border-color: var(--gold);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(200,168,75,0.08);
        }
        .gallery-card {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
          cursor: pointer;
          aspect-ratio: 4/3;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .gallery-card:hover { transform: scale(1.03); box-shadow: 0 20px 50px rgba(0,0,0,0.7); }
        .gallery-card .overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-card:hover .overlay { opacity: 1; }
        .btn-primary {
          display: inline-block;
          background: var(--gold);
          color: var(--green-dark);
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.75rem;
          text-transform: uppercase;
          padding: 16px 40px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          border-radius: 2px;
        }
        .btn-primary:hover {
          background: var(--gold-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(200,168,75,0.3);
        }
        .btn-outline {
          display: inline-block;
          background: transparent;
          color: var(--gold);
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.75rem;
          text-transform: uppercase;
          padding: 14px 36px;
          border: 1px solid var(--gold);
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          border-radius: 2px;
        }
        .btn-outline:hover { background: var(--gold); color: var(--green-dark); }
        .form-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 3px;
          padding: 14px 18px;
          color: var(--cream);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .form-input:focus { border-color: var(--gold); background: rgba(200,168,75,0.05); }
        .form-input::placeholder { color: var(--stone); }
        .form-input option { background: #1a2e1a; }
        .divider {
          width: 60px; height: 2px;
          background: linear-gradient(90deg, var(--gold), transparent);
          margin: 16px 0 32px;
        }
        .divider-center { margin: 16px auto 32px; }
        .testimonial-card {
          background: linear-gradient(135deg, #1a2e1a, #152015);
          border-left: 3px solid var(--gold);
          padding: 32px;
          border-radius: 4px;
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.8rem !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .gallery-grid { grid-template-columns: 1fr 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .test-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(15,26,15,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(74,124,74,0.2)" : "none",
          transition: "all 0.4s ease",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          <div onClick={() => scrollTo("hero")} style={{ cursor: "pointer" }}>
            <div
              className="playfair"
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "0.5px",
                lineHeight: 1.2,
              }}
            >
              Storm Safety
            </div>
            <div
              className="lato"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "4px",
                color: "var(--gold)",
                textTransform: "uppercase",
              }}
            >
              Home Repairs
            </div>
          </div>

          {/* Desktop Nav */}
          <div
            style={{ display: "flex", gap: 36, alignItems: "center" }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((l) => (
              <span
                key={l}
                className="nav-link"
                onClick={() => scrollTo(l.toLowerCase())}
              >
                {l}
              </span>
            ))}
            <button
              className="btn-primary"
              style={{ padding: "10px 24px", fontSize: "0.7rem" }}
              onClick={() => scrollTo("contact")}
            >
              Free Quote
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: 5,
            }}
            id="hamburger"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "var(--cream)",
                  borderRadius: 2,
                  transition: "transform 0.3s",
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              background: "rgba(15,26,15,0.98)",
              padding: "24px 40px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {NAV_LINKS.map((l) => (
              <span
                key={l}
                className="nav-link"
                style={{ fontSize: "1rem", letterSpacing: "3px" }}
                onClick={() => scrollTo(l.toLowerCase())}
              >
                {l}
              </span>
            ))}
            <button
              className="btn-primary"
              style={{ width: "fit-content", marginTop: 8 }}
              onClick={() => scrollTo("contact")}
            >
              Free Quote
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(160deg, #0a1a0a 0%, #0f2010 40%, #0a150a 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background texture elements */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(74,124,74,0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-5%",
            top: "5%",
            width: "55%",
            height: "95%",
            background:
              "radial-gradient(ellipse at center, rgba(42,74,42,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Big decorative text */}
        <div
          className="playfair"
          style={{
            position: "absolute",
            right: -20,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "clamp(120px, 18vw, 260px)",
            fontWeight: 900,
            color: "rgba(74,124,74,0.04)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-8px",
          }}
        >
          STORM
        </div>

        <div
          ref={heroRef}
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "160px 40px 100px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className={`fade-up ${heroIn ? "in" : ""}`}
            style={{ marginBottom: 12 }}
          >
            <span
              className="lato"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "5px",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 700,
              }}
            >
              ⚡ Trusted Local Experts
            </span>
          </div>
          <h1
            className={`playfair hero-title fade-up ${heroIn ? "in" : ""} fade-up-delay-1`}
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              maxWidth: 820,
              color: "#fff",
              marginBottom: 24,
            }}
          >
            Protecting Homes,
            <br />
            <span style={{ color: "var(--gold)" }}>One Job</span> at a Time.
          </h1>
          <div className="divider" />
          <p
            className={`lato fade-up ${heroIn ? "in" : ""} fade-up-delay-2`}
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--stone-light)",
              maxWidth: 540,
              marginBottom: 48,
              fontWeight: 300,
            }}
          >
            From storm-damaged trees to mossy rooftops and grimy driveways —
            Storm Safety Home Repairs delivers expert, reliable work across all
            aspects of home maintenance.
          </p>
          <div
            className={`fade-up ${heroIn ? "in" : ""} fade-up-delay-3`}
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <button className="btn-primary" onClick={() => scrollTo("contact")}>
              Get a Free Quote
            </button>
            <button
              className="btn-outline"
              onClick={() => scrollTo("services")}
            >
              Our Services
            </button>
          </div>

          {/* Stats */}
          <div
            className={`fade-up ${heroIn ? "in" : ""} fade-up-delay-4`}
            style={{
              display: "flex",
              gap: 48,
              marginTop: 80,
              flexWrap: "wrap",
            }}
          >
            {/* {[
              ["500+", "Jobs Completed"],
              ["12+", "Years Experience"],
              ["100%", "Satisfaction Rate"],
            ].map(([n, l]) => (
              <div key={l}>
                <div
                  className="playfair"
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: 700,
                    color: "var(--gold)",
                  }}
                >
                  {n}
                </div>
                <div
                  className="lato"
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "2px",
                    color: "var(--stone)",
                    textTransform: "uppercase",
                  }}
                >
                  {l}
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{ background: "#0d1a0d", padding: "100px 40px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={servRef}>
            <div className={`fade-up ${servIn ? "in" : ""}`}>
              <span
                className="lato"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 700,
                }}
              >
                What We Do
              </span>
              <h2
                className="playfair"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  marginTop: 12,
                  color: "#fff",
                }}
              >
                Our Services
              </h2>
              <div className="divider" />
            </div>
            <div
              className={`services-grid fade-up ${servIn ? "in" : ""} fade-up-delay-1`}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 24,
                marginTop: 8,
              }}
            >
              {SERVICES.map((s, i) => (
                <div
                  key={s.title}
                  className="service-card"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div style={{ fontSize: "2.4rem", marginBottom: 20 }}>
                    {s.icon}
                  </div>
                  <h3
                    className="playfair"
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 14,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="lato"
                    style={{
                      color: "var(--stone-light)",
                      lineHeight: 1.8,
                      fontWeight: 300,
                      fontSize: "0.95rem",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        style={{ background: "#0b160b", padding: "100px 40px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={gallRef}>
            <div
              className={`fade-up ${gallIn ? "in" : ""}`}
              style={{ textAlign: "center" }}
            >
              <span
                className="lato"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 700,
                }}
              >
                Our Work
              </span>
              <h2
                className="playfair"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  marginTop: 12,
                  color: "#fff",
                }}
              >
                Previous Projects
              </h2>
              <div className="divider divider-center" />
              <p
                className="lato"
                style={{
                  color: "var(--stone-light)",
                  maxWidth: 520,
                  margin: "0 auto 48px",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                A selection of recent work — every job handled with care,
                precision, and pride.
              </p>
            </div>

            <div
              className={`gallery-grid fade-up ${gallIn ? "in" : ""} fade-up-delay-1`}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
              }}
            >
              {GALLERY_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="gallery-card"
                  style={{ background: item.color }}
                  onClick={() => setActiveGallery(item)}
                >
                  {/* Simulated image with pattern */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, ${item.color} 0%, rgba(0,0,0,0.7) 100%)`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "4rem",
                        marginBottom: 12,
                        filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
                      }}
                    >
                      {item.emoji}
                    </div>
                    <div
                      className="playfair"
                      style={{
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                  <div className="overlay">
                    <div
                      style={{
                        background: "var(--gold)",
                        color: "#0f1a0f",
                        padding: "8px 20px",
                        borderRadius: 2,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      View Project
                    </div>
                    <div
                      className="lato"
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        marginTop: 10,
                        fontSize: "0.8rem",
                      }}
                    >
                      {item.after}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Modal */}
        {activeGallery && (
          <div
            onClick={() => setActiveGallery(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 40,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "linear-gradient(135deg, #1a2e1a, #152015)",
                border: "1px solid rgba(200,168,75,0.3)",
                borderRadius: 8,
                padding: 48,
                maxWidth: 500,
                width: "100%",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "5rem", marginBottom: 16 }}>
                {activeGallery.emoji}
              </div>
              <h3
                className="playfair"
                style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 8 }}
              >
                {activeGallery.label}
              </h3>
              <div className="divider divider-center" />
              <p
                className="lato"
                style={{
                  color: "var(--stone-light)",
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                {activeGallery.after}
              </p>
              <button
                className="btn-outline"
                onClick={() => setActiveGallery(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* TESTIMONIALS */}
      {/* <section style={{ background: "#0f1a0f", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={testRef}>
            <div
              className={`fade-up ${testIn ? "in" : ""}`}
              style={{ textAlign: "center" }}
            >
              <span
                className="lato"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 700,
                }}
              >
                What People Say
              </span>
              <h2
                className="playfair"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  marginTop: 12,
                  color: "#fff",
                }}
              >
                Customer Reviews
              </h2>
              <div className="divider divider-center" />
            </div>
            <div
              className={`test-grid fade-up ${testIn ? "in" : ""} fade-up-delay-1`}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="testimonial-card">
                  <StarRating count={t.stars} />
                  <p
                    className="lato"
                    style={{
                      margin: "20px 0 24px",
                      lineHeight: 1.8,
                      color: "var(--stone-light)",
                      fontStyle: "italic",
                      fontWeight: 300,
                    }}
                  >
                    "{t.text}"
                  </p>
                  <div
                    className="playfair"
                    style={{ color: "var(--cream)", fontWeight: 700 }}
                  >
                    — {t.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* ABOUT BANNER */}
      {/* <section
        id="about"
        style={{
          background: "linear-gradient(135deg, #1a3a1a 0%, #0f2010 100%)",
          padding: "80px 40px",
          borderTop: "1px solid rgba(74,124,74,0.2)",
          borderBottom: "1px solid rgba(74,124,74,0.2)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            gap: 60,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 340px" }}>
            <span
              className="lato"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "5px",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 700,
              }}
            >
              About Us
            </span>
            <h2
              className="playfair"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                marginTop: 12,
                color: "#fff",
                lineHeight: 1.2,
              }}
            >
              Family-Run, <br />
              Community Trusted
            </h2>
            <div className="divider" />
            <p
              className="lato"
              style={{
                color: "var(--stone-light)",
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: 24,
              }}
            >
              Storm Safety Home Repairs has been serving local homeowners for
              over 12 years. We started as a tree surgery specialist and grew
              into a full home maintenance service — all with the same ethos: do
              the job right, leave every property better than we found it.
            </p>
            <p
              className="lato"
              style={{
                color: "var(--stone-light)",
                lineHeight: 1.9,
                fontWeight: 300,
              }}
            >
              Fully insured, locally based, and proud of every job we complete.
              We show up on time, keep you informed, and clean up after
              ourselves.
            </p>
          </div>
          <div
            style={{
              flex: "1 1 260px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {[
              ["✅", "Fully Insured & Certified"],
              ["📍", "Locally Based Team"],
              ["📞", "Same-Day Response Available"],
              ["🧹", "Always Leave Site Clean"],
            ].map(([icon, text]) => (
              <div
                key={text}
                className="lato"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  color: "var(--stone-light)",
                  fontSize: "0.95rem",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CONTACT */}
      <section
        id="contact"
        style={{ background: "#0d1a0d", padding: "100px 40px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={contRef}>
            <div
              className={`fade-up ${contIn ? "in" : ""}`}
              style={{ textAlign: "center", marginBottom: 60 }}
            >
              <span
                className="lato"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 700,
                }}
              >
                Get in Touch
              </span>
              <h2
                className="playfair"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  marginTop: 12,
                  color: "#fff",
                }}
              >
                Request a Free Quote
              </h2>
              <div className="divider divider-center" />
            </div>

            <div
              className={`contact-grid fade-up ${contIn ? "in" : ""} fade-up-delay-1`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.6fr",
                gap: 60,
                alignItems: "start",
              }}
            >
              {/* Contact Info */}
              <div>
                <h3
                  className="playfair"
                  style={{
                    fontSize: "1.5rem",
                    color: "#fff",
                    marginBottom: 32,
                  }}
                >
                  Contact Information
                </h3>
                {[
                  { icon: "📞", label: "Phone", val: "+353 899749649" },
                  {
                    icon: "📧",
                    label: "Email",
                    val: "stormsafetyhomeimprovements@gmail.com",
                  },
                  {
                    icon: "📍",
                    label: "Location",
                    val: "Serving Dublin & surrounding counties",
                  },
                  // { icon: "🕒", label: "Hours", val: "Mon–Sat: 8am – 6pm" },
                ].map(({ icon, label, val }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      gap: 20,
                      marginBottom: 28,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "rgba(200,168,75,0.1)",
                        border: "1px solid rgba(200,168,75,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        flexShrink: 0,
                      }}
                    >
                      {icon}
                    </div>
                    <div>
                      <div
                        className="lato"
                        style={{
                          fontSize: "0.7rem",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          marginBottom: 4,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        className="lato"
                        style={{ color: "var(--cream)", fontSize: "0.95rem" }}
                      >
                        {val}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Emergency Note */}
                {/* <div
                  style={{
                    background: "rgba(200,168,75,0.08)",
                    border: "1px solid rgba(200,168,75,0.25)",
                    borderRadius: 4,
                    padding: "20px 24px",
                    marginTop: 16,
                  }}
                >
                  <div
                    className="lato"
                    style={{
                      color: "var(--gold)",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "1px",
                      marginBottom: 8,
                    }}
                  >
                    ⚡ STORM EMERGENCY?
                  </div>
                  <div
                    className="lato"
                    style={{
                      color: "var(--stone-light)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Call us immediately for out-of-hours storm damage. We
                    respond as fast as we can.
                  </div>
                </div>*/}
              </div>

              {/* Form */}
              <div
                style={{
                  background: "linear-gradient(135deg, #1a2e1a, #152015)",
                  border: "1px solid rgba(74,124,74,0.2)",
                  borderRadius: 6,
                  padding: "48px 40px",
                }}
              >
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ fontSize: "3.5rem", marginBottom: 20 }}>
                      ✅
                    </div>
                    <h3
                      className="playfair"
                      style={{
                        fontSize: "1.8rem",
                        color: "#fff",
                        marginBottom: 12,
                      }}
                    >
                      Thank You!
                    </h3>
                    <p
                      className="lato"
                      style={{ color: "var(--stone-light)", lineHeight: 1.8 }}
                    >
                      We've received your message and will be in touch within 24
                      hours.
                    </p>
                    <button
                      className="btn-outline"
                      style={{ marginTop: 32 }}
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} name="stormContact" netlify>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 20,
                        marginBottom: 20,
                      }}
                    >
                      <div>
                        <label
                          className="lato"
                          style={{
                            display: "block",
                            fontSize: "0.7rem",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "var(--gold)",
                            marginBottom: 8,
                          }}
                        >
                          Full Name *
                        </label>
                        <input
                          name="name"
                          required
                          className="form-input"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label
                          className="lato"
                          style={{
                            display: "block",
                            fontSize: "0.7rem",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "var(--gold)",
                            marginBottom: 8,
                          }}
                        >
                          Phone *
                        </label>
                        <input
                          name="phone"
                          required
                          className="form-input"
                          placeholder="Your number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <label
                        className="lato"
                        style={{
                          display: "block",
                          fontSize: "0.7rem",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          marginBottom: 8,
                        }}
                      >
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <label
                        className="lato"
                        style={{
                          display: "block",
                          fontSize: "0.7rem",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          marginBottom: 8,
                        }}
                      >
                        Service Required
                      </label>
                      <select
                        name="service"
                        className="form-input"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                      >
                        <option value="">Select a service...</option>
                        <option>Tree Cutting & Removal</option>
                        <option>Roof Cleaning & Repairs</option>
                        <option>Power Washing</option>
                        <option>Gardening & Landscaping</option>
                        <option>Multiple Services</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: 32 }}>
                      <label
                        className="lato"
                        style={{
                          display: "block",
                          fontSize: "0.7rem",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          marginBottom: 8,
                        }}
                      >
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        className="form-input"
                        rows={5}
                        placeholder="Tell us about your project..."
                        style={{ resize: "vertical" }}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ width: "100%", fontSize: "0.8rem" }}
                    >
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#080f08",
          borderTop: "1px solid rgba(74,124,74,0.2)",
          padding: "60px 40px 32px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: 48,
              marginBottom: 48,
            }}
          >
            <div>
              <div
                className="playfair"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 4,
                }}
              >
                Storm Safety
              </div>
              <div
                className="lato"
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "4px",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Home Repairs
              </div>
              <p
                className="lato"
                style={{
                  color: "var(--stone)",
                  lineHeight: 1.8,
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  maxWidth: 280,
                }}
              >
                Trusted home maintenance specialists. Trees, roofs, driveways,
                and gardens — done right.
              </p>
            </div>
            <div>
              <div
                className="lato"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "3px",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Services
              </div>
              {[
                "Tree Cutting",
                "Roof Repairs",
                "Power Washing",
                "Gardening",
              ].map((s) => (
                <div
                  key={s}
                  className="lato"
                  style={{
                    color: "var(--stone)",
                    fontSize: "0.9rem",
                    marginBottom: 10,
                    cursor: "pointer",
                  }}
                  onClick={() => scrollTo("services")}
                >
                  {s}
                </div>
              ))}
            </div>
            <div>
              <div
                className="lato"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "3px",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Navigate
              </div>
              {NAV_LINKS.map((l) => (
                <div
                  key={l}
                  className="lato"
                  style={{
                    color: "var(--stone)",
                    fontSize: "0.9rem",
                    marginBottom: 10,
                    cursor: "pointer",
                  }}
                  onClick={() => scrollTo(l.toLowerCase())}
                >
                  {l}
                </div>
              ))}
            </div>
            <div>
              <div
                className="lato"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "3px",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Contact
              </div>
              <div
                className="lato"
                style={{
                  color: "var(--stone)",
                  fontSize: "0.9rem",
                  marginBottom: 10,
                }}
              >
                +353 87 123 4567
              </div>
              <div
                className="lato"
                style={{
                  color: "var(--stone)",
                  fontSize: "0.9rem",
                  marginBottom: 10,
                }}
              >
                info@stormsafety.ie
              </div>
              <div
                className="lato"
                style={{ color: "var(--stone)", fontSize: "0.9rem" }}
              >
                Dublin & surrounds
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(74,124,74,0.15)",
              paddingTop: 28,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div
              className="lato"
              style={{ color: "var(--stone)", fontSize: "0.8rem" }}
            >
              © 2026 Storm Safety Home Repairs. All rights reserved.
            </div>
            <div
              className="lato"
              style={{ color: "var(--stone)", fontSize: "0.8rem" }}
            >
              Fully Insured · Family Run · Locally Trusted
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
