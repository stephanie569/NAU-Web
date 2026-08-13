"use client";

import { useState } from "react";
import { NauButton } from "@/components/NauButton";

export function BuyGuideButton({
  guideId,
  label,
  fullWidth = false,
  className = "",
}: {
  guideId: string;
  label: string;
  fullWidth?: boolean;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ guideId }),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Unable to start checkout");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start checkout");
      setLoading(false);
    }
  }

  return (
    <div
      className={`flex flex-col gap-1 ${fullWidth ? "w-full items-stretch" : "items-end"} ${className}`.trim()}
    >
      <NauButton
        type="button"
        onClick={startCheckout}
        disabled={loading}
        fullWidth={fullWidth}
        className={loading ? "opacity-60" : undefined}
      >
        {loading ? "Redirecting…" : label}
      </NauButton>
      {error ? (
        <p
          className={`text-[11px] font-medium tracking-[-0.03em] text-red-600 ${fullWidth ? "text-left" : "max-w-[160px] text-right"}`}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
