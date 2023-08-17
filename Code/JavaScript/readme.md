# First steps to setting up folder structure
1. mkdir mernExam
2. cd mernExam
3. mkdir server
4. cd server
5. npm init -y
6. npm install express mongoose dotenv cors
7. touch server.js .env .gitignore
8. mkdir configs controllers models routes
9. cd ..
10. npx create-react-app client

##### While waiting on create, fill out general files
```javascript
//Paste in server.js
const express = require('express');
const cors = require('cors') // This is new
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require("./configs/mongoose.config")
app.use(cors()) // This is new
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./routes/### Name of routes file#####.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );
```
paste in .gitignore
```txt
/node_modules
.env
```
paste in .env
```
PORT=8000
URI=mongodb+srv://GBann1:Qa2z2xbGDzwx8WIo@my_db.0rrevlf.mongodb.net/?retryWrites=true&w=majority
```
#### Once create-react-app is complete, finish installing dependencies
11. cd client
12. npm install axios react-router-dom