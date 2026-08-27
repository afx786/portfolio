import type { Metadata, Viewport } from "next";
import { Inter, Courier_Prime } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl = "https://aaqibabdullah.com"; // [[CANONICAL_PLACEHOLDER]]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AAQIB ABDULLAH — Data / AI Engineer",
  description:
    "Aaqib Abdullah — data/AI engineer and product builder. I build intelligent systems, products, and ideas. Final-year B.Tech CSE (Data Science) at Gautam Buddha University.",
  keywords: [
    "Aaqib Abdullah",
    "AI Engineer",
    "Machine Learning",
    "Data Scientist",
    "Product",
    "OpenIdea",
    "ONDC",
    "portfolio",
  ],
  authors: [{ name: "Aaqib Abdullah" }],
  creator: "Aaqib Abdullah",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "AAQIB ABDULLAH — Data / AI Engineer",
    description:
      "Aaqib Abdullah — data/AI engineer and product builder. I build intelligent systems, products, and ideas. Final-year B.Tech CSE (Data Science) at Gautam Buddha University.",
    siteName: "AAQIB ABDULLAH",
  },
  twitter: {
    card: "summary_large_image",
    title: "AAQIB ABDULLAH — Data / AI Engineer",
    description:
      "Aaqib Abdullah — data/AI engineer and product builder. I build intelligent systems, products, and ideas.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${courierPrime.variable} antialiased`}>
      <body className="min-h-screen bg-canvas font-sans text-ink">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aaqib Abdullah",
              jobTitle: "Data / AI Engineer",
              description: "Aaqib Abdullah — data/AI engineer and product builder. I build intelligent systems, products, and ideas.",
              url: siteUrl,
              sameAs: [
                "https://www.linkedin.com/in/aaqib-abdullah-8620b2292/",
                "https://github.com/afx786",
                "https://instagram.com/afx.exe",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Gautam Buddha University",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}