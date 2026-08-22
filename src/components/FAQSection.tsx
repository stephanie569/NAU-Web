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
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] transition-opacity hover:opacity-85"
    >
      <span className="relative block h-2.5 w-2.5">
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
  isLast,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div className={isLast ? "" : "border-b border-[#0a0a0a]/10"}>
      <div className="flex items-center justify-between gap-4 py-4 md:py-5">
        <button
          type="button"
          onClick={onToggle}
          className="min-w-0 flex-1 text-left"
        >
          <h3 className="text-[15px] leading-snug font-semibold tracking-[-0.04em] text-[#0a0a0a] md:text-[16px]">
            {question}
          </h3>
        </button>
        <ToggleButton open={open} onClick={onToggle} />
      </div>

      {open && (
        <p className="max-w-[40rem] pb-4 pr-12 text-[13px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/60 md:text-[14px]">
          {answer}
        </p>
      )}
    </div>
  );
}

export function FAQSection() {
  const { title, description } = faqSectionCopy;
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="faq"
      className="scroll-mt-[61px] bg-[#f5f5f5] px-6 py-14 md:px-9 md:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-7 text-left md:mb-8">
          <h2 className="text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
            {title}
          </h2>
          <p className="mt-2.5 max-w-[28rem] text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/55 md:text-[15px]">
            {description}
          </p>
        </div>

        <div className="rounded-[16px] border border-[#0a0a0a]/10 bg-white px-5 md:px-7">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              open={openIndex === index}
              isLast={index === faqItems.length - 1}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
