import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const [navigateToHome, setNavigateToHome] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                const product = res.data.product;
                setTitle(product.title);
                setPrice(product.price);
                setDescription(product.description);
            })
            .catch((err) => {
                setError('Failed to fetch product details.');
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedProduct = {
            title,
            price,
            description,
        };

        axios
            .patch(`http://localhost:8000/api/products/${id}`, updatedProduct)
            .then((res) => {
                console.log(res.data);
                setNavigateToHome(true);
            })
            .catch((err) => {
                setError('Failed to update product.');
            });
    };

    if (navigateToHome) {
        navigate('/');
    }

    return (
        <div className='offset-4 col-md-4 card text-bg-success'>
            <h2>Edit Product</h2>
            {error && <p>{error}</p>}
            <form className="mb-3 my-3 py-3 px-3" onSubmit={handleSubmit}>
                <div className="mb-3 my-auto mx-auto d-flex gap-5">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input className='form-control'
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3 my-auto mx-auto d-flex gap-5">
                    <label className="form-label" htmlFor="price">Price</label>
                    <input className='form-control'
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3 my-auto mx-auto d-flex gap-3">
                    <label className="form-label" htmlFor="description">Description</label>
                    <textarea className='form-control'
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button className="btn btn-warning" type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditProduct;


