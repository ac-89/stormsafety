import { useState, useEffect } from "react";

export default function Navbar({ links }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(links);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
            Home Improvements
          </div>
        </div>

        {/* Desktop Nav */}
        <div
          style={{ display: "flex", gap: 36, alignItems: "center" }}
          className="desktop-nav"
        >
          {links.map((l) => (
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
          {links.map((l) => (
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
  );
}
