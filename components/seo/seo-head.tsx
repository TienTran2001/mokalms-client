import { SEO_CONFIG } from '@/configs/seo';
import { Metadata } from 'next';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type: 'website' | 'article' | 'profile';
  };
  twitter?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

export const generateMetadata = ({
  title,
  description,
  keywords = [],
  canonical,
  noIndex = false,
  noFollow = false,
  openGraph,
  twitter,
}: SEOHeadProps): Metadata => {
  const fullTitle = title
    ? `${title} | ${SEO_CONFIG.siteName} `
    : `${SEO_CONFIG.defaultTitle}`;

  const fullDescription = description || SEO_CONFIG.defaultDescription;
  const fullKeywords = [...SEO_CONFIG.keywords, ...keywords];
  const canonicalUrl = canonical
    ? `${SEO_CONFIG.siteUrl}${canonical}`
    : undefined;

  // default image
  const defaultImage = openGraph?.image || SEO_CONFIG.openGraph.defaultImage;
  const imageAlt = openGraph?.title || SEO_CONFIG.openGraph.imageAlt;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords.join(', '),
    authors: [{ name: SEO_CONFIG.business.name }],
    creator: SEO_CONFIG.business.name,
    publisher: SEO_CONFIG.business.name,

    // Robots
    robots:
      noIndex || noFollow
        ? {
            index: !noIndex,
            follow: !noFollow,
          }
        : {
            index: true,
            follow: true,
          },

    // Canonical URL
    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl,
        }
      : undefined,

    // OpenGraph for social sharing
    openGraph: {
      title: openGraph?.title || fullTitle,
      description: openGraph?.description || fullDescription,
      url: canonicalUrl,
      siteName: SEO_CONFIG.siteName,
      locale: 'en_US',
      type: openGraph?.type || 'website',
      images: defaultImage
        ? [
            {
              url: defaultImage,
              width: 1200,
              height: 630,
              alt: imageAlt,
            },
          ]
        : undefined,
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      site: SEO_CONFIG.social.twitter,
      creator: SEO_CONFIG.social.twitter,
      title: twitter?.title || openGraph?.title || fullTitle,
      description:
        twitter?.description || openGraph?.description || fullDescription,
      images:
        twitter?.image || defaultImage
          ? [twitter?.image || defaultImage!]
          : undefined,
    },

    // Verification codes (only include if they exist)
    verification: Object.fromEntries(
      Object.entries(SEO_CONFIG.verification).filter(([, value]) => value)
    ),
  };
};
