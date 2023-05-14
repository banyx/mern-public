import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            title,
            price,
            description,
        };

        axios.post('http://localhost:8000/api/products', newProduct)
            .then((res) => {
                console.log(res.data);
                fetchProducts();
                setTitle('');
                setPrice('');
                setDescription('');
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const handleDelete = (_id) => {
        axios.delete(`http://localhost:8000/api/products/${_id}`)
            .then((res) => {
                console.log(res.data);
                fetchProducts();
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className='offset-4 col-md-4'>
            <h1>Product Manager</h1>
            <form className="mb-3 my-3 py-3 px-3" onSubmit={handleSubmit}>
                <div className="mb-3 my-auto mx-auto d-flex gap-5">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input className='form-control'
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3 my-auto mx-auto d-flex gap-5">                    
                <label className="form-label" htmlFor="price">Price</label>
                    <input className='form-control'
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3 my-auto mx-auto d-flex gap-3">
                    <label className="form-label" htmlFor="description">Description</label>
                    <textarea className='form-control'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
            </form>
            <ProductList products={products} onDelete={handleDelete}/>
        </div>
    );
};

export default ProductForm;
