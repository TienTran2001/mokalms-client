import { generateHomePageMetadata } from '@/components/seo/page-seo';

// Generate Home Page Metadata
export const metadata = generateHomePageMetadata();

// server side data fetching
async function fetchDataHomePageData() {
  return {
    courses: [],
    blogs: [],
  };
}

// Home page - SSR (Server Component)
const HomePage = async () => {
  // fetch data from server side here
  const { courses, blogs } = await fetchDataHomePageData();

  return <div>Home page</div>;
};

export default HomePage;
