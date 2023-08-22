const Product = require('../models/product.model')

// 2. export all the functions with placeholder
module.exports.apiTest = (req, res) => {
    res.json({ message: "ok" })
}

// Example: 
module.exports.allProduct = (req, res) => {
    Product.find()// returns lists of objects
        .then(productList => res.json(productList))
        .catch((err) => {
            res.json(err)
        });
}

module.exports.oneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.json(oneProduct))
        .catch((err) => {
            res.json(err)
        });
}

module.exports.addProduct = (req, res) => {
    Product.create(req.body)
    .then(newProduct => res.json(newProduct))
    .catch((err) => {
        res.json(err)
    });
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id},//criteria,
        req.body,//info to be updated
        {new:true, runValidators:true}
        //new: specify the return response
        //runValidators: enable validation in update
        )
        .then(updatedProduct => res.json(updatedProduct))
        .catch((err) => {
            res.json(err)
        });
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(status => res.json(status))
        .catch((err) => {
            res.json(err)
        });
}