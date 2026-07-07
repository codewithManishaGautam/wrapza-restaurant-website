import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Business Model', href: '#business-model' },
    { name: 'Investment', href: '#investment' },
    { name: 'Support', href: '#support' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <button className="nav-brand display" onClick={scrollToTop}>
            <h1 className="nav-brand-title">WRAPZA</h1>
            <p className="nav-brand-sub heading">URBAN FUSION KITCHEN</p>
          </button>
          
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <a href="#contact" className="btn btn-orange nav-btn">
            GET STARTED
          </a>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="nav-link display"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact" 
          className="btn btn-orange mt-4"
          onClick={() => setMenuOpen(false)}
        >
          GET STARTED
        </a>
      </div>
    </>
  );
}
