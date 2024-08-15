import React from 'react';
import ProductList from './components/ProductList.jsx';
import { Products } from './data/product.js';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [products, setProducts] = useState(Products);

  return (
    <>
      <h1 className='app-title'>Belanja Mobil</h1>
      <ProductList
        products={products}
      />
    </>
  );
};

export default App;