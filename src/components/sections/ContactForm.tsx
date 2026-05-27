'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-surface rounded-xl border border-accent p-12">
            <div className="text-accent text-5xl mb-4">&#10003;</div>
            <h3 className="text-2xl font-semibold mb-2">Message Sent</h3>
            <p className="text-text-secondary">We&apos;ll get back to you within 24 hours.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-text-secondary text-center mb-10 max-w-md mx-auto">
          Tell us about your sourcing needs and we&apos;ll design a trip that fits.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="form-name" className="block text-sm font-medium mb-2">Name *</label>
            <input
              id="form-name" type="text" name="name" required value={formData.name}
              onChange={handleChange} placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>
          <div>
            <label htmlFor="form-email" className="block text-sm font-medium mb-2">Email *</label>
            <input
              id="form-email" type="email" name="email" required value={formData.email}
              onChange={handleChange} placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>
          <div>
            <label htmlFor="form-company" className="block text-sm font-medium mb-2">Company</label>
            <input
              id="form-company" type="text" name="company" value={formData.company}
              onChange={handleChange} placeholder="Your company"
              className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>
          <div>
            <label htmlFor="form-message" className="block text-sm font-medium mb-2">Message *</label>
            <textarea
              id="form-message" name="message" required rows={5} value={formData.message}
              onChange={handleChange} placeholder="Tell us about your product, target price, quantity..."
              className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-y"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-hover transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
