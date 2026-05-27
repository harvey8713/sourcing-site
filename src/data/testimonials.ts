export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'We saved $45,000 on our first order by switching from an Alibaba supplier to a factory Michael found in Shenzhen. The quality was better, the price was lower, and we have a direct relationship now.',
    author: 'James K.',
    company: 'AudioTech EU',
    service: 'Shenzhen Electronics Sprint',
  },
  {
    quote: 'I spent 3 days lost in Yiwu before hiring this team. They mapped my categories, walked me to real manufacturers, and I placed 7 sample orders in one day. Worth every dollar.',
    author: 'Sarah M.',
    company: 'Bright Ideas Imports',
    service: 'Yiwu Commodity Sprint',
  },
  {
    quote: 'The textile deep dive was incredible. From fabric mills in Keqiao to dye houses in Shaoxing — I saw more of the supply chain in 5 days than I had in 2 years of remote sourcing.',
    author: 'Thomas R.',
    company: 'Threadbare London',
    service: 'Textile Belt Deep Dive',
  },
];
