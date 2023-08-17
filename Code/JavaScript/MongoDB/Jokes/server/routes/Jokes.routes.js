// 1. import the controller
const JokesController = require('../controllers/Jokes.controller')
// 2. export a function that reads one argument (app)
module.exports = (app)=>{
    app.get("/api/testing", JokesController.apiTest);
    app.get("/api/jokes", JokesController.allJokes);//Returns a list of all jokes 
    app.get("/api/jokes/:id", JokesController.oneJokes);//Returns one joke with a matching :id
    app.post("/api/jokes", JokesController.addJokes);//Adds a new joke to the database 
    app.patch("/api/jokes/:id", JokesController.updateJokes);//Partially updates an existing joke with a matching :id
    app.delete("/api/jokes/:id", JokesController.deleteJokes);//Removes a joke with a matching :id
}
// 3. include all the routes with the corresponding logic from controller