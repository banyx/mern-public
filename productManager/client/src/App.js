import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <Router>
      <div className="container text-center">
        <Routes>
          <Route path="/" element={<ProductForm />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
