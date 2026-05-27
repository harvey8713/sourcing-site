import Link from 'next/link';
import { breadcrumbLD } from '@/lib/structured-data';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const ldItems = items.map((item) => ({
    name: item.name,
    url: item.href,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLD(ldItems)),
        }}
      />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {!isLast ? (
                  <>
                    <Link href={item.href} className="text-text-secondary hover:text-primary transition">
                      {item.name}
                    </Link>
                    <span className="text-text-secondary/40">/</span>
                  </>
                ) : (
                  <span className="text-text">{item.name}</span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
