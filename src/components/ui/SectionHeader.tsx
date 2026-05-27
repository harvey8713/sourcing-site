interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  const containerClasses = centered ? 'text-center mx-auto max-w-2xl' : '';

  return (
    <div className={containerClasses}>
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && <p className="text-text-secondary mt-2">{subtitle}</p>}
    </div>
  );
}
