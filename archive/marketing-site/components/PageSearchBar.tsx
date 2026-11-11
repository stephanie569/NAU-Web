"use client";

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-[#0a0a0a]/35" aria-hidden>
      <circle
        cx="9"
        cy="9"
        r="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13.5 13.5L17 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3 text-[#0a0a0a]/35" aria-hidden>
      <path
        d="M2.5 4.5L6 8l3.5-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const fieldClass =
  "h-10 w-full rounded-[10px] border border-[#0a0a0a]/8 bg-[#f5f5f5] text-[14px] font-medium tracking-[-0.04em] text-[#0a0a0a] outline-none";

export function PageSearchBar({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  searchPlaceholder,
  categoryLabel,
  categories,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  searchPlaceholder: string;
  categoryLabel: string;
  categories: string[];
}) {
  return (
    <div className="flex w-full max-w-[400px] flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
      <label className="relative block w-full sm:w-[240px]">
        <span className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2">
          <SearchIcon />
        </span>
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={searchPlaceholder}
          className={`${fieldClass} pr-4 pl-10 placeholder:text-[#0a0a0a]/35`}
        />
      </label>

      <label className="relative block w-full sm:w-[148px]">
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className={`${fieldClass} appearance-none pr-9 pl-4`}
        >
          <option value="All">{categoryLabel}</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2">
          <ChevronIcon />
        </span>
      </label>
    </div>
  );
}
