import { SearchData, SearchParams } from '@/types/search';

const ENDPOINTS = {
  SEARCH: '/search',
} as const;

export class SearchService {
  /**
   * search courses and blogs
   */
  static async search(params: SearchParams): Promise<SearchData> {
    if (!params.q || params.q.length < 2) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        courses: [],
        blogs: [],
      };
    }

    // add logic api here

    // fake delay response ~1000ms
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { courses: [{
      _id: '12',
      title: 'JavaScript',
      slug: 'javascript',
      image: ''
    }], blogs: [{
      _id: '12',
      title: 'JavaScript',
      slug: 'javascript',
      thumbnail: ''
    }] };
  }
}
