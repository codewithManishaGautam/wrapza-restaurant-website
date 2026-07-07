import React from 'react';

export default function BusinessModel() {
  return (
    <section id="business-model" className="bg-cream">
      <div className="container">
        <h2 className="section-title heading text-black">BUSINESS MODEL</h2>
        <p className="section-subline text-black">
          A focused one-store concept built for speed, simplicity and Canadian demand
        </p>

        <div className="business-banner display">
          ONE STORE MODEL ONLY
        </div>

        <div className="business-grid">
          <div className="card business-card">
            <h3>🛵 TAKEOUT + DELIVERY</h3>
            <p>Fast service model built for convenience and online order flow.</p>
          </div>
          <div className="card business-card">
            <h3>⏰ OPEN 24 HOURS</h3>
            <p>Where location demand supports it.</p>
          </div>
          <div className="card business-card">
            <h3>📦 DELIVERY READY</h3>
            <p>Pickup shelf, delivery-app friendly workflow and compact packaging.</p>
          </div>
          <div className="card business-card">
            <h3>📐 PREFERRED FOOTPRINT</h3>
            <p>1,000 to 1,500 sq. ft. preferred.</p>
          </div>
          <div className="card business-card">
            <h3>👥 SIMPLE SCALABLE LAYOUT</h3>
            <p>Designed for efficient staffing and operational control.</p>
          </div>
        </div>

        <div className="zones-container">
          <h3 className="zones-title">STARTER LAYOUT ZONES</h3>
          <div className="zones-grid">
            <span className="zone-badge">Order Counter</span>
            <span className="zone-badge">Pickup Shelf</span>
            <span className="zone-badge">Kathi Roll Line</span>
            <span className="zone-badge">Pizza Oven</span>
            <span className="zone-badge">Wings Fry Station</span>
            <span className="zone-badge">Momos / Pasta Prep</span>
            <span className="zone-badge">Chai Station</span>
            <span className="zone-badge">Cold Storage</span>
          </div>
        </div>

        <div className="note-box">
          <p style={{ margin: 0, color: 'var(--white)', lineHeight: 1.5 }}>
            WRAPZA is built as one strong operating store model so clients can focus on launching and running one efficient location with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
