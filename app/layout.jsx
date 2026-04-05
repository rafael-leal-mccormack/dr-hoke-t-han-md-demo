import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { business } from "@/data/business";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400","500","600","700","800"] });

export const metadata = {
  title: `${business.name} | ${business.specialty ?? "Medical Practice"} — ${business.city}`,
  description: business.tagline,
};

function brandVars(b) {
  const p = b.primaryColor ?? "#0a1628";
  const a = b.accentColor  ?? "#06b6d4";
  return `:root {
    --biz-brand:       ${p};
    --biz-brand-mid:   color-mix(in srgb, ${p} 75%, white);
    --biz-accent:      ${a};
    --biz-accent-dark: color-mix(in srgb, ${a} 80%, black);
  }`;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: brandVars(business) }} />
      </head>
      <body className={`${jakarta.className} antialiased bg-white text-gray-900`}>{children}</body>
    </html>
  );
}
