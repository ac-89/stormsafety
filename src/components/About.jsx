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
            We Don't Just Improve Homes — We Transform Them.
          </h2>
          <div className="divider" />
          <img
            src="images/1-3-copy.jpg"
            alt=""
            srcset=""
            className="img-fluid"
            style={{ width: "100%", borderRadius: 8, marginTop: 20 }}
          />
          <p
            className="lato"
            style={{
              color: "var(--stone-light)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 8,
            }}
          >
            At Storm Safety Home Improvements, we believe your home deserves
            nothing but the best. From the moment we arrive on-site to the final
            finishing touch, we bring unmatched quality, precision, and pride to
            every single job we take on.
          </p>
          <h3
            className="lato"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              marginTop: 12,
              color: "#fff",
              lineHeight: 1.2,
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
            company serving homeowners across{" "}
            <strong>
              Carlow, Kilkenny, Tipperary, Laois, Wicklow, and Wexford
            </strong>
            . Whether you're looking to breathe new life into a tired driveway,
            restore your roof to its former glory, or completely transform your
            outdoor space — we have the skills, the experience, and the passion
            to get it done right.
          </p>
          <p
            className="lato"
            style={{
              color: "var(--stone-light)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 8,
            }}
          >
            No shortcuts. No compromises. Just outstanding results.
          </p>

          <h3
            className="lato"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              marginTop: 12,
              color: "#fff",
              lineHeight: 1.2,
            }}
          >
            Our Promise To You
          </h3>
          <p
            className="lato"
            style={{
              color: "var(--stone-light)",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            Every customer who calls Storm Safety Home Improvements can expect
            the same thing: a job done properly, the first time. We take
            enormous pride in our craft, and our results speak for themselves.
          </p>
          <p
            className="lato"
            style={{
              color: "var(--stone-light)",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            We offer <strong>free quotations</strong> on all work, so there's no
            risk in reaching out. Just honest advice and a fair price from a
            team that genuinely cares about the quality of their work.
          </p>
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
        <div
          style={{
            flex: "1 1 260px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <h3
            className="lato"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              marginTop: 12,
              color: "#fff",
              lineHeight: 1.2,
            }}
          >
            What We Do
          </h3>
          <p
            className="lato"
            style={{
              color: "var(--stone-light)",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            We offer a comprehensive range of home improvement services,
            including:
          </p>
          <ul
            className="lato"
            style={{
              color: "var(--stone-light)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 8,
            }}
          >
            {SERVICES.map(({ title, desc }) => (
              <li
                key={title}
                style={{
                  color: "var(--stone-light)",
                  lineHeight: 1.9,
                  fontWeight: 300,
                  marginBottom: 8,
                }}
              >
                <strong>{title}</strong> — {desc}
              </li>
            ))}
            <img
              src="images/2-1-copy.jpg"
              alt=""
              srcset=""
              className="img-fluid"
              style={{ width: "100%", borderRadius: 8, marginTop: 20 }}
            />
            <h2>Areas We Cover</h2>
            <p>
              Based in the heart of Ireland's South East, we proudly serve
              homeowners right across the region. No matter where you are in{" "}
              <strong>
                Carlow, Kilkenny, Tipperary, Laois, Wicklow, or Wexford
              </strong>{" "}
              — we'll come to you.
            </p>
            <ul className="county-list">
              {counties.map((county) => (
                <li key={county}>📍 {county}</li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
      <div
        style={{
          background: "var(--green-accent)",
          padding: "40px 20px",
          textAlign: "center",
          fontSize: "1.2rem",
          marginTop: 60,
        }}
      >
        <h2>Ready to get started?</h2>
        <p>Call us today for a free quote!</p>
        <a
          href="tel:0599187189"
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "1.5rem",
            margin: "20px 0",
          }}
        >
          059 9187189
        </a>
        <a
          href="tel:+353899749649"
          style={{
            color: "white",
            textDecoration: "underline",
            marginLeft: 20,
            fontSize: "1.5rem",
          }}
        >
          089 974 9649
        </a>
      </div>
    </section>
  );
}
