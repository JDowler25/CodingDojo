// 1. import mongoose
const mongoose = require("mongoose");

// 2.1 create the schema with all keys & validation
const StoreFinderSchema = new mongoose.Schema({ //Table
    name: {
        type: String,
        required: [true, "Store name is required"],
        minlength: [3, "Store name must be at least 3 characters!"]
    },
    number: {
        type: Number,
        required: [true, "Rating is required"],
        min: [0, "Store number must be greater than 0"],
    },
    open: {
        type: Boolean,
    },

}, {timestamps: true}) // 2.2 enable the timestamp for createdAt & updatedAt


// 3. create a mongoose model based on the schema & export it
const Store = mongoose.model('Store', StoreFinderSchema)

module.exports = Store