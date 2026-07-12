import Link from 'next/link';
import type { Locale } from '@/i18n/types';
import { localizedHref } from '@/i18n/localized-link';
import { t as translate } from '@/i18n/server';

interface FooterProps {
  lang?: string;
  dict?: Record<string, unknown>;
}

export default function Footer({ lang = 'en', dict }: FooterProps) {
  const t = (key: string, vars?: Record<string, string | number>) => {
    if (dict) return translate(dict as Record<string, string | Record<string, string>>, key, vars);
    // Fallback hardcoded strings
    const fallbacks: Record<string, string> = {
      'footer.tagline': "Your eyes inside Chinese factories. We visit factories so you don't have to.",
      'footer.copyright': '© {year} OnSite. All rights reserved.',
      'footer.services_heading': 'Services',
      'footer.all_services': 'All Services',
      'footer.electronics': 'Electronics',
      'footer.consumer_goods': 'Consumer Goods',
      'footer.apparel_textile': 'Apparel & Textile',
      'footer.resources_heading': 'Resources',
      'footer.how_it_works': 'How It Works',
      'footer.explore_china': 'Explore China',
      'footer.sourcing_guides': 'Sourcing Guides',
      'footer.faq': 'FAQ',
      'footer.company_heading': 'Company',
      'footer.about_us': 'About Us',
      'footer.contact': 'Contact',
    };
    const result = fallbacks[key] ?? key;
    if (vars) {
      return result.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
    }
    return result;
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="mb-3 flex items-baseline" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span style={{ fontWeight: 200, fontSize: '1.125rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#fff' }}>On</span>
              <span style={{ fontWeight: 800, fontSize: '1.125rem', letterSpacing: '-0.5px', color: '#fff', marginLeft: '2px' }}>Site</span>
              <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', marginLeft: '4px', display: 'inline-block', position: 'relative', top: '-14px' }} />
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.services_heading')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={localizedHref(lang, '/services')} className="text-white/70 hover:text-primary transition text-sm">
                  {t('footer.all_services')}
                </Link>
              </li>
              <li>
                <Link href={localizedHref(lang, '/industries/electronics')} className="text-white/70 hover:text-primary transition text-sm">
                  {t('footer.electronics')}
                </Link>
              </li>
              <li>
                <Link href={localizedHref(lang, '/industries/consumer-goods')} className="text-white/70 hover:text-primary transition text-sm">
                  {t('footer.consumer_goods')}
                </Link>
              </li>
              <li>
                <Link href={localizedHref(lang, '/industries/apparel-textile')} className="text-white/70 hover:text-primary transition text-sm">
                  {t('footer.apparel_textile')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.resources_heading')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={localizedHref(lang, '/how-it-works')} className="text-white/70 hover:text-primary transition text-sm">
                  {t('footer.how_it_works')}
                </Link>
              </li>
              <li>
                <Link href={localizedHref(lang, '/cities')} className="text-white/70 hover:text-primary transition text-sm">
                  {t('footer.explore_china')}
                </Link>
              </li>
              <li>
                <Link href={localizedHref(lang, '/guides')} className="text-white/70 hover:text-primary transition text-sm">
                  {t('footer.sourcing_guides')}
                </Link>
              </li>
              <li>
                <Link href={localizedHref(lang, '/faq')} className="text-white/70 hover:text-primary transition text-sm">
                  {t('footer.faq')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.company_heading')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={localizedHref(lang, '/about')} className="text-white/70 hover:text-primary transition text-sm">
                  {t('footer.about_us')}
                </Link>
              </li>
              <li>
                <Link href={localizedHref(lang, '/contact')} className="text-white/70 hover:text-primary transition text-sm">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-white/60 text-center">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}
