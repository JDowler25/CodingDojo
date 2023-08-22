const ProductController = require('../controllers/product.controller')
// 2. export a function that reads one argument (app)
module.exports = (app)=>{
    app.get("/api/testing", ProductController.apiTest);
    app.get("/api/destinations", ProductController.allProduct);
    app.get("/api/destinations/:id", ProductController.oneProduct);
    app.post("/api/destinations", ProductController.addProduct);
    app.patch("/api/destinations/:id", ProductController.updateProduct);
    app.delete("/api/destinations/:id", ProductController.deleteProduct);
}
// 3. include all the routes with the corresponding logic from controller