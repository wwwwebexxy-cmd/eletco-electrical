import { SectionTitle } from "./shared";
import { ScrollReveal } from "./ScrollReveal";
import "./About.css";

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* watermark, top-right */}
        <div className="watermark">
          <p className="watermark-text">ELETCO</p>
        </div>

        <ScrollReveal className="about-grid" variant="fade-up" duration="slow">
          {/* Left Side: Overlapping Images */}
          <div className="about-images">
            <div className="about-img about-img-1">
              <img
                src="/assets/eletco-hero.png"
                alt="ELETCO electrical products showroom"
                className="about-real-img"
              />
            </div>
            <div className="about-img about-img-2">
              <img
                src="/assets/eletco-switchgear.png"
                alt="Electrical switchgear and distribution products"
                className="about-real-img"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="about-content">
            <SectionTitle>About ELETCO</SectionTitle>
            <p className="about-description">
              ELETCO Electrical Switchgear Trading LLC is a trusted and reliable
              supplier of high-quality electrical products, industrial solutions,
              and building materials in the UAE. We support construction,
              industrial, commercial, and residential projects with dependable
              products, responsive service, and expert support.
            </p>
            <a className="about-btn" href="#products">Explore our range</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
