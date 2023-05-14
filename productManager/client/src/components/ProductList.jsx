import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, onDelete }) => {
    return (
        <div>
            <h2>Product List</h2>
            <div>
                {products.map((product) => (
                    <div className="card card-body" key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            <h3>{product.title}</h3>
                        </Link>
                        <h4>${product.price}</h4>
                        <button
                            className="btn btn-danger gap-3"
                            onClick={() => onDelete(product._id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
