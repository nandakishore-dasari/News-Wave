import React, { useState, useEffect } from 'react';
import { removeBookmark } from '../utils/bookmarks';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setBookmarks(savedBookmarks);
  }, []);

  const handleRemoveBookmark = (articleUrl) => {
    removeBookmark(articleUrl);
    setBookmarks(bookmarks.filter(article => article.url !== articleUrl));
  };

  if (bookmarks.length === 0) {
    return (
      <div className="container">
        <h1>Your Bookmarks</h1>
        <p className="no-bookmarks">No bookmarks saved yet.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Your Bookmarks</h1>
      <div className="articles-grid">
        {bookmarks.map((article) => (
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
                  className="remove-bookmark-btn"
                  onClick={() => handleRemoveBookmark(article.url)}
                  title="Remove bookmark"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
