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
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
