// src/components/CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ onSelectCategory }) => {
  const categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  return (
    <div className="category-filter">
      {categories.map(category => (
        <button key={category} onClick={() => onSelectCategory(category)}>{category}</button>
      ))}
    </div>
  );
};

export default CategoryFilter;
