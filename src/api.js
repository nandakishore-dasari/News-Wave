import axios from 'axios';

const API_KEY = '7ad1f299df594264bb938f089414747f';

const fetchTopHeadlines = async () => {
  const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
  return res.data.articles;
};

const fetchByCategory = async (category) => {
  const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
  return res.data.articles;
};

export { fetchTopHeadlines, fetchByCategory };
