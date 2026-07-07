import React from 'react';

export default function ClientTimeline() {
  const steps = [
    "Profile Review & Onboarding",
    "Concept Alignment",
    "Documentation & Business Plan Preparation",
    "Work Permit Preparation & Filing Support",
    "Visa Allocation / Approval Stage",
    "Arrival in Canada & Business Setup Execution",
    "Location Finalization, Buildout & Launch"
  ];

  return (
    <section className="bg-dark">
      <div className="container">
        <h2 className="section-title display">
          <span className="text-white">IDEAL CLIENT + </span>
          <span className="text-gold">PROCESS TIMELINE</span>
        </h2>
        <p className="section-subline text-white">
          Who this concept suits and how the journey moves forward
        </p>

        <h3 className="timeline-section-title">1. IDEAL CLIENT FIT</h3>
        <div className="ideal-grid">
          <div className="card ideal-card">
            <h3>💼 BUSINESS / MANAGEMENT EXPERIENCE</h3>
            <p>Suitable for clients with business, retail, hospitality, food or management background.</p>
          </div>
          <div className="card ideal-card">
            <h3>👤 ACTIVE OWNERSHIP</h3>
            <p>Client should be ready to participate in setup, management and growth.</p>
          </div>
          <div className="card ideal-card">
            <h3>🍁 CANADA-FOCUSED MINDSET</h3>
            <p>Prepared to operate and build the business in Canada.</p>
          </div>
          <div className="card ideal-card">
            <h3>📈 GROWTH COMMITMENT</h3>
            <p>Willing to support hiring, compliance and operational development.</p>
          </div>
        </div>

        <h3 className="timeline-section-title">2. PROCESS TIMELINE</h3>
        <div className="timeline-track">
          {steps.map((step, idx) => (
            <div className="timeline-step" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-step-num">{idx + 1}</div>
              <div className="timeline-step-text">{step}</div>
            </div>
          ))}
        </div>

        <p className="disclaimer" style={{ marginTop: '3rem' }}>
          * Actual timelines depend on client readiness, documentation, immigration processing, lease timelines and setup conditions.
        </p>
      </div>
    </section>
  );
}
