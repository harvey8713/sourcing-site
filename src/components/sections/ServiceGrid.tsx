import ServiceCard from '@/components/cards/ServiceCard';
import type { Service } from '@/types';

interface ServiceGridProps {
  services: Service[];
  title?: string;
  subtitle?: string;
}

export default function ServiceGrid({ services, title, subtitle }: ServiceGridProps) {
  return (
    <>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl font-bold">{title}</h2>}
          {subtitle && <p className="text-text-secondary mt-4 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </>
  );
}
