import React from 'react';

export default function WhatIsWrapza() {
  return (
    <section id="about" className="bg-cream">
      <div className="container">
        <h2 className="section-title heading text-black">WHAT IS WRAPZA?</h2>
        <p className="section-subline text-black">
          A bold Indian fusion kitchen concept built for Canadian communities
        </p>
        
        <p className="text-black" style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          WRAPZA is a modern fast-casual takeout and delivery-focused food concept built around Kathi Rolls, pizza, wings, momos, chai, and pasta. The concept is designed for busy Canadian communities where customers want bold flavours, quick service, affordable daily chai, and a simple operating model.
        </p>

        <div className="about-grid">
          <div className="card about-card">
            <h3>🌯 KATHI ROLLS</h3>
            <p>Fresh handmade paratha rolls as the core identity.</p>
          </div>
          <div className="card about-card">
            <h3>☕ DAILY CHAI</h3>
            <p>A repeat-visit traffic driver designed to bring customers back regularly.</p>
          </div>
          <div className="card about-card">
            <h3>🍕+🍗+🥟 PIZZA + WINGS + MOMOS</h3>
            <p>High-demand add-ons that support family orders, delivery, and late-night demand.</p>
          </div>
          <div className="card about-card">
            <h3>🛵 TAKEOUT + DELIVERY FOCUS</h3>
            <p>A compact, efficient, lower-complexity model built for speed and scalability.</p>
          </div>
        </div>

        <div className="badge-pill">
          DESIGNED FOR CANADA 🍁
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
    </section>
  );
}
