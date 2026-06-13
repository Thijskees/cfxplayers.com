import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Geist } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cfxplayers.com"),
  title: {
    default:
      "CfxPlayers | Elite FiveM Bots, FiveM Fake Players & Server Population Service",
    template: "%s | CfxPlayers",
  },
  description:
    "The ultimate platform for FiveM bots, FiveM fake players, and advanced Cfx fake players. Safely boost your FiveM player count, maximize server visibility, and simulate realistic traffic to grow your community 24/7.",
  keywords: [
    // Direct Core Target Keywords
    "fivem bots",
    "fivem fake players",
    "fivem players",
    "cfx fake players",
    "cfxplayers",

    // Niche & High-Intent Longtail Search Terms
    "fivem player boost",
    "fivem server bots",
    "fivem population service",
    "fivem fake player script",
    "fivem player multiplier",
    "fivem spoof players",
    "fivem list bots",
    "cfx re population tool",
    "fivem artificial traffic",
    "fivem synthetic players",

    // Common User Search Questions / Intent Phrases
    "how to get players on fivem server",
    "how to boost fivem server population",
    "best fivem server growth tools",
    "fivem server list visibility hack",
    "fivem population optimizer",
  ],
  generator: "v0.app",
  alternates: {
    canonical: "https://cfxplayers.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "CfxPlayers | Premium FiveM Bots & Cfx Fake Players Dashboard",
    description:
      "Instantly deploy premium FiveM fake players and stable server bots. Securely scale your global player count, climb the Cfx listings, and trigger real community growth.",
    url: "https://cfxplayers.com",
    siteName: "CfxPlayers",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "CfxPlayers - Elite FiveM Bots and Cfx Fake Players Optimization Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CfxPlayers | FiveM Bots & Cfx Fake Players Network",
    description:
      "Deploy advanced FiveM fake players and reliable server bots to securely maximize your visible player count.",
    images: ["/banner.png"],
  },
  icons: {
    icon: [
      { url: "/logo2.png", media: "(prefers-color-scheme: light)" },
      { url: "/logo2.png", media: "/logo2.png" },
      { url: "/logo2.svg", type: "image/svg+xml" },
    ],
    apple: "/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-black scroll-smooth ${geistSans.variable}`}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T0HS3CW79L"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T0HS3CW79L', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-black text-white selection:bg-purple-600 selection:text-white">
        {/* Maximum Schema injection combining Software Application data with high-intent search tags */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "CfxPlayers",
              url: "https://cfxplayers.com",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Windows, Linux Server",
              description:
                "Advanced automation software providing secure FiveM bots infrastructure, realistic FiveM fake players systems, and stable Cfx fake players tools to optimize server visibility.",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "9.99",
                priceValidUntil: "2027-12-31",
              },
              keywords:
                "fivem bots, fivem fake players, fivem players, cfx fake players, cfxplayers, fivem player boost, fivem server bots",
            }),
          }}
        />

        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
