import React from 'react';

export default function SupportPackage() {
  const supports = [
    { icon: '🏗️', title: 'BUSINESS CONCEPT FINALIZATION', desc: 'Confirm WRAPZA model, investment level and target market.' },
    { icon: '📍', title: 'LOCATION SEARCH SUPPORT', desc: 'Shortlist suitable plazas and target communities.' },
    { icon: '📝', title: 'LEASE COORDINATION', desc: 'Review food use, signage, terms and setup feasibility.' },
    { icon: '📊', title: 'BUSINESS PLAN SUPPORT', desc: 'Prepare concept summary, budget and economic benefit narrative.' },
    { icon: '🔨', title: 'DESIGN & BUILDOUT COORDINATION', desc: 'Layout, signage, kitchen flow, contractors and timeline.' },
    { icon: '🚚', title: 'VENDOR & SUPPLIER SETUP', desc: 'Equipment, food supply, packaging, POS and opening inventory.' },
    { icon: '📣', title: 'BRANDING & LAUNCH GUIDANCE', desc: 'Menu boards, local marketing, social templates and opening promotion.' },
    { icon: '🛂', title: 'IMMIGRATION & WORK PERMIT SERVICES INCLUDED', desc: 'Work permit preparation support is part of the package.' },
  ];

  return (
    <section id="support" className="bg-cream">
      <div className="container">
        <h2 className="section-title heading text-black">COMPLETE SUPPORT PACKAGE</h2>
        <p className="section-subline text-black">
          Business setup + immigration support from start to finish
        </p>

        <div className="support-grid">
          {supports.map((s, idx) => (
            <div className="card support-card" key={idx}>
              <div className="support-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="support-banner">
          <h3 className="heading">END-TO-END GUIDANCE INCLUDED</h3>
          <div className="support-pills">
            <span className="support-pill">Focused on Your Success</span>
            <span className="support-pill">Support at Every Step</span>
            <span className="support-pill">Designed for Canada</span>
            <span className="support-pill">We Build. You Grow.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
