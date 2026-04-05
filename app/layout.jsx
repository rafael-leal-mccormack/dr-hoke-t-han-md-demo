import "./globals.css";
import { Inter } from "next/font/google";
import { business } from "@/data/business";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${business.name} | ${business.specialty ?? "Medical Practice"} — ${business.city}`,
  description: business.tagline,
};

function brandVars(b) {
  const p = b.primaryColor ?? "#1a5276";
  const a = b.accentColor  ?? "#2980b9";
  return `
    :root {
      --biz-brand:      ${p};
      --biz-brand-dark: color-mix(in srgb, ${p} 80%, black);
      --biz-brand-pale: color-mix(in srgb, ${p} 15%, white);
      --biz-accent:     ${a};
    }
  `;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: brandVars(business) }} />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
