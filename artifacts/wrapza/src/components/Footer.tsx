import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <button className="footer-brand" onClick={scrollToTop}>
        <h2 className="footer-title">WRAPZA</h2>
      </button>
      <p className="footer-sub">URBAN FUSION KITCHEN</p>
      
      <p className="footer-tagline">
        A Proven Fusion Concept. A Smart Investment.
      </p>
      <p className="footer-gold">
        We Build • You Grow • Together in Canada
      </p>

      <div className="footer-contact">
        Rakesh Handa | <a href="tel:+14167007091" style={{ color: 'var(--white)', textDecoration: 'none' }}>+1 (416) 700-7091</a>
      </div>

      <div className="footer-bottom">
        <span>EST. 2024</span>
        <span>DESIGNED FOR CANADA 🍁</span>
      </div>
    </footer>
  );
}
