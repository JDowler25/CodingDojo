// 1. import the model
const Jokes = require('../models/Jokes.model')

// 2. export all the functions with placeholder
module.exports.apiTest = (req, res) => {
    res.json({ message: "ok" })
}

// Example: 
module.exports.allJokes = (req, res) => {
    Jokes.find()// returns lists of objects
        .then(jokeList => res.json(jokeList))
        .catch((err) => {
            res.json(err)
        });
}

module.exports.oneJokes = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneJoke => res.json(oneJoke))
        .catch((err) => {
            res.json(err)
        });
}

module.exports.addJokes = (req, res) => {
    Jokes.create(req.body)
    .then(newJoke => res.json(newJoke))
    .catch((err) => {
        res.json(err)
    });
}

module.exports.updateJokes = (req, res) => {
    Jokes.findOneAndUpdate(
        {_id: req.params.id},//criteria,
        req.body,//info to be updated
        {new:true, runValidators:true}
        //new: specify the return response
        //runValidators: enable validation in update
        )
        .then(updatedJoke => res.json(updatedJoke))
        .catch((err) => {
            res.json(err)
        });
}

module.exports.deleteJokes = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(status => res.json(status))
        .catch((err) => {
            res.json(err)
        });
}