import {
  BlogsFilterParams,
  BlogsListResponse,
  BlogStatus,
  IBlog,
} from '@/types/blog';

// Fake blogs data for development
const FAKE_BLOGS: IBlog[] = [
  {
    _id: '1',
    title: 'Khám phá sức mạnh của học trực tuyến với Moka LMS',
    slug: 'kham-pha-suc-manh-hoc-truc-tuyen-voi-moka-lms',
    content: 'Nội dung demo cho blog 1',
    excerpt:
      'Tìm hiểu cách Moka LMS giúp bạn xây dựng hệ thống học trực tuyến hiện đại.',
    thumbnail: '',
    authorId: 'author-1',
    author: {
      _id: 'author-1',
      email: 'author1@example.com',
      name: 'Nguyễn Văn A',
      username: 'nguyenvana',
      avatar: '',
    },
    status: BlogStatus.PUBLISHED,
    publishedAt: new Date().toISOString(),
    categoryIds: ['cate-1'],
    categoryId: 'cate-1',
    category: {
      _id: 'cate-1',
      name: 'E-learning',
      slug: 'e-learning',
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: '2',
    title: '5 mẹo thiết kế khóa học online thu hút học viên',
    slug: '5-meo-thiet-ke-khoa-hoc-online-thu-hut-hoc-vien',
    content: 'Nội dung demo cho blog 2',
    excerpt:
      'Gợi ý những nguyên tắc quan trọng khi thiết kế nội dung khóa học online.',
    thumbnail: '',
    authorId: 'author-2',
    author: {
      _id: 'author-2',
      email: 'author2@example.com',
      name: 'Trần Thị B',
      username: 'tranthib',
      avatar: '',
    },
    status: BlogStatus.PUBLISHED,
    publishedAt: new Date().toISOString(),
    categoryIds: ['cate-2'],
    categoryId: 'cate-2',
    category: {
      _id: 'cate-2',
      name: 'Thiết kế khóa học',
      slug: 'course-design',
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: '3',
    title: 'Tự động hóa quy trình đào tạo nội bộ',
    slug: 'tu-dong-hoa-quy-trinh-dao-tao-noi-bo',
    content: 'Nội dung demo cho blog 3',
    excerpt: 'Ứng dụng LMS để tối ưu và tự động hóa đào tạo nhân sự.',
    thumbnail: '',
    authorId: 'author-3',
    author: {
      _id: 'author-3',
      email: 'author3@example.com',
      name: 'Lê Văn C',
      username: 'levanc',
      avatar: '',
    },
    status: BlogStatus.PUBLISHED,
    publishedAt: new Date().toISOString(),
    categoryIds: ['cate-3'],
    categoryId: 'cate-3',
    category: {
      _id: 'cate-3',
      name: 'Doanh nghiệp',
      slug: 'business-training',
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: '4',
    title: 'Xây dựng lộ trình học tập cá nhân hóa cho học viên',
    slug: 'xay-dung-lo-trinh-hoc-tap-ca-nhan-hoa-cho-hoc-vien',
    content: 'Nội dung demo cho blog 4',
    excerpt: 'Cách tận dụng dữ liệu để cá nhân hóa trải nghiệm học tập.',
    thumbnail: '',
    authorId: 'author-1',
    author: {
      _id: 'author-1',
      email: 'author1@example.com',
      name: 'Nguyễn Văn A',
      username: 'nguyenvana',
      avatar: '',
    },
    status: BlogStatus.PUBLISHED,
    publishedAt: new Date().toISOString(),
    categoryIds: ['cate-1'],
    categoryId: 'cate-1',
    category: {
      _id: 'cate-1',
      name: 'E-learning',
      slug: 'e-learning',
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export class BlogsService {
  // async get public blogs with pagination
  static async getPublishedBlogs(
    params?: Omit<BlogsFilterParams, 'status'>
  ): Promise<BlogsListResponse> {
    try {
      // return await ApiService.get<BlogsListResponse>(
      // 	ENDPOINTS.BLOGS_PUBLISH,
      // 	params as Record<string, unknown>
      // );
      const page = params?.page ?? 1;
      const limit = params?.limit ?? 4;
      const start = (page - 1) * limit;
      const end = start + limit;
      const pagedBlogs = FAKE_BLOGS.slice(start, end);

      const total = FAKE_BLOGS.length;
      const totalPages = Math.max(1, Math.ceil(total / limit));

      return {
        blogs: pagedBlogs,
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      };
    } catch {
      return {
        blogs: [],
        pagination: {
          page: params?.page || 1,
          limit: params?.limit || 10,
          total: 0,
          totalPages: 0,
        },
      };
    }
  }
}
