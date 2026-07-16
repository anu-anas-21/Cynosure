"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-ink-200 border-b border-ink-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-lg font-normal text-ink-600">
                {item.question}
              </span>
              {isOpen ? (
                <Minus className="size-6 shrink-0 text-brand-500" />
              ) : (
                <Plus className="size-6 shrink-0 text-brand-500" />
              )}
            </button>
            {isOpen && (
              <div className="pb-6 text-base leading-relaxed text-ink-500">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
