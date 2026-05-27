import type { IndustrySlug } from '@/types';

export const INDUSTRY_META: Record<
  IndustrySlug,
  { name: string; color: string; bgColor: string; textColor: string; icon: string }
> = {
  electronics: {
    name: 'Electronics',
    color: '#1565C0',
    bgColor: '#E3F2FD',
    textColor: '#0D47A1',
    icon: '⚡',
  },
  'consumer-goods': {
    name: 'Consumer Goods',
    color: '#00838F',
    bgColor: '#E0F7FA',
    textColor: '#006064',
    icon: '📦',
  },
  'apparel-textile': {
    name: 'Apparel & Textile',
    color: '#C62828',
    bgColor: '#FFEBEE',
    textColor: '#B71C1C',
    icon: '👕',
  },
  furniture: {
    name: 'Furniture',
    color: '#6A1B9A',
    bgColor: '#F3E5F5',
    textColor: '#4A148C',
    icon: '🪑',
  },
  'food-beverage': {
    name: 'Food & Beverage',
    color: '#E65100',
    bgColor: '#FFF3E0',
    textColor: '#BF360C',
    icon: '🍵',
  },
  'monopoly-towns': {
    name: 'Monopoly Factory Towns',
    color: '#4527A0',
    bgColor: '#EDE7F6',
    textColor: '#311B92',
    icon: '🏭',
  },
  'canton-fair': {
    name: 'Canton Fair',
    color: '#283593',
    bgColor: '#E8EAF6',
    textColor: '#1A237E',
    icon: '🏛️',
  },
};

export const SITE = {
  name: 'Supply Chain Due Diligence',
  domain: 'https://sourcing-site.com',
  tagline: 'On-the-ground factory audits and sourcing trips across China',
};

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Discovery Call',
    description: 'We learn your product specs, budget, timeline, and sourcing goals in a 45-min call.',
  },
  {
    step: 2,
    title: 'Supplier Shortlist',
    description: 'Our team vets 10-20 factories using trade data, certifications, and sample reviews.',
  },
  {
    step: 3,
    title: 'On-Site Audit',
    description: 'We physically visit every factory, inspect production lines, interview management, and document everything.',
  },
  {
    step: 4,
    title: 'Due Diligence Report',
    description: 'You receive a 30+ page report with photos, videos, financial health checks, and our recommendation.',
  },
  {
    step: 5,
    title: 'Negotiation & Handoff',
    description: 'We facilitate introductions, interpret in meetings, and guide you through the contract process.',
  },
];
