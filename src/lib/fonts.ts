import localFont from "next/font/local";

/** Body / UI typeface — local so Docker builds do not hit Google Fonts. */
export const inter = localFont({
  src: [
    { path: "../fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

/** Official nau wordmark typeface (chunky / Bagel Fat One). */
export const nauMark = localFont({
  src: "../fonts/BagelFatOne-Regular.woff2",
  weight: "400",
  display: "swap",
});
