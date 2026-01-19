import { useQuery } from '@tanstack/react-query';
import useDebounce from './use-debounce';
import { SearchService } from '@/services/search';

// query key for search
export const searchKeys = {
  all: ['search'] as const,
  queries: () => [...searchKeys.all, 'query'] as const,
  query: (query: string) => [...searchKeys.queries(), query] as const,
}; // ['search', 'query', 'query-value']

interface UseSearchOptions {
  debounceDelay?: number;
  minQueryLength?: number;
  enable?: boolean;
}

// Hook for basic search with debouncing
export const useSearch = (query: string, options: UseSearchOptions = {}) => {
  const { debounceDelay = 300, minQueryLength = 2, enable = true } = options;
  const debounceQuery = useDebounce(query, debounceDelay); // not spamming the api

  return useQuery({
    queryKey: searchKeys.query(debounceQuery), // unique key for the query and cached results
    queryFn: () => SearchService.search({ q: debounceQuery }), // fetch data from api
    enabled: enable && debounceQuery.length >= minQueryLength, // only enable if query is longer than
  });
};
