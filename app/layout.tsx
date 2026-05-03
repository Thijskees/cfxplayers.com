import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Geist, Geist_Mono, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://cfxplayers.com'),
  title: {
    default: 'CfxPlayers | FiveM Server Growth & Population Boost',
    template: '%s | CfxPlayers',
  },
  description: 'CfxPlayers helps FiveM server owners grow visibility with reliable server population boosting, fast setup, 24/7 support, and simple pricing.',
  keywords: [
    'CfxPlayers',
    'FiveM server boost',
    'FiveM fake players',
    'FiveM population service',
    'server growth',
    'FiveM marketing',
  ],
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CfxPlayers | FiveM Server Growth & Population Boost',
    description: 'Grow your FiveM server with reliable population boosting, simple setup, and support built for server owners.',
    url: 'https://cfxplayers.com',
    siteName: 'CfxPlayers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'CfxPlayers hero preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CfxPlayers | FiveM Server Growth & Population Boost',
    description: 'Reliable FiveM server population boosting with fast setup and 24/7 support.',
    images: ['/banner.png'],
  },
  icons: {
    icon: [
      {
        url: '/logo2.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo2.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo2.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black scroll-smooth">
      <body className="font-sans antialiased bg-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'CfxPlayers',
              url: 'https://cfxplayers.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://cfxplayers.com/?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
