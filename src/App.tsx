import React from 'react';
import './App.css';
import ProductsList from './features/products/ProductsList';
import ProductCreate from './features/products/ProductCreate';

function App():JSX.Element {
  return (
    <div className="App">
   <ProductsList />
   <ProductCreate />
    </div>
  );
}

export default App;
