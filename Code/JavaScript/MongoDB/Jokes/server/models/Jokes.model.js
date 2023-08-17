// 1. import mongoose
const mongoose = require("mongoose");

// 2.1 create the schema with all keys & validation
const JokesSchema = new mongoose.Schema({ //Table
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [3, "Setup must be at least 3 characters"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [1, "Punchline must be at least 3 characters"],
    },
}, {timestamps: true}) // 2.2 enable the timestamp for createdAt & updatedAt


// 3. create a mongoose model based on the schema & export it
const Jokes = mongoose.model('Jokes', JokesSchema)

module.exports = Jokes