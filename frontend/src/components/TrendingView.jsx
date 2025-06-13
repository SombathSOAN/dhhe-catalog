import React from 'react';

const trending = [
  'Trending 1',
  'Trending 2',
  'Trending 3'
];

export default function TrendingView() {
  return (
    <div>
      <h2>Trending</h2>
      <ul>
        {trending.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
