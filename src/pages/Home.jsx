import React, { useEffect, useState } from 'react';
import { fetchTopHeadlines } from '../api';
import { addBookmark, removeBookmark, isBookmarked } from '../utils/bookmarks';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchTopHeadlines();
        setArticles(data || []);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Failed to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  const handleBookmark = (article) => {
    if (isBookmarked(article.url)) {
      removeBookmark(article.url);
    } else {
      addBookmark(article);
    }
    setArticles([...articles]);
  };

  if (loading) {
    return <div className="loading">Loading news articles...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!articles || articles.length === 0) {
    return <div className="no-articles">No articles found.</div>;
  }

  return (
    <div className="container">
      <h1>Top Headlines</h1>
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.url} className="article-card">
            <img src={article.urlToImage || 'https://via.placeholder.com/400x200'} alt={article.title} />
            <div className="article-card-content">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <div className="article-actions">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
                <button
                  className={`bookmark-btn ${isBookmarked(article.url) ? 'bookmarked' : ''}`}
                  onClick={() => handleBookmark(article)}
                  title={isBookmarked(article.url) ? 'Remove bookmark' : 'Add bookmark'}
                >
                  {isBookmarked(article.url) ? '★' : '☆'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
