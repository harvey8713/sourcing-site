import type { FAQItem } from '@/types';

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What makes your service different from Alibaba or trade shows?',
    answer: 'Alibaba and trade shows show you what suppliers want you to see. We show you the reality — unedited factory floors, real production capacity, and management quality. We visit factories that may not even have English-speaking staff and never attend trade shows. You get unbiased, on-the-ground intelligence.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'Do I need to travel to China?',
    answer: 'No. Our standard service operates with you remotely. We conduct the on-site visits, document everything, and deliver a comprehensive report. However, we do offer accompanied trips where you join us — these are popular for building direct relationships with factory owners.',
    category: 'General',
  },
  {
    id: 'faq-3',
    question: 'How do you find factories beyond what is on Alibaba?',
    answer: 'We use a combination of methods: Chinese-language trade databases, industry association directories, local government business registries, trade show attendee lists, and our 15-year personal network. Many of the best factories do not list on English-language platforms.',
    category: 'Methodology',
  },
  {
    id: 'faq-4',
    question: 'What is included in the due diligence report?',
    answer: 'Our standard report (30+ pages) includes: factory profile and background check, production line photos and videos, quality management system assessment, financial health overview, equipment list and capability analysis, sample evaluation, pricing analysis, and our sourcing recommendation with rationale.',
    category: 'Methodology',
  },
  {
    id: 'faq-5',
    question: 'How much does a typical sourcing trip cost?',
    answer: 'Our service fees range from $2,200 to $4,800 depending on duration, locations, and industry complexity. This covers all research, on-site work, and reporting. Your travel costs (flights, hotels, meals) are separate. See individual service pages for exact pricing.',
    category: 'Pricing',
  },
  {
    id: 'faq-6',
    question: 'Do you guarantee finding a suitable supplier?',
    answer: 'We guarantee thorough due diligence and transparent reporting. While we cannot guarantee that every search will find a perfect match, our 98% client satisfaction rate reflects our ability to either find suitable suppliers or provide clear, actionable reasons why the search was unsuccessful.',
    category: 'Pricing',
  },
  {
    id: 'faq-7',
    question: 'Can you help with small orders or startups?',
    answer: 'Yes. Many of our clients are startups and small brands. We specifically target factories that accept smaller MOQs (minimum order quantities) and are willing to grow with new clients. Some of our services, like the Shenzhen Electronics Sprint, are particularly startup-friendly.',
    category: 'General',
  },
  {
    id: 'faq-8',
    question: 'What industries do you cover?',
    answer: 'We cover electronics, consumer goods, apparel and textiles, furniture, food and beverage, and specialized manufacturing. Each has a dedicated service page with detailed methodology. We also create custom routes for unique requirements.',
    category: 'General',
  },
  {
    id: 'faq-9',
    question: 'How do you handle language barriers?',
    answer: 'Our entire team is bilingual (Mandarin/English). We handle all communication during factory visits and can continue as an intermediary after the trip for negotiations and ongoing communication. All reports are delivered in English.',
    category: 'Methodology',
  },
  {
    id: 'faq-10',
    question: 'What happens after the factory visit?',
    answer: 'You receive your report within 5 business days. We then schedule a 1-hour debrief call to discuss findings and recommendations. We provide 30 days of post-trip support for supplier communication and can arrange follow-up visits, sample orders, or contract negotiation.',
    category: 'Process',
  },
  {
    id: 'faq-11',
    question: 'Do you work on commission from factories?',
    answer: 'No. We are 100% paid by our clients. We do not accept commissions, kickbacks, or referral fees from factories. This ensures our assessments are completely unbiased and our only interest is finding you the best supplier.',
    category: 'Pricing',
  },
  {
    id: 'faq-12',
    question: 'Can you help with quality control after production starts?',
    answer: 'Yes. We offer ongoing quality control services including pre-production inspections, during-production checks, and pre-shipment inspections. These are available as add-on services for clients who have established supplier relationships through us.',
    category: 'Process',
  },
];

export const faqCategories = ['General', 'Methodology', 'Pricing', 'Process'] as const;
