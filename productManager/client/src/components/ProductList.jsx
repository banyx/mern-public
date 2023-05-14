import React from 'react';

const ProductList = ({ products, onDelete }) => {
    return (
        <div>
            <h2>Product List</h2>
            <div>
                {products.map(product => (
                    <div className="card card-body" key={product._id}>
                        <h3>{product.title}</h3>
                        <h4>${product.price}</h4>
                        <button className="btn btn-danger gap-3" onClick={() => onDelete(product._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
