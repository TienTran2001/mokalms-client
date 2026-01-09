import { Metadata } from 'next';
import { generateMetadata } from './seo-head';
import { PAGE_SEO } from '@/configs/seo';

// Home Page SEO
export function generateHomePageMetadata(): Metadata {
  return generateMetadata({
    title: '', // Empty title means use default title without template
    description: PAGE_SEO.home.description,
    canonical: '/',
    openGraph: {
      type: 'website',
      title: PAGE_SEO.home.title, // Use page title for OpenGraph
      description: PAGE_SEO.home.description,
    },
  });
}
