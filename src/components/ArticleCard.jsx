import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const handleBookmark = () => {
    const saved = JSON.parse(localStorage.getItem('bookmarks')) || [];
    localStorage.setItem('bookmarks', JSON.stringify([...saved, article]));
  };

  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
      <h3>{article.title}</h3>
      <button onClick={() => navigate(`/article/${encodeURIComponent(article.title)}`, { state: { article } })}>
        View
      </button>
      <button onClick={handleBookmark}>Bookmark</button>
    </div>
  );
};

export default ArticleCard;
