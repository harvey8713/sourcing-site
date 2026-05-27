import ProcessCard from '@/components/cards/ProcessCard';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
}

export default function ProcessTimeline({ steps, title, subtitle }: ProcessTimelineProps) {
  return (
    <section className="w-full py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold">{title}</h2>}
            {subtitle && <p className="text-text-secondary mt-4">{subtitle}</p>}
          </div>
        )}
        <div>
          {steps.map((step, index) => (
            <ProcessCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
