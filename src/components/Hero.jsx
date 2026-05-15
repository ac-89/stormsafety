import { useRef, useEffect, useState } from "react";

export default function Hero({ scrollTo }) {
  const [heroRef, heroIn] = useInView(0.1);

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

  //   const [, setMenuOpen] = useState(false);

  //   const scrollTo = (id) => {
  //     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  //     setMenuOpen(false);
  //   };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/gallery/5-2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
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
            marginBottom: 8,
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
            color: "white",
            maxWidth: 540,
            marginBottom: 48,
            fontWeight: 300,
          }}
        >
          From storm-damaged trees to mossy rooftops and grimy driveways — Storm
          Safety Home Improvements delivers expert, reliable work across all
          aspects of home maintenance. Call us today at{" "}
          <a
            href="tel:0599187189"
            style={{ color: "var(--gold)", fontWeight: 500 }}
          >
            059 9187189
          </a>{" "}
          or at{" "}
          <a
            href="tel:+353899749649"
            style={{ color: "var(--gold)", fontWeight: 500 }}
          >
            089 974 9649
          </a>{" "}
          for a free quote and experience the Storm Safety difference.
        </p>
        <div
          className={`fade-up ${heroIn ? "in" : ""} fade-up-delay-3`}
          style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
        >
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            Get a Free Quote
          </button>
          <button className="btn-outline" onClick={() => scrollTo("services")}>
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
  );
}
