import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Article {id}</h1>
      <p>article details</p>
    </div>
  );
};

export default Article;
