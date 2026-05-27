import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  cta: { label: string; href: string };
}

export default function CTASection({ title, description, cta }: CTASectionProps) {
  return (
    <section className="w-full bg-secondary py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-lg text-white/80 mt-6 leading-relaxed">{description}</p>
        <div className="mt-8">
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition bg-primary hover:bg-primary-hover text-white text-lg"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
