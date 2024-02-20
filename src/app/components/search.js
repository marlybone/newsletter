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
}


}