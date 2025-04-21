import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCategoryNews } from '../api';
import { addBookmark, removeBookmark, isBookmarked } from '../utils/bookmarks';

const Category = () => {
  const { type } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchCategoryNews(type);
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [type]);

  const handleBookmark = (article) => {
    if (isBookmarked(article.url)) {
      removeBookmark(article.url);
    } else {
      addBookmark(article);
    }
    // Force re-render
    setArticles([...articles]);
  };

  if (loading) return <div className="loading">Loading {type} news...</div>;

  return (
    <div className="container">
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)} News</h1>
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.url} className="article-card">
            <img src={article.urlToImage} alt={article.title} />
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

export default Category;
