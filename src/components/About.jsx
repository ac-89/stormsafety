const SERVICES = [
  {
    icon: "🌳",
    title: "Tree Cutting & Removal",
    desc: "Safe, professional removal of hazardous, overgrown, or storm-damaged trees. We protect your property from root to canopy.",
  },
  {
    icon: "🏠",
    title: "Roof Cleaning & Repairs",
    desc: "Moss, algae, and debris removal. Tile, Slate, and flat roof repairs that extend the life of your home.",
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
const counties = [
  "Carlow",
  "Kilkenny",
  "Tipperary",
  "Laois",
  "Wicklow",
  "Wexford",
];

export default function About({ scrollTo }) {
  return (
    <section
      id="about"
      style={{
        background: "linear-gradient(135deg, #1a3a1a 0%, #0f2010 100%)",
        borderTop: "1px solid rgba(74,124,74,0.2)",
        borderBottom: "1px solid rgba(74,124,74,0.2)",
        overflow: "hidden",
      }}
    >
      {/* ── FULL-WIDTH HOOK BANNER ── */}
      <div
        style={{
          padding: "100px 40px 80px",
          textAlign: "center",
          maxWidth: 900,
          margin: "0 auto",
        }}
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
          About Us
        </span>
        <h2
          className="playfair"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 700,
            marginTop: 16,
            color: "#fff",
            lineHeight: 1.25,
          }}
        >
          Your driveway is black with algae.
          <br />
          Your roof is thick with moss.
          <br />
          Your garden has been ignored for another winter.
        </h2>
        <div className="divider divider-center" />
        {[
          "You've driven past it every day. Told yourself you'd sort it.",
          "You haven't.",
          "We have.",
        ].map((text) => (
          <p
            key={text}
            className="lato"
            style={{
              lineHeight: 1.9,
              fontWeight: text === "We have." ? 700 : 300,
              color: text === "We have." ? "var(--gold)" : "var(--stone-light)",
              fontSize: text === "We have." ? "1.4rem" : "1.05rem",
              marginBottom: 8,
            }}
          >
            {text}
          </p>
        ))}
      </div>

      {/* ── FULL-WIDTH HERO IMAGE ── */}
      <div
        style={{
          width: "60%",
          margin: "0 auto",
          height: 420,
          overflow: "hidden",
        }}
      >
        <img
          src="images/6-1.png"
          alt="Storm Safety Home Improvements"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* ── TWO COLUMN BODY ── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 40px",
          display: "flex",
          gap: 60,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ flex: "1 1 340px" }}>
          {/* Who We Are */}
          <h3
            className="playfair"
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700,
              marginBottom: 12,
              color: "#fff",
            }}
          >
            Who We Are
          </h3>
          <p
            className="lato"
            style={{
              color: "var(--stone-light)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 8,
            }}
          >
            Storm Safety Home Improvements is a fully insured home improvement
            company serving{" "}
            <strong>
              Carlow, Kilkenny, Tipperary, Laois, Wicklow, and Wexford
            </strong>
            .
          </p>
          {[
            "We show up. We do the work. We leave your home looking better than you imagined.",
            "No vague promises. No disappearing acts. Just a team that takes pride in every single job — from the first pressure wash to the final brushstroke.",
          ].map((text) => (
            <p
              key={text}
              className="lato"
              style={{
                color: "var(--stone-light)",
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: 8,
              }}
            >
              {text}
            </p>
          ))}

          {/* Why It Matters */}
          <h3
            className="playfair"
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700,
              margin: "36px 0 12px",
              color: "#fff",
            }}
          >
            Why It Matters
          </h3>
          {[
            "A neglected roof doesn't fix itself. Algae spreads. Moss holds moisture. Moisture causes damage. Damage costs far more than a clean.",
            "The longer you leave it, the worse it gets.",
          ].map((text) => (
            <p
              key={text}
              className="lato"
              style={{
                color: "var(--stone-light)",
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: 8,
              }}
            >
              {text}
            </p>
          ))}
          <p
            className="lato"
            style={{
              color: "var(--stone-light)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 28,
            }}
          >
            We offer{" "}
            <a href="#contact">
              <strong style={{ color: "var(--gold)" }}>free quotations</strong>
            </a>{" "}
            on every job. No obligation. No pressure. Just an honest assessment
            and a fair price from a team that's fully insured and takes its work
            seriously.
          </p>

          {/* Trust Badges */}
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
                marginBottom: 10,
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{icon}</span>
              <span>{text}</span>
            </div>
          ))}

          {/* CTA Button */}
          <button
            className="btn-primary"
            onClick={() => scrollTo("contact")}
            style={{ marginTop: 32 }}
          >
            Get a Free Quote
          </button>
          <img
            src="images/1-3-copy.jpg"
            alt="Our work"
            style={{ width: "100%", borderRadius: 8, marginTop: 8 }}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div
          style={{
            flex: "1 1 260px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* What We Do */}
          <h3
            className="playfair"
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            What That Looks Like in Practice
          </h3>
          <p
            className="lato"
            style={{
              color: "var(--stone-light)",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            Picture your driveway — jet washed, re-sanded, and sealed until it
            looks brand new. Picture your roof stripped of every trace of moss,
            resealed, and recoloured. Picture your garden transformed — hedges
            razor-sharp, fencing solid, patio laid perfectly.
          </p>
          <p
            className="lato"
            style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1rem" }}
          >
            That's what we do. Every time.
          </p>

          {/* Services — 2 column grid */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px 24px",
            }}
          >
            {SERVICES.map(({ title, desc }) => (
              <li
                key={title}
                className="lato"
                style={{
                  color: "var(--stone-light)",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  paddingLeft: 12,
                  borderLeft: "2px solid var(--gold)",
                  fontSize: "0.9rem",
                }}
              >
                <strong style={{ color: "#fff", display: "block" }}>
                  {title}
                </strong>
                {desc}
              </li>
            ))}
          </ul>

          {/* Second image */}
          <img
            src="images/2-1-copy.jpg"
            alt="Our work"
            style={{ width: "100%", borderRadius: 8, marginTop: 8 }}
          />

          {/* Areas */}
          <h3
            className="playfair"
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: 12,
            }}
          >
            One Call. One Team. Done Right.
          </h3>
          <p
            className="lato"
            style={{
              color: "var(--stone-light)",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            We're not a call centre. We're not a franchise. We're a local team
            and we treat every home like it's our own.
          </p>

          {/* Counties — pill badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {counties.map((county) => (
              <span
                key={county}
                className="lato"
                style={{
                  background: "rgba(74,124,74,0.2)",
                  border: "1px solid rgba(74,124,74,0.4)",
                  borderRadius: 20,
                  padding: "4px 14px",
                  fontSize: "0.85rem",
                  color: "var(--stone-light)",
                }}
              >
                📍 {county}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div
        style={{
          background: "var(--gold)",
          padding: "60px 40px",
          textAlign: "center",
        }}
      >
        <h2
          className="playfair"
          style={{
            color: "#fff",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            marginBottom: 8,
          }}
        >
          Ready to Get Started?
        </h2>
        <p
          className="lato"
          style={{
            color: "rgba(255,255,255,0.85)",
            marginBottom: 8,
            fontWeight: 300,
          }}
        >
          Call us today for a free, no-obligation quote.
        </p>
        <p
          className="lato"
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: 28,
            fontSize: "0.8rem",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Free Quotation · Fully Insured · No Shortcuts
        </p>
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          <a
            href="tel:0599187189"
            style={{
              color: "white",
              textDecoration: "underline",
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            059 918 7189
          </a>
          <a
            href="tel:+353899749649"
            style={{
              color: "white",
              textDecoration: "underline",
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            089 974 9649
          </a>
        </div>
        <button
          className="btn-outline"
          onClick={() => scrollTo("contact")}
          style={{ borderColor: "#fff", color: "#fff" }}
        >
          Send Us a Message
        </button>
      </div>
    </section>
  );
}
