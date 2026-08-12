"use client";

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-[#0a0a0a]/35" aria-hidden>
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
    <div className="flex flex-col gap-2 rounded-[20px] bg-[#f5f5f5] p-1.5 sm:flex-row sm:items-center">
      <label className="relative block min-w-0 flex-[2]">
        <span className="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2">
          <SearchIcon />
        </span>
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-full bg-white py-3.5 pr-5 pl-12 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a] outline-none placeholder:text-[#0a0a0a]/35"
        />
      </label>

      <label className="relative min-w-0 flex-1 sm:max-w-[200px]">
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="w-full appearance-none rounded-full bg-white py-3.5 pr-10 pl-5 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a] outline-none"
        >
          <option value="All">{categoryLabel}</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2">
          <ChevronIcon />
        </span>
      </label>
    </div>
  );
}
