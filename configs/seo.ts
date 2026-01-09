export const SEO_CONFIG = {
  siteName: 'Moka',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://moka.com',
  defaultTitle: 'Moka - Learn Skills That Matter',
  defaultDescription: 'Moka is a platform for learning skills that matter',

  // business basic
  business: {
    name: 'Moka',
    foundedYear: '2026',
    email: 'support@moka.com',
  },

  // social media
  social: {
    twitter: '@moka',
    facebook: 'moka',
    instagram: 'moka',
    linkedin: 'company/moka',
    youtube: '@moka',
  },

  // SEO keywords
  keywords: [
    'online learning',
    'education platform',
    'online courses',
    'skill development',
    'professional development',
    'e-learning',
    'LMS',
  ],

  // SEO open graph
  openGraph: {
    defaultImage: '/images/...',
    imageAlt: 'Moka - Learn Skills That Matter',
  },

  // Verification
  verification: {
    google: '',
  },
};

export const PAGE_SEO = {
  home: {
    title: 'Learn Skills That Matter | Online Education Platform', // Only used for OpenGraph
    description:
      'Master in-demand skills with expert-led courses. Interactive learning, real-world projects, and professional certificates. Start building your future today with flexible online education.',
  },
};
