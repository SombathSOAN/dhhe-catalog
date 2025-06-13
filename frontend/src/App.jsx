import React from 'react';
import SearchBar from './components/SearchBar';
import ProductCatalog from './components/ProductCatalog';
import TrendingView from './components/TrendingView';
import AdminPanel from './components/AdminPanel';

export default function App() {
  return (
    <div>
      <h1>E-Catalog</h1>
      <SearchBar />
      <TrendingView />
      <ProductCatalog />
      <AdminPanel />
    </div>
  );
}
