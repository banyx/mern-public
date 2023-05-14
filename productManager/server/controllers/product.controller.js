const Product = require('../models/product.model');

module.exports = {
    createProduct: (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({product:newProduct}))
        .catch(err => res.json({ message: 'Something went wrong: createProduct', error: err }))
    },

    getAllProducts: (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: 'Something went wrong: getAllProducts', error: err }));
    },
    
    getOneProduct: (req, res) => {
    Product.findById(req.params.id)
        .then(oneProduct => res.json({ product: oneProduct }))
        .catch(err => res.json({ message: 'Something went wrong: getOneProduct', error: err }));
    },
    
    updateProduct: (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong: updateProduct', error: err }))
    },
    
    deleteProduct: (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(result => res.json({result: result }))
        .catch(err => res.json({ message: 'Something went wrong: deleteProduct', error: err }))
    }
}