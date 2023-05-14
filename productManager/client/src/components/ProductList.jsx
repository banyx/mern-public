import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = ({ products, setProducts }) => {
    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProducts((prevProducts) =>
                    prevProducts.filter((product) => product._id !== id)
                );
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <h1>Product List</h1>
            <div>
                {products.map((product) => (
                    <div className='card py-3 px-3 mx-3 my-3' key={product._id}>
                        <h3>{product.title}</h3>
                        <h4>${product.price}</h4>
                        <Link to={`/products/${product._id}`}>Details</Link>
                        <button className="btn btn-danger mx-3" onClick={() => handleDelete(product._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
