import { industriesSectionCopy } from "@/lib/sections";

function IndustryIcon({ name }: { name: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    "aria-hidden": true as const,
    className: "text-white/70",
  };

  if (name === "Travel tech") {
    return (
      <svg {...common}>
        <rect
          x="8"
          y="3.5"
          width="12"
          height="21"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 6.5h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="14" cy="21" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "Consumer goods") {
    return (
      <svg {...common}>
        <path
          d="M7.5 10.5h13l-1.2 11.2a2 2 0 0 1-2 1.8H10.7a2 2 0 0 1-2-1.8L7.5 10.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 10.5V9a3.5 3.5 0 0 1 7 0v1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Travel media
  return (
    <svg {...common}>
      <path
        d="M6.5 6.5h11.5a3.5 3.5 0 0 1 3.5 3.5v11H10A3.5 3.5 0 0 1 6.5 17.5V6.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 21.5h11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.5 10.5h7M10.5 14h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IndustriesSection() {
  const { title, items } = industriesSectionCopy;

  return (
    <section
      id="industries"
      data-header-theme="dark"
      className="relative scroll-mt-[61px] overflow-x-hidden bg-[#0a0a0a] px-6 pt-14 pb-20 md:px-9 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32"
    >
      <div className="relative mx-auto w-full max-w-[1100px]">
        <div className="mb-12 text-center md:mb-14 lg:mb-16">
          <h2 className="text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
            {title}
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-10 pt-2 sm:grid-cols-3 sm:gap-8 md:gap-10 md:pt-4">
          {items.map((item, index) => (
            <li
              key={item.name}
              className="flex min-w-0 flex-col items-center border-b border-white/10 pb-10 text-center sm:border-b-0 sm:pb-0"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/15">
                <IndustryIcon name={item.name} />
              </span>
              <p className="text-[11px] font-semibold tracking-[-0.04em] text-white/35 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-[clamp(1.25rem,2.4vw,1.75rem)] leading-tight font-semibold tracking-[-0.05em] text-white">
                {item.name}
              </h3>
              <p className="mt-2 max-w-[18rem] whitespace-pre-line text-[14px] leading-snug font-medium tracking-[-0.03em] text-balance text-white/55 md:text-[15px]">
                {item.blurb}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
