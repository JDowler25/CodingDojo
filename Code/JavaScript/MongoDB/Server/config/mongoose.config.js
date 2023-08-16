const mongoose = require('mongoose');
const uri = process.env.URI
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
