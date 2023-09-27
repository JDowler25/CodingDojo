// 1. import the model
const Store = require('../models/Store.model')

// 2. export all the functions with placeholder
module.exports.apiTest = (req, res) => {
    res.json({ message: "ok" })
}

// Example: 
module.exports.allStores = (req, res) => {
    Store.find()// returns lists of objects
        .then(storeList => res.json(storeList))
        .catch(err => res.status(400).json(err))

}

module.exports.oneStore = (req, res) => {
    Store.findOne({ _id: req.params.id })
        .then(oneStore => res.json(oneStore))
        .catch(err => res.status(400).json(err))

}

module.exports.addStore = (req, res) => {
    Store.create(req.body)
    .then(newStore => res.json(newStore))
    .catch(err => res.status(400).json(err))
}

module.exports.updateStore = (req, res) => {
    Store.findOneAndUpdate(
        {_id: req.params.id},//criteria,
        req.body,//info to be updated
        {new:true, runValidators:true}
        //new: specify the return response
        //runValidators: enable validation in update
        )
        .then(updatedStore => res.json(updatedStore))
        .catch(err => res.status(400).json(err))

}

module.exports.deleteStore = (req, res) => {
    Store.deleteOne({ _id: req.params.id })
        .then(status => res.json(status))
        .catch(err => res.status(400).json(err))

}