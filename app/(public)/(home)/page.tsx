import FeaturedCoursesSection from '@/app/(public)/(home)/components/featured-courses-section';
import { generateHomePageMetadata } from '@/components/seo/page-seo';
import CoursesService from '@/services/courses';
import HeroSection from './components/hero-section';

// Generate Home Page Metadata
export const metadata = generateHomePageMetadata();

// server side data fetching
async function fetchDataHomePageData() {
  const [coursesData] = await Promise.all([
    CoursesService.getPublicCourses({ limit: 6 }),
  ]);
  return {
    courses: coursesData,
    blogs: [],
  };
}

// Home page - SSR (Server Component)
const HomePage = async () => {
  // fetch data from server side here
  const { courses, blogs } = await fetchDataHomePageData();
  return (
    <>
      <HeroSection />
      <FeaturedCoursesSection coursesData={courses} />
    </>
  );
};

export default HomePage;
