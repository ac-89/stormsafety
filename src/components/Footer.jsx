import { useState } from "react";

export default function Footer({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  console.log(links);
  return (
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
              Home Improvements
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
              Trusted home maintenance specialists. Trees, roofs, driveways, and
              gardens — done right.
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
            {["Tree Cutting", "Roof Repairs", "Power Washing", "Gardening"].map(
              (s) => (
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
              ),
            )}
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
            {links.map((l) => (
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
            <a href="tel:+353899749649" style={{ textDecoration: "none" }}>
              <div
                className="lato"
                style={{
                  color: "var(--stone)",
                  fontSize: "0.9rem",
                  marginBottom: 10,
                }}
              >
                +353 899749649
              </div>
            </a>
            <a
              href="mailto:stormsafetyhomeimprovements@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <div
                className="lato"
                style={{
                  color: "var(--stone)",
                  fontSize: "0.9rem",
                  marginBottom: 10,
                }}
              >
                stormsafetyhomeimprovements@gmail.com
              </div>
            </a>
            <div
              className="lato"
              style={{ color: "var(--stone)", fontSize: "0.9rem" }}
            >
              Carlow, Kilkenny, Tipperary & surrounding counties
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
            © 2026 Storm Safety Home Improvements. All rights reserved.
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
  );
}
