// 1. import the model
const Destination = require('../models/destination.model')

// 2. export all the functions with placeholder
module.exports.apiTest = (req, res) => {
    res.json({ message: "ok" })
}

// Example: 
module.exports.allDest = (req, res) => {
    Destination.find()// returns lists of objects
        .then(destList => res.json(destList))
        .catch((err) => {
            res.json(err)
        });
}

module.exports.oneDest = (req, res) => {
    Destination.findOne({ _id: req.params.id })
        .then(oneDest => res.json(oneDest))
        .catch((err) => {
            res.json(err)
        });
}

module.exports.addDest = (req, res) => {
    Destination.create(req.body)
    .then(newDest => res.json(newDest))
    .catch((err) => {
        res.json(err)
    });
}

module.exports.updateDest = (req, res) => {
    Destination.findOneAndUpdate(
        {_id: req.params.id},//criteria,
        req.body,//info to be updated
        {new:true, runValidators:true}
        //new: specify the return response
        //runValidators: enable validation in update
        )
        .then(updatedDest => res.json(updatedDest))
        .catch((err) => {
            res.json(err)
        });
}

module.exports.deleteDest = (req, res) => {
    Destination.deleteOne({ _id: req.params.id })
        .then(status => res.json(status))
        .catch((err) => {
            res.json(err)
        });
}

