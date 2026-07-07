import React from 'react';

export default function Summary() {
  const points = [
    { icon: '🏪', title: 'ONE STORE MODEL ONLY', desc: 'Focused. Efficient. Built for success.' },
    { icon: '💰', title: 'APPROX. CAD $200,000', desc: 'Setup investment.' },
    { icon: '🍽️', title: 'KATHI ROLLS, PIZZA, WINGS, MOMOS, CHAI AND PASTA', desc: 'A bold fusion menu. Broad customer appeal.' },
    { icon: '🛂', title: 'IMMIGRATION & WORK PERMIT SERVICES INCLUDED', desc: 'Simplifying your journey to business ownership.' },
    { icon: '🤝', title: 'COMPLETE BUSINESS SETUP SUPPORT', desc: 'From planning to launch – we\'ve got you covered.' },
    { icon: '📋', title: 'END-TO-END GUIDANCE AND DOCUMENTATION SUPPORT', desc: 'Accurate, compliant, and stress-free.' },
    { icon: '🍁', title: 'DESIGNED FOR ACTIVE OWNER-OPERATORS IN CANADA', desc: 'Real business. Real growth. Real impact.' },
  ];

  return (
    <section className="bg-cream" id="contact">
      <div className="container">
        <h2 className="section-title display text-gold" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>WRAPZA SUMMARY</h2>
        <p className="section-subline text-black" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
          Bold flavours. Smart investment. Built for Canada.
        </p>

        <div className="summary-container">
          <div className="summary-list">
            {points.map((pt, idx) => (
              <div className="summary-item" key={idx}>
                <div className="summary-icon">{pt.icon}</div>
                <div className="summary-text text-black">
                  <h3>{pt.title}</h3>
                  <p>{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="summary-visual">
            <div className="summary-art">
              🔥🌯☕🍕🍗
            </div>

            <div className="contact-banner">
              CONTACT FOR BROCHURE & DETAILS
            </div>
            <div className="contact-box text-white">
              <h4 className="heading text-gold">Rakesh Handa</h4>
              <a href="tel:+14167007091" className="contact-link">+1 (416) 700-7091</a>
            </div>

            <p className="disclaimer text-black" style={{ marginTop: '1rem', textAlign: 'center' }}>
              * Investment, setup timeline and documentation requirements may vary based on client profile, location and project conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
