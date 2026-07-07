import React from 'react';

export default function FeeStructure() {
  const stages = [
    { num: '1', text: 'Sign Non-Disclosure Agreement (NDA)' },
    { num: '2', text: 'Sign Franchise Agreement' },
    { num: '3', text: 'Retainer', amount: 'CAD $10,000' },
    { num: '4', text: 'Documentation Stage', amount: 'CAD $10,000' },
    { num: '5', text: 'Filing Stage', amount: 'CAD $10,000' },
    { num: '6', text: 'Balance Business Investment', desc: 'Once visas are allocated to the family, they arrive in Canada, and begin moving forward with the business.' },
  ];

  return (
    <section className="bg-cream">
      <div className="container">
        <h2 className="section-title heading text-black">
          FEE STRUCTURE &<br />
          <span className="text-orange">PAYMENT STAGES</span>
        </h2>
        <p className="section-subline text-black">
          Transparent process from onboarding to filing
        </p>

        <div className="fee-stages">
          {stages.map((stage, idx) => (
            <div className="fee-stage" key={idx}>
              <div className="fee-number">{stage.num}</div>
              <div className="fee-content">
                {stage.text}
                {stage.desc && <p style={{ fontSize: '1rem', fontWeight: 400, marginTop: '8px', color: '#666' }}>— {stage.desc}</p>}
              </div>
              {stage.amount && <div className="fee-amount">{stage.amount}</div>}
            </div>
          ))}
        </div>

        <div className="note-box" style={{ marginTop: '2rem' }}>
          <p style={{ margin: 0, color: 'var(--white)', lineHeight: 1.5 }}>
            The payment structure is designed to allow the major business investment to move forward after the visa stage. Designed for Canada 🍁
          </p>
        </div>
        
        <p className="disclaimer text-black" style={{ marginTop: '1rem' }}>
          * Government fees, third-party costs, and operating expenses may be separate where applicable.
        </p>
      </div>
    </section>
  );
}
