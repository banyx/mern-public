import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const fetchProductDetails = useCallback(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data.product);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    fetchProductDetails();
  }, [fetchProductDetails]);

  if (!product) {
    return <div>Oops, nothing here...</div>;
  }

  return (
    <div className='card text-bg-dark col-md-4 offset-4'>
      <h2>Product Details</h2>
      <p><span className=''>Title:</span> {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
