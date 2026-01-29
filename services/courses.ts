import {
  CourseLevel,
  CoursesListParams,
  CourseStatus,
  IPublicCourse,
  PublicCoursesListResponse,
} from '@/types/course';

const ENDPOINTS = {
  COURSES: '/courses',
  PUBLIC_COURSES: '/courses/public',
} as const;

export class CoursesService {
  // get public courses
  static async getPublicCourses(
    params?: CoursesListParams
  ): Promise<PublicCoursesListResponse> {
    try {
      // return await ApiService.get<PublicCoursesListResponse>(
      //   ENDPOINTS.PUBLIC_COURSES,
      //   params as Record<string, unknown>
      // )

      const mockCourses: IPublicCourse[] = [
        {
          _id: 'course-1',
          title: 'Mastering React & TypeScript',
          slug: 'mastering-react-typescript',
          excerpt:
            'Build production-ready React applications with TypeScript, modern patterns, and best practices.',
          image: '',
          description:
            'A complete, hands-on course that teaches you how to build scalable React applications using TypeScript, hooks, and modern tooling.',
          introUrl: '',
          price: 499000,
          oldPrice: 999000,
          isFree: false,
          status: CourseStatus.PUBLISHED,
          view: 1250,
          sold: 340,
          level: CourseLevel.INTERMEDIATE,
          averageRating: 4.8,
          totalReviews: 180,
          totalDuration: 720,
          enrolledStudents: 1200,
          author: {
            _id: 'author-1',
            username: 'devmaster',
            firstName: 'Dev',
            lastName: 'Master',
            avatar: '',
          },
          category: {
            _id: 'cat-frontend',
            name: 'Frontend Development',
            slug: 'frontend-development',
          },
          chaptersCount: 12,
          lessonsCount: 85,
          totalLessons: 85,
          info: {
            requirements: [],
            benefits: [],
            techniques: [],
            documents: [],
            qa: [],
          },
          createdAt: new Date('2024-01-10'),
          updatedAt: new Date('2024-12-01'),
        },
        {
          _id: 'course-2',
          title: 'Node.js & NestJS Backend Bootcamp',
          slug: 'nodejs-nestjs-backend-bootcamp',
          excerpt:
            'Learn how to design and build robust RESTful APIs with Node.js, NestJS, and TypeScript.',
          image: '',
          description:
            'From fundamentals to advanced concepts: authentication, authorization, caching, and clean architecture with NestJS.',
          introUrl: '',
          price: 599000,
          oldPrice: 1199000,
          isFree: false,
          status: CourseStatus.PUBLISHED,
          view: 980,
          sold: 260,
          level: CourseLevel.INTERMEDIATE,
          averageRating: 4.7,
          totalReviews: 140,
          totalDuration: 840,
          enrolledStudents: 950,
          author: {
            _id: 'author-2',
            username: 'backendguru',
            firstName: 'Backend',
            lastName: 'Guru',
            avatar: '',
          },
          category: {
            _id: 'cat-backend',
            name: 'Backend Development',
            slug: 'backend-development',
          },
          chaptersCount: 10,
          lessonsCount: 70,
          totalLessons: 70,
          info: {
            requirements: [],
            benefits: [],
            techniques: [],
            documents: [],
            qa: [],
          },
          createdAt: new Date('2024-02-15'),
          updatedAt: new Date('2024-11-20'),
        },
        {
          _id: 'course-3',
          title: 'Beginner Friendly HTML, CSS & JavaScript',
          slug: 'beginner-html-css-js',
          excerpt:
            'Start your web development journey from zero with HTML, CSS, and modern JavaScript.',
          image: '',
          description:
            'Perfect for absolute beginners who want to build beautiful and responsive websites from scratch.',
          introUrl: '',
          price: 0,
          oldPrice: 0,
          isFree: true,
          status: CourseStatus.PUBLISHED,
          view: 2100,
          sold: 0,
          level: CourseLevel.BEGINNER,
          averageRating: 4.6,
          totalReviews: 220,
          totalDuration: 540,
          enrolledStudents: 3000,
          author: {
            _id: 'author-3',
            username: 'frontendcoach',
            firstName: 'Frontend',
            lastName: 'Coach',
            avatar: '',
          },
          category: {
            _id: 'cat-basic',
            name: 'Web Fundamentals',
            slug: 'web-fundamentals',
          },
          chaptersCount: 8,
          lessonsCount: 55,
          totalLessons: 55,
          info: {
            requirements: [],
            benefits: [],
            techniques: [],
            documents: [],
            qa: [],
          },
          createdAt: new Date('2023-10-01'),
          updatedAt: new Date('2024-10-10'),
        },
        {
          _id: 'course-4',
          title: 'Fullstack Next.js 14 & Prisma',
          slug: 'fullstack-nextjs14-prisma',
          excerpt:
            'Build a complete, production-ready fullstack application with Next.js 14, Prisma, and PostgreSQL.',
          image: '',
          description:
            'Learn how to design database schemas, build APIs, and create a modern fullstack app using the latest Next.js features.',
          introUrl: '',
          price: 899000,
          oldPrice: 1499000,
          isFree: false,
          status: CourseStatus.PUBLISHED,
          view: 720,
          sold: 180,
          level: CourseLevel.ADVANCED,
          averageRating: 4.9,
          totalReviews: 95,
          totalDuration: 960,
          enrolledStudents: 650,
          author: {
            _id: 'author-4',
            username: 'fullstackpro',
            firstName: 'Fullstack',
            lastName: 'Pro',
            avatar: '',
          },
          category: {
            _id: 'cat-fullstack',
            name: 'Fullstack Development',
            slug: 'fullstack-development',
          },
          chaptersCount: 14,
          lessonsCount: 100,
          totalLessons: 100,
          info: {
            requirements: [],
            benefits: [],
            techniques: [],
            documents: [],
            qa: [],
          },
          createdAt: new Date('2024-05-05'),
          updatedAt: new Date('2024-12-15'),
        },
      ];

      const courses: PublicCoursesListResponse = {
        courses: mockCourses,
        pagination: {
          total: mockCourses.length,
          page: 1,
          limit: 10,
          totalPages: 1,
          hasNextPage: false,
          hasPrevPage: false,
        },
      };
      return courses;
    } catch (error) {
      console.error('Error fetching public courses:', error);
      return {
        courses: [],
        pagination: {
          page: params?.page || 1,
          limit: params?.limit || 10,
          total: 0,
          totalPages: 0,
          hasNextPage: false,
          hasPrevPage: false,
        },
      };
    }
  }
}

export default CoursesService;
