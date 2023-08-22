const Authors = require('../models/Authors.model')

// 2. export all the functions with placeholder
module.exports.apiTest = (req, res) => {
    res.json({ message: "ok" })
}

// Example: 
module.exports.allAuthors = (req, res) => {
    Authors.find()// returns lists of objects
        .then(authorList => res.json(authorList))
        .catch(err => res.status(400).json(err))
}

module.exports.oneAuthor = (req, res) => {
    Authors.findOne({ _id: req.params.id })
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.addAuthor = (req, res) => {
    Authors.create(req.body)
    .then(newAuthor => res.json(newAuthor))
    .catch(err =>{
        console.log(err)
        res.status(400).json(err)
    }
    )
}

module.exports.updateAuthor = (req, res) => {
    Authors.findOneAndUpdate(
        {_id: req.params.id},//criteria,
        req.body,//info to be updated
        {new:true, runValidators:true}
        //new: specify the return res
        //runValidators: enable validation in update
        )
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Authors.deleteOne({ _id: req.params.id })
        .then(status => res.json(status))
        .catch(err => res.status(400).json(err))
}