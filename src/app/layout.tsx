import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { SiteCloseout } from "@/components/SiteCloseout";
import { Preloader } from "@/components/Preloader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} ${siteConfig.tagline} by ${siteConfig.founder}`,
  description: siteConfig.description,
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('nau-theme');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Preloader />
          <Header />
          <main>{children}</main>
          <SiteCloseout />
        </ThemeProvider>
      </body>
    </html>
  );
}
