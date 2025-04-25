"use client";

import React, { useState } from 'react';
import Results from './results';
import "./search.css";

function Search() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);


  const handleChange = (e) => {
    const content = e.target.value;

    const cleaned = content.replace(/[^a-zA-Z0-9]/g, '').slice(0, 30);
    setQuery(cleaned);
  };

  const handlePaste = (e) => {
    alert("Pasting of data is not allowed.")
    e.preventDefault();
  };

  const handleSubmit = async () => {
    if (!query) return;

    setLoading(true);

    try {
      const response = await fetch(
        'https://rocketapi-for-developers.p.rapidapi.com/instagram/user/search',
        {
          method: 'POST',
          headers: {
            'x-rapidapi-ua': 'RapidAPI-Playground',
            'x-rapidapi-key': 'ba3b2a31d6msh094e26bf4ff14e3p11530fjsnefda12dbfccc',
            'x-rapidapi-host': 'rocketapi-for-developers.p.rapidapi.com',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        }
      );

      const data = await response.json();
      setUsers(data.response.body.users);
    } catch (error) {
      console.error('Error fetching:', error);
      alert('Something went wrong with the API call.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}
        placeholder="Username"
      />
      <button onClick={handleSubmit} disabled={loading || !query}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      <p>* 30 character limit, alphanumeric characters only</p>

      {users.length > 0 && <Results users={users} />}

    </div>
  );
}

export default Search;
