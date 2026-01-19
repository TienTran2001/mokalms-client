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
      return {
        courses: [],
        blogs: [],
      };
    }

    // add logic api here

    return { courses: [], blogs: [] };
  }
}
