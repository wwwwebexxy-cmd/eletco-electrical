import { SectionTitle } from "./shared";
import { ScrollReveal } from "./ScrollReveal";
import "./WhyChooseUs.css";

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="wcu-section">
      <div className="wcu-container">
        <SectionTitle>WHY CHOOSE US</SectionTitle>

        {/* large gray content grid split by a thin black cross */}
        <ScrollReveal className="wcu-grid-wrapper" variant="fade-right">
          <div className="wcu-main-grid">
            {[
              "/assets/eletco-switchgear.png",
              "/assets/eletco-power-tools.png",
              "/assets/eletco-lighting-materials.png",
              "/assets/eletco-safety-hardware.png",
            ].map((src, i) => (
              <div key={i} className="wcu-grid-item">
                <img
                  src={src}
                  alt="ELETCO product and service highlight"
                  className="wcu-grid-img"
                />
              </div>
            ))}
          </div>

          {/* crosshair at the centre */}
          <div className="wcu-crosshair-h" />
          <div className="wcu-crosshair-v" />

          {/* four small nested placeholders at the intersection */}
          <div className="wcu-nested-wrapper">
            {["Quality", "Genuine", "On-time", "UAE support"].map((text, i) => (
              <div key={i} className="wcu-nested-item">
                <span className="wcu-nested-text">{text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
