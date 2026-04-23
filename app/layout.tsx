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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://automation-machines.com',
    title: 'Automation Machines | Futuristic Web Solutions',
    description: 'We build pixel-perfect, high-end web experiences.',
    siteName: 'Automation Machines',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Automation Machines',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automation Machines | Futuristic Web Solutions',
    description: 'We build pixel-perfect, high-end web experiences.',
    images: ['/og-image.png'],
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

import CustomCursor from '@/components/CustomCursor';

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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
