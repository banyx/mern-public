import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProductDetails = ({ setProducts }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (!product) {
    return <div>Oops, nothing here...</div>;
  }

  return (
    <div className='card text-bg-dark offset-4 col-md-4 px-3 py-3'>
      <h2>Product Details</h2>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      <Link to={`/edit/${product._id}`}>Edit</Link>
    </div>
  );
};

export default ProductDetails;
