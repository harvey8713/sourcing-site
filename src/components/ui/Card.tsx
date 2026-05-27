import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className = '', href }: CardProps) {
  const cardClasses = `bg-surface border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition ${className}`;

  if (href) {
    return (
      <a href={href} className={cardClasses}>
        {children}
      </a>
    );
  }

  return <div className={cardClasses}>{children}</div>;
}
