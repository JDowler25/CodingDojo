const mongoose = require("mongoose");

// 2.1 create the schema with all keys & validation
const ProductSchema = new mongoose.Schema({ //Table
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Rating is required"],
        min: [0, "Rating must be between 0 and 10"],
        max: [10, "Rating must be between 1 and 10"],
    },
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
    },

}, {timestamps: true}) // 2.2 enable the timestamp for createdAt & updatedAt


// 3. create a mongoose model based on the schema & export it
const Product = mongoose.model('Product', ProductSchema)

module.exports = Product