"use client"
import React, { useState } from 'react';
import client from '@sanity/sanity.client'

export default function Search({ articles }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);

  };


  const filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.categories.some(category => category.title.toLowerCase().includes(searchQuery.toLowerCase()));
  });

return (
  <>
        {/* Search input and other UI elements */}
        {filteredArticles && (
      <ul>
        {filteredArticles.map((article) => (
          <li key={article._id}>
            {/* Render article details */}
          </li>
        ))}
      </ul>
    )}
  </>
);
}