import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

const newsApi = axios.create({
  baseURL: CORS_PROXY + encodeURIComponent(BASE_URL),
  headers: {
    'X-Api-Key': API_KEY,
    'Accept': 'application/json',
  },
  timeout: 10000,
});

export const fetchTopHeadlines = async () => {
  try {
    const response = await newsApi.get('/top-headlines', {
      params: {
        country: 'us',
        pageSize: 10,
      },
    });
    return response.data?.articles || [];
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    return [];
  }
};

export const fetchCategoryNews = async (category) => {
  try {
    const response = await newsApi.get('/top-headlines', {
      params: {
        country: 'us',
        category: category,
        pageSize: 10,
      },
    });
    return response.data?.articles || [];
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    return [];
  }
};
