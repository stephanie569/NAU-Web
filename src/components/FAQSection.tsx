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
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] transition-opacity hover:opacity-85"
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
    <div className="rounded-[14px] bg-white p-5 md:p-6">
      <div className="flex items-start justify-between gap-5">
        <button
          type="button"
          onClick={onToggle}
          className="min-w-0 flex-1 text-left"
        >
          <h3 className="text-[16px] leading-snug font-semibold tracking-[-0.04em] text-[#0a0a0a] md:text-[17px]">
            {question}
          </h3>
        </button>
        <ToggleButton open={open} onClick={onToggle} />
      </div>

      {open && (
        <p className="mt-3 max-w-[640px] pr-12 text-[14px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
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
    <section
      id="faq"
      className="scroll-mt-[61px] bg-[#f5f5f5] px-6 py-20 md:px-9 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start lg:gap-14 xl:grid-cols-[minmax(0,380px)_1fr]">
          <div>
            <h2 className="text-[clamp(3.25rem,8vw,5.5rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
              {title}
            </h2>
            <p className="mt-4 max-w-[300px] text-[14px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60 md:text-[15px]">
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
