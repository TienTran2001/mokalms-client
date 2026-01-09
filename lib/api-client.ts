import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

/**
 * 
 * @input {
  page: 1,
  status: ['active', 'pending'],
  keyword: undefined
}
 * @output page=1&status=active&status=pending
 */
const customParamsSerializer = (params: Record<string, unknown>) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      return; // Skip null/undefined values
    }

    if (Array.isArray(value)) {
      // For arrays, add multiple parameters with the same name (no brackets)
      value.forEach((item) => {
        if (item !== null && item !== undefined) {
          searchParams.append(key, String(item));
        }
      });
    } else {
      // For non-arrays, add normally
      searchParams.append(key, String(value));
    }
  });

  return searchParams.toString();
};

// api configuration
const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: customParamsSerializer,
};

// create axios instance
export const apiClient: AxiosInstance = axios.create(API_CONFIG);

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // add auth token to headers

    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // handle error common
    if (error.response?.status === 401) {
      // handle authentication error
    }
    return Promise.reject(error);
  }
);
