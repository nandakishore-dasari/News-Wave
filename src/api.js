import axios from 'axios';

const BASE_URL = '/.netlify/functions/news';

export const fetchTopHeadlines = async () => {
  try {
    const response = await axios.get(BASE_URL, {
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
    const response = await axios.get(BASE_URL, {
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
