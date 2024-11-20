// src/App.js
import React, { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import { fetchNews } from './api';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const news = await fetchNews(category, query, page);
        setArticles(news);
        setError('');
      } catch (error) {
        setError('Failed to fetch news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, [category, query, page]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div>
      <h1>Onice News</h1>
      <div className="container">
        <SearchBar onSearch={setQuery} />
        <CategoryFilter onSelectCategory={setCategory} />
        {error && <p className="error">{error}</p>}
        {loading ? <p className="loading">Loading...</p> : <NewsList articles={articles} />}
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
          <span>Page {page}</span>
          <button onClick={handleNextPage} disabled={articles.length < 10}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default App;
