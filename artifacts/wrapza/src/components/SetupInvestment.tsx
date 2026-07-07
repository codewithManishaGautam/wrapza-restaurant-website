import React from 'react';

export default function SetupInvestment() {
  const items = [
    { label: 'Brand / franchise and setup coordination', amount: '$20,000' },
    { label: 'Lease deposit and initial rent setup', amount: '$15,000' },
    { label: 'Design, drawings, permits and approvals', amount: '$10,000' },
    { label: 'Leasehold improvements / buildout', amount: '$45,000' },
    { label: 'Kitchen equipment and refrigeration', amount: '$50,000' },
    { label: 'POS, security, menu screens and tech', amount: '$10,000' },
    { label: 'Signage, branding and storefront', amount: '$10,000' },
    { label: 'Initial inventory and packaging', amount: '$10,000' },
    { label: 'Launch marketing and local promotions', amount: '$5,000' },
    { label: 'Opening working capital reserve', amount: '$25,000' },
  ];

  return (
    <section id="investment" className="bg-dark">
      <div className="container">
        <h2 className="section-title display text-white">APPROX. SETUP INVESTMENT</h2>
        <p className="section-subline text-white">
          Estimated business setup budget for one WRAPZA store
        </p>

        <div className="amount-box">
          <div className="amount-icon">📈</div>
          <h3 className="amount-value display">CAD $200,000</h3>
        </div>

        <div className="investment-table">
          {items.map((item, idx) => (
            <div className="table-row" key={idx}>
              <div className="table-label">{item.label}</div>
              <div className="table-amount">{item.amount}</div>
            </div>
          ))}
          <div className="table-row total">
            <div className="table-label">TOTAL APPROXIMATE INVESTMENT</div>
            <div className="table-amount">CAD $200,000</div>
          </div>
        </div>
        
        <p className="disclaimer">
          * Final investment may vary by province, location, landlord conditions and construction scope.
        </p>

        <div className="note-box note-box-gold">
          <p style={{ margin: 0, color: 'var(--white)', lineHeight: 1.5 }}>
            Balance business investment can be completed once visas are allocated to the family, they arrive in Canada, and begin moving forward with the business setup.
          </p>
        </div>
      </div>
    </section>
  );
}
