// src/components/NewsList.js
import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ articles }) => {
  return (
    <div>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
