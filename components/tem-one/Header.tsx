"use client";

import { useState } from "react";
import "./Header.css";

export function WireframeHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <a className="header-brand" href="#hero" aria-label="ELETCO home">
          <img src="/assets/eletco-logo.jpg" alt="ELETCO logo" />
          <span className="header-title">ELETCO</span>
        </a>

        {/* Mobile Toggle Button */}
        <button 
          className={`mobile-toggle ${isOpen ? "is-active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </button>

        {/* Navigation breadcrumb */}
        <nav className={`header-nav ${isOpen ? "open" : ""}`}>
          <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About us</a>
          <a href="#products" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#why-us" onClick={() => setIsOpen(false)}>Why ELETCO</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
