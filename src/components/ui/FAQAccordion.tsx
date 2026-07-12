'use client';

import { useState } from 'react';
import type { CityFAQ } from '@/types';

export function FAQAccordion({ items }: { items: CityFAQ[] }) {
  return (
    <div className="flex flex-col gap-0">
      {items.map((item, i) => (
        <FAQItem key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="py-[18px] border-b border-border cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="font-semibold text-[0.95rem] flex justify-between items-center">
        {question}
        <span className="text-lg">{open ? '\u2212' : '+'}</span>
      </div>
      {open && (
        <p className="text-[0.88rem] text-text-secondary leading-relaxed mt-2.5">
          {answer}
        </p>
      )}
    </div>
  );
}
