const AuthorController = require('../controllers/Authors.controller')
// 2. export a function that reads one argument (app)
module.exports = (app)=>{
    app.get("/api/testing", AuthorController.apiTest);
    app.get("/api/authors", AuthorController.allAuthors);
    app.get("/api/authors/:id", AuthorController.oneAuthor);
    app.post("/api/authors", AuthorController.addAuthor);
    app.patch("/api/authors/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
}
// 3. include all the routes with the corresponding logic from controllerx`