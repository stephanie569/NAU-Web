"use client";

import { useState } from "react";
import { faqItems, faqSectionCopy } from "@/lib/sections";

function ToggleButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] transition-opacity hover:opacity-85"
    >
      <span className="relative block h-3 w-3">
        <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white" />
        {!open && (
          <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-white" />
        )}
      </span>
    </button>
  );
}

function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[14px] bg-white p-6 md:p-7">
      <div className="flex items-start justify-between gap-6">
        <button
          type="button"
          onClick={onToggle}
          className="min-w-0 flex-1 text-left"
        >
          <h3 className="text-[18px] leading-snug font-semibold tracking-[-0.04em] text-[#0a0a0a]">
            {question}
          </h3>
        </button>
        <ToggleButton open={open} onClick={onToggle} />
      </div>

      {open && (
        <p className="mt-4 max-w-[640px] pr-14 text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
          {answer}
        </p>
      )}
    </div>
  );
}

export function FAQSection() {
  const { title, description } = faqSectionCopy;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f5f5f5] px-6 py-24 md:px-9 md:py-32">
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start lg:gap-16 xl:grid-cols-[minmax(0,420px)_1fr]">
          <div>
            <h2 className="text-[clamp(4rem,12vw,9rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
              {title}
            </h2>
            <p className="mt-6 max-w-[320px] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            {faqItems.map((item, index) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                open={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? -1 : index))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
