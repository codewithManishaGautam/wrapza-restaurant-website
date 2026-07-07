import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ApiResponse {
  status: string;
  message: string;
  timestamp?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setResponseMsg('');

    try {
      const res = await fetch('/java-api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data: ApiResponse = await res.json();

      if (res.ok && data.status === 'success') {
        setStatus('success');
        setResponseMsg(data.message);
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setResponseMsg('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setResponseMsg('Could not reach the server. Please call us directly.');
    }
  };

  return (
    <section id="contact-form" className="bg-dark">
      <div className="container">
        <h2 className="section-title display">
          <span className="text-white">SEND AN </span>
          <span className="text-orange">INQUIRY</span>
        </h2>
        <p className="section-subline text-white">
          Powered by Java Spring Boot — your message is handled server-side
        </p>

        <div className="contact-form-wrapper">
          <div className="contact-info-side">
            <h3 className="heading text-gold" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              CONTACT DIRECTLY
            </h3>
            <p className="text-white" style={{ marginBottom: '0.5rem' }}>👤 Rakesh Handa</p>
            <a href="tel:+14167007091" className="contact-phone-link">
              📞 +1 (416) 700-7091
            </a>
            <div className="java-info-box">
              <p className="heading text-gold" style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                JAVA SPRING BOOT BACKEND
              </p>
              <ul className="java-api-list">
                <li>POST /java-api/contact — Form submission</li>
                <li>GET /java-api/menu — Menu data</li>
                <li>GET /java-api/investment — Investment details</li>
                <li>GET /java-api/health — Server health check</li>
              </ul>
            </div>
          </div>

          <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
                minLength={2}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="form-input"
                placeholder="+1 (416) 000-0000"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="Tell us about your interest in Wrapza franchise..."
                value={form.message}
                onChange={handleChange}
                required
                minLength={10}
                rows={5}
              />
            </div>

            {responseMsg && (
              <div className={`form-response ${status}`}>
                {responseMsg}
              </div>
            )}

            <button
              type="submit"
              className="form-submit-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'SENDING...' : 'SEND INQUIRY →'}
            </button>

            <p className="form-disclaimer">
              * Handled by Java Spring Boot at /java-api/contact
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
