const mongoose = require("mongoose");

// 2.1 create the schema with all keys & validation
const AuthorsSchema = new mongoose.Schema({ //Table
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"]
    },

}, {timestamps: true}) // 2.2 enable the timestamp for createdAt & updatedAt


// 3. create a mongoose model based on the schema & export it
const Authors = mongoose.model('Authors', AuthorsSchema)

module.exports = Authors