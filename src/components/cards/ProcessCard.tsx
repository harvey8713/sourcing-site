interface ProcessCardProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessCard({
  step,
  title,
  description,
  isLast = false,
}: ProcessCardProps) {
  return (
    <div className="flex items-start gap-6">
      {/* Left side: Step number in circle */}
      <div className="relative flex flex-col items-center">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
          {step}
        </div>
        {/* Vertical connector line */}
        {!isLast && (
          <div className="mt-2 h-full min-h-[3rem] w-0 border-l-2 border-primary/30" />
        )}
      </div>

      {/* Right side: Title + Description */}
      <div className="flex-1 pb-8">
        <h3 className="text-lg font-semibold text-text">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
