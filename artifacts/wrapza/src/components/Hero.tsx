import React from 'react';
import heroBg from '../assets/hero-bg.png';

export default function Hero() {
  return (
    <section id="home" className="hero-section bg-dark">
      <div className="smoke-particle smoke-1"></div>
      <div className="smoke-particle smoke-2"></div>
      <div className="smoke-particle smoke-3"></div>
      <div className="smoke-particle smoke-4"></div>

      <div className="container">
        <div className="hero-split">

          {/* ── Left: text content ── */}
          <div className="hero-content">
            <p className="hero-est heading">EST. 2026 &nbsp;·&nbsp; DESIGNED FOR CANADA 🍁</p>

            <h1 className="hero-headline display">
              BOLD<br />FLAVOURS.<br />
              SMART<br />INVESTMENT.<br />
              <span className="text-orange">BUILT FOR<br />CANADA.</span>
            </h1>

            <p className="hero-tagline">
              A modern fast-casual fusion kitchen — Kathi Rolls, Pizza, Wings,
              Momos, Chai and Pasta — with complete business setup and
              immigration &amp; work permit support.
            </p>

            <div className="hero-buttons">
              <a href="#investment" className="btn btn-red">CAD $200,000 Setup</a>
              <a href="#support" className="btn btn-outline-white">See Support Package</a>
            </div>

            <div className="hero-pills" style={{ justifyContent: 'flex-start' }}>
              <span className="hero-pill">KATHI ROLLS</span>
              <span className="hero-pill">PIZZA</span>
              <span className="hero-pill">WINGS</span>
              <span className="hero-pill">MOMOS</span>
              <span className="hero-pill">CHAI</span>
              <span className="hero-pill">PASTA</span>
            </div>
          </div>

          {/* ── Right: uploaded image panel ── */}
          <div className="hero-image-panel">
            <img src={heroBg} alt="Wrapza menu — bold Indian fusion food" className="hero-panel-img" />
            <div className="hero-panel-overlay"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
