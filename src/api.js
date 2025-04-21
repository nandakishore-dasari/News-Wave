import axios from 'axios';

const fetchTopHeadlines = async () => {
  const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.API_KEY}`);
  return res.data.articles;
};

const fetchByCategory = async (category) => {
  const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.API_KEY}`);
  return res.data.articles;
};

export { fetchTopHeadlines, fetchByCategory };
