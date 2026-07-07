import React from 'react';

export default function DocumentsRequired() {
  const docs = [
    "Passport copies for all applicants",
    "Resume / CV",
    "Educational documents",
    "Employment letters / experience proof",
    "Business ownership / management proof, if available",
    "Bank statements / proof of funds / net worth support",
    "Marriage certificate and children's birth certificates, if family is included",
    "Digital photos",
    "Travel history / visa copies, if available",
    "Police certificates, if required",
    "Completed client questionnaire and signed forms",
    "Any additional documents requested by the licensed representative"
  ];

  return (
    <section className="bg-dark">
      <div className="container">
        <h2 className="section-title display">
          <span className="text-white">DOCUMENTS REQUIRED FOR</span><br />
          <span className="text-orange">WORK PERMIT PREPARATION</span>
        </h2>
        <p className="section-subline text-white">
          Primary checklist for the main applicant and family members
        </p>

        <div className="doc-grid">
          {docs.map((doc, idx) => (
            <div className="doc-item" key={idx}>
              <div className="doc-icon">✓</div>
              <div className="doc-text">{doc}</div>
            </div>
          ))}
        </div>

        <div className="note-box">
          <p style={{ margin: 0, color: 'var(--white)', lineHeight: 1.5 }}>
            Final document requirements may vary based on the client profile, family composition and immigration strategy.
          </p>
        </div>
      </div>
    </section>
  );
}
