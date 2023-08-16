// 1. import mongoose
const mongoose = require("mongoose");

// 2.1 create the schema with all keys & validation
const DestinationSchema = new mongoose.Schema({ //Table
    location: {
        type: String,
        required: [true, "Location is required"],
        minlength: [3, "Location must be at least 3 characters"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating must be between 1 and 10"],
        max: [10, "Rating must be between 1 and 10"],
    },
    imageUrl: {
        type: String,
    },
    season:{
        type: String,
        required: [true, "Season is required"],
        
    }

}, {timestamps: true}) // 2.2 enable the timestamp for createdAt & updatedAt


// 3. create a mongoose model based on the schema & export it
const Destination = mongoose.model('Destination', DestinationSchema)

module.exports = Destination