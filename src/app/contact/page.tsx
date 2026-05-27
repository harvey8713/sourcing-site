'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { CONTACT } from '@/data/site-config';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Contact', href: '/contact' },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Tell us what you&apos;re sourcing. We&apos;ll design a trip that fits your
              timeline, budget, and product requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-surface border border-accent rounded-xl p-8 text-center">
                  <div className="text-accent text-4xl mb-4">&#10003;</div>
                  <h2 className="text-2xl font-semibold mb-2">Message Sent</h2>
                  <p className="text-text-secondary">
                    Thank you for reaching out. We typically respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      What are you looking to source? *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-y"
                      placeholder="Tell us about your product, target price, quantity, and any specific requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-hover transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
                <div className="space-y-3 text-text-secondary">
                  <p>
                    <strong className="text-text">Email:</strong>
                    <br />
                    <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">
                      {CONTACT.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-text">WeChat:</strong>
                    <br />
                    {CONTACT.wechat}
                  </p>
                  <p>
                    <strong className="text-text">WhatsApp:</strong>
                    <br />
                    {CONTACT.whatsapp}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">What Happens Next</h3>
                <ol className="space-y-3 text-text-secondary text-sm">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">1.</span>
                    We&apos;ll review your inquiry within 24 hours.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">2.</span>
                    We&apos;ll schedule a 30-minute discovery call to understand your needs.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">3.</span>
                    We&apos;ll propose a custom sourcing trip plan with timeline and pricing.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">4.</span>
                    Once approved, we start supplier research and trip planning.
                  </li>
                </ol>
              </div>

              <div className="bg-secondary text-white rounded-xl p-6">
                <h3 className="font-semibold mb-2">Free Discovery Call</h3>
                <p className="text-white/70 text-sm">
                  No commitment required. We&apos;ll discuss your sourcing goals and tell you
                  honestly if we can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
