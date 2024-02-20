"use client"
import React from "react"
import { useState, useEffect } from 'react'
import client from '@sanity/sanity.client'

export default createSearchQuery = () => {
const [searchQuery, setSearchQuery] = useState('')
const [searchResults, setSearchResults] = useState([]);
const [showSearchResults, setShowSearchResults] = useState(false);

const handleSearch = async (query) => {
    const searchQuery = await client.fetch(
        `*[_type == 'post' && (title match "${query}" || content match "${query}")]`
    )
    try {
        setSearchResults(searchQuery);
        setShowSearchResults(true)
    } catch (error) {
        console.log(error)
    }
}
 return (
    <div>
    <SearchComponent searchQuery={searchQuery} handleSearch={handleSearch} />
    {showSearchResults ? (
      <ul>
        {searchResults.map((result) => (
          <li key={result._id}>{result.title}</li>
        ))}
      </ul>
    ) : (
      <p>Original content goes here.</p>
    )}
  </div>
);   
 

}