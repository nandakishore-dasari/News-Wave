import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

const newsApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Api-Key': API_KEY,
    'Accept': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

export const fetchTopHeadlines = async () => {
  try {
    const response = await newsApi.get('/top-headlines', {
      params: {
        country: 'us',
        pageSize: 10,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    // Return mock data if API fails
    return [
      {
        title: "Sample News Article",
        description: "This is a sample news article description.",
        urlToImage: "https://via.placeholder.com/400x200",
        url: "https://example.com",
        publishedAt: new Date().toISOString(),
      }
    ];
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
    return response.data.articles;
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    // Return mock data if API fails
    return [
      {
        title: `Sample ${category} News`,
        description: `This is a sample ${category} news article.`,
        urlToImage: "https://via.placeholder.com/400x200",
        url: "https://example.com",
        publishedAt: new Date().toISOString(),
      }
    ];
  }
};
