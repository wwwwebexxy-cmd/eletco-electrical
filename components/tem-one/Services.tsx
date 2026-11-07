import { SectionTitle } from "./shared";
import { ScrollReveal } from "./ScrollReveal";
import "./Services.css";

const serviceGroups = [
  [
    {
      label: "Switchgear & Distribution",
      image: "/assets/service-switchgear.png",
      alt: "Electrical switchgear and distribution equipment",
    },
    {
      label: "Cables & Wiring",
      image: "/assets/service-cables.png",
      alt: "Electrical cables and building materials",
    },
    {
      label: "Industrial Controls",
      image: "/assets/service-controls.png",
      alt: "Industrial switchgear and control products",
    },
  ],
  [
    {
      label: "Lighting & Energy",
      image: "/assets/service-lighting.png",
      alt: "LED lighting products",
    },
    {
      label: "Building Materials",
      image: "/assets/service-building-materials.png",
      alt: "PVC pipes and electrical building materials",
    },
    {
      label: "Safety & Hardware",
      image: "/assets/service-safety-hardware.png",
      alt: "Personal protective equipment and hardware",
    },
  ],
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* heading row with the annotation on the right */}
        <div className="services-header">
          <SectionTitle>Our Solutions</SectionTitle>
        </div>

        {/* stacked card swapping animation */}
        <ScrollReveal className="services-content-wrapper" variant="zoom-in">
          <div className="services-stacked-rows">
            {serviceGroups.map((group, groupIndex) => (
              <div className="stacked-deck" key={groupIndex}>
                {group.map((service, i) => (
                  <div
                    key={i}
                    className={`stacked-card stacked-card-${i + 1}`}
                    style={{ animationDelay: `${i * 3}s` }}
                  >
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="service-card-image"
                    />
                    <span className="service-card-text">{service.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
