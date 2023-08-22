const ProductController = require('../controllers/product.controller')
// 2. export a function that reads one argument (app)
module.exports = (app)=>{
    app.get("/api/testing", ProductController.apiTest);
    app.get("/api/products", ProductController.allProduct);
    app.get("/api/products/:id", ProductController.oneProduct);
    app.post("/api/products", ProductController.addProduct);
    app.patch("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
}
// 3. include all the routes with the corresponding logic from controllerx`