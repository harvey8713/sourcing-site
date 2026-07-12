'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { CONTACT } from '@/data/site-config';
import { localizedHref } from '@/i18n/localized-link';
import { useT } from '@/i18n/dictionary-context';

interface ContactPageClientProps {
  lang: string;
}

export default function ContactPageClient({ lang }: ContactPageClientProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const t = useT();

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
            { name: t('contact_page.breadcrumb_home'), href: localizedHref(lang, '/') },
            { name: t('contact_page.breadcrumb_contact'), href: localizedHref(lang, '/contact') },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('contact_page.hero_title')}</h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {t('contact_page.hero_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-surface border border-accent rounded-xl p-8 text-center">
                  <div className="text-accent text-4xl mb-4">&#10003;</div>
                  <h2 className="text-2xl font-semibold mb-2">{t('contact_page.success_title')}</h2>
                  <p className="text-text-secondary">
                    {t('contact_page.success_message')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t('contact_page.form_name_label')}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      placeholder={t('contact_page.form_name_placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('contact_page.form_email_label')}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      placeholder={t('contact_page.form_email_placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      {t('contact_page.form_company_label')}
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      placeholder={t('contact_page.form_company_placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t('contact_page.form_message_label')}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-y"
                      placeholder={t('contact_page.form_message_placeholder')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-hover transition"
                  >
                    {t('contact_page.form_submit')}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">{t('contact_page.contact_info_heading')}</h3>
                <div className="space-y-3 text-text-secondary">
                  <p>
                    <strong className="text-text">{t('contact_page.contact_email_label')}</strong>
                    <br />
                    <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">
                      {CONTACT.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-text">{t('contact_page.contact_wechat_label')}</strong>
                    <br />
                    {CONTACT.wechat}
                  </p>
                  <p>
                    <strong className="text-text">{t('contact_page.contact_whatsapp_label')}</strong>
                    <br />
                    {CONTACT.whatsapp}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">{t('contact_page.next_steps_heading')}</h3>
                <ol className="space-y-3 text-text-secondary text-sm">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">1.</span>
                    {t('contact_page.next_step_1')}
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">2.</span>
                    {t('contact_page.next_step_2')}
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">3.</span>
                    {t('contact_page.next_step_3')}
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">4.</span>
                    {t('contact_page.next_step_4')}
                  </li>
                </ol>
              </div>

              <div className="bg-secondary text-white rounded-xl p-6">
                <h3 className="font-semibold mb-2">{t('contact_page.discovery_call_title')}</h3>
                <p className="text-white/70 text-sm">
                  {t('contact_page.discovery_call_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
