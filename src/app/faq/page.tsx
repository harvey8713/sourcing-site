'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CTASection from '@/components/sections/CTASection';
import { faqs, faqCategories } from '@/data/faqs';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('General');
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs = faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'FAQ', href: '/faq' },
            ]}
          />

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Everything you need to know about our sourcing and factory audit services.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenId(null);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-surface border border-border text-text-secondary hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-surface border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-bg/50 transition"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  <span
                    className={`text-primary text-xl transition-transform shrink-0 ${
                      openId === faq.id ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-4 text-text-secondary leading-relaxed">
                    <div className="border-t border-border pt-4">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="Book a free discovery call and we'll answer everything about our process, pricing, and how we can help with your specific sourcing needs."
        cta={{ label: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
