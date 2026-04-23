import type {Metadata, Viewport} from 'next';
import './globals.css'; // Global styles

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || 'https://automation-machines.com'),
  title: {
    default: 'Automation Machines | Futuristic Web Solutions',
    template: '%s | Automation Machines'
  },
  description: 'Futuristic landing page for Automation Machines. We build pixel-perfect, high-end web experiences using React, Node, and SQL.',
  keywords: ['Automation', 'Machines', 'Web Development', 'React', 'Next.js', 'Futuristic', 'High-end'],
  authors: [{ name: 'Automation Machines Team' }],
  creator: 'Automation Machines',
  icons: {
    icon: [
      { url: '/logo.png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://automation-machines.com',
    title: 'Automation Machines | High-End Automation Solutions',
    description: 'We engineer futuristic, pixel-perfect web experiences for the next generation of digital pioneers.',
    siteName: 'Automation Machines',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Automation Machines Futuristic Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automation Machines | High-End Automation Solutions',
    description: 'Engineering futuristic web experiences with precision and scale.',
    images: ['/og-image.png'],
    creator: '@automation_machines',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'Aaxz4xTPWoFt24o2r_M9wsh6B60M0bCZUXbhAuxlbgU',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Automation Machines',
  url: 'https://automation-machines.com',
  description: 'Futuristic landing page for Automation Machines. High-end web solutions built with React, Node, and SQL.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://automation-machines.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

import Butterfly from '@/components/Butterfly';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Butterfly />
        {children}
      </body>
    </html>
  );
}
