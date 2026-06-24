"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
      {children}
    </p>
  );
}

export function PageHero({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <h1 className="max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {subtitle}
            </p>
          )}
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
