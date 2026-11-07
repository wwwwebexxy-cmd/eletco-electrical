import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              className="footer-logo"
              src="/assets/eletco-logo.jpg"
              alt="ELETCO logo"
            />
            <p className="footer-brand-title">ELETCO</p>
            <p className="footer-brand-subtitle">Electrical Switchgear Trading LLC</p>
          </div>

          {/* Quick Link */}
          <div className="footer-links">
            <p className="footer-links-title">Quick Link</p>
            <ul className="footer-links-list">
              {[
                { label: "Home", href: "#hero" },
                { label: "About us", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="footer-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-company">
            <p className="footer-company-title">UAE Electrical Solutions</p>
            <p className="footer-company-desc">
              Musaffah M40, Abu Dhabi, UAE
              <br />
              info@eletcouae.com
            </p>
          </div>
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} ELETCO Electrical Switchgear Trading LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
