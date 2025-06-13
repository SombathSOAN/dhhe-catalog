import React, { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    // Fake suggestions for now
    setSuggestions(
      value ? ['Suggested Item 1', 'Suggested Item 2', 'Suggested Item 3'] : []
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
