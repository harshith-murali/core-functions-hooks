"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
const SearchPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query'); // Get the 'query' parameter value
    const page = searchParams.get('page'); // Get the 'page' parameter value
    const category = searchParams.get('category'); // Get the 'category' parameter value
    const allParams = Array.from(searchParams.entries()); // Get all query parameters as an array of [key, value] pairs
  return (
    <div>
      <h1>Search Page</h1>
      <p>Query: {query}</p>
      <p>Page: {page}</p>
      <p>Category: {category}</p>
      <p>All Parameters: {JSON.stringify(allParams)}</p>
    </div>
  )
}

export default SearchPage
