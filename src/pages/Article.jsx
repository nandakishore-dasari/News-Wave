import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Article {id}</h1>
      <p>This is a placeholder for article details. You'll need to implement the actual article fetching and display logic.</p>
    </div>
  );
};

export default Article;
