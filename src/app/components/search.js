"use client"
import React, { useState } from 'react';
import client from '@sanity/sanity.client'

export default function Search({ onSearch, articles }) {
  const [searchQuery, setSearchQuery] = useState('');

const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
};

const filteredArticles = articles.filter((article) => {
 
});

return (
  <>
  {console.log(articles)}
  {filteredArticles &&
    filteredArticles.map((article) => (
    <div>article.title</div>
    ))}
    </>
); 
}