import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SEO_CONFIG } from '@/configs/seo';
import NextTopLoader from 'nextjs-toploader';
import NextAuthSessionProvider from '@/components/providers/session-provider';
import QueryProvider from '@/components/providers/query-provider';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// root metadata
export const metadata: Metadata = {
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: `%s | ${SEO_CONFIG.siteName}`,
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: SEO_CONFIG.keywords.join(', '),
  authors: [{ name: SEO_CONFIG.business.name }],
  creator: SEO_CONFIG.business.name,
  publisher: SEO_CONFIG.business.name,
  generator: 'Next.js',

  // OpenGraph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [
      {
        url: SEO_CONFIG.openGraph.defaultImage,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.openGraph.imageAlt,
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    site: SEO_CONFIG.social.twitter,
    creator: SEO_CONFIG.social.twitter,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [SEO_CONFIG.openGraph.defaultImage],
  },

  // Verification (only if set)
  verification: Object.fromEntries(
    Object.entries(SEO_CONFIG.verification).filter(([, value]) => value)
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full ">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          height={4}
          color="#2563eb"
          showSpinner={false}
          easing="ease"
          speed={500}
          shadow="0 0 10px rgba(37, 99, 235, 0.6), 0 0 20px rgba(124, 58, 237, 0.3)"
          zIndex={9999}
        />
        <NextAuthSessionProvider>
          <QueryProvider>
            {children}
            <Toaster position="top-right" />
          </QueryProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
