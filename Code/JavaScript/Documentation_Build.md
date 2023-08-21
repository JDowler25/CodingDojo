## Development Steps
<span style="color: orange;">PREP:</span>
Project Init
-       mkdir xxxs and cd

        mkdir server folder and cd

-       npm init -y 
    -   package json creation

       npm install express mongoose cors dotenv 
    (NO MORE body-parser since express 4.16.)
    
    express.json() and express.urlencoded() middleware functions depricates body-parser




<span style="color: orange;">SERVER SIDE:</span>

mkdir(s) & touch(s):

- model 		-> xxx.model.js

- controller 	-> xxxs.controller.js

- routes 		-> xxxs.routes.js

- config 		-> mongoose.config.js

- server.js

- .env

- .gitignore

        npm i express mongoose cors dotenv

        nodemon server

<span style="color: orange;">CLIENT SIDE:</span>

    npx create-react-app client

- in addition to the usual create-react-app, we are specifying client for the front-half creation

mkdir(s) & touch(s):

    npm create-react-app client and cd

    npm i axios react-router-dom

- edit App.js

- edit index.js

- make(refactor) components

        npm start