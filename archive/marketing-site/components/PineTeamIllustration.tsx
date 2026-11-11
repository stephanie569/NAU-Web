export function PineTeamIllustration({ compact = false }: { compact?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <svg
        viewBox="0 0 400 500"
        className="h-full w-full"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="pine-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0.15" />
            <stop offset="50%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <path
          d="M78 268 C120 248, 165 238, 206 242 C248 246, 292 258, 328 272"
          stroke="url(#pine-line)"
          strokeWidth="1.4"
          strokeDasharray="5 6"
          strokeLinecap="round"
        />

        <g stroke="white" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
          <g transform="translate(118 92)">
            <circle cx="10" cy="7" r="4.2" />
            <path d="M10 11.4 v7.2 M4.2 15.2 h11.6 M6.4 18.8 v8.4 M13.6 18.8 v8.4" />
          </g>
          <g transform="translate(148 78)">
            <circle cx="10" cy="7" r="4.2" />
            <path d="M10 11.4 v7.2 M3.6 14.8 h12.8 M6.2 18.6 v9 M13.8 18.6 v9" />
          </g>
          <g transform="translate(178 92)">
            <circle cx="10" cy="7" r="4.2" />
            <path d="M10 11.4 v7.2 M4 15 h12 M6.4 18.8 v8.4 M13.6 18.8 v8.4" />
          </g>
          <g transform="translate(158 118)">
            <circle cx="10" cy="7" r="4.2" />
            <path d="M10 11.4 v6.8 M3.8 14.6 h12.4 M6.2 18.4 v8.2 M13.8 18.4 v8.2" />
          </g>
          <ellipse cx="168" cy="128" rx="42" ry="12" strokeOpacity="0.45" />
        </g>

        <path
          d="M148 148 C142 190, 118 228, 96 258"
          stroke="white"
          strokeOpacity="0.28"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
        <path
          d="M178 148 C188 196, 198 226, 206 242"
          stroke="white"
          strokeOpacity="0.28"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
        <path
          d="M198 128 C240 168, 292 220, 322 270"
          stroke="white"
          strokeOpacity="0.22"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      </svg>

      <div
        className={`absolute left-[7%] flex flex-col ${
          compact ? "bottom-[10%] gap-1" : "bottom-[9%] gap-1.5"
        }`}
      >
        <span
          className={`rounded-full border border-white/45 bg-white/18 font-medium tracking-[-0.03em] text-white backdrop-blur-md ${
            compact
              ? "px-2 py-0.5 text-[8px]"
              : "px-2.5 py-1 text-[10px] sm:text-[11px]"
          }`}
        >
          Team of 12
        </span>
        <span
          className={`rounded-full border border-white/35 bg-white/12 font-medium tracking-[-0.03em] text-white/90 backdrop-blur-md ${
            compact
              ? "px-2 py-0.5 text-[8px]"
              : "px-2.5 py-1 text-[10px] sm:text-[11px]"
          }`}
        >
          Stay · activity · host
        </span>
      </div>
    </div>
  );
}
