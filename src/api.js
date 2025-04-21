import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

const newsApi = axios.create({
  baseURL: CORS_PROXY + encodeURIComponent(BASE_URL),
  timeout: 10000,
});

export const fetchTopHeadlines = async () => {
  try {
    console.log('Fetching headlines with API key:', API_KEY);
    const response = await newsApi.get('/top-headlines', {
      params: {
        country: 'us',
        pageSize: 10,
        apiKey: API_KEY
      },
    });
    console.log('API Response:', response.data);
    return response.data?.articles || [];
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    return [];
  }
};

export const fetchCategoryNews = async (category) => {
  try {
    console.log(`Fetching ${category} news with API key:`, API_KEY);
    const response = await newsApi.get('/top-headlines', {
      params: {
        country: 'us',
        category: category,
        pageSize: 10,
        apiKey: API_KEY
      },
    });
    console.log(`API Response for ${category}:`, response.data);
    return response.data?.articles || [];
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    return [];
  }
};
