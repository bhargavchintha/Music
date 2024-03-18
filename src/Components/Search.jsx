import React from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get('query');

  // Perform search using the query

  return (
    <div style={{paddingTop:"150px", paddingLeft:'550px'}} >
      <h2>Search Results for: {query}</h2>
      {/* Display search results */}
      <form>
      <input type="Search" name="search" pattern=".*\S.*" required  autoComplete="off" value={query}  />
      </form>
    </div>
  );
};

export default Search;
