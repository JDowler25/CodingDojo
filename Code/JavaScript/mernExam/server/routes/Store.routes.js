// 1. import the controller
const StoreContoller = require('../controllers/Store.controller')
// 2. export a function that reads one argument (app)
module.exports = (app)=>{
    app.get("/api/testing", StoreContoller.apiTest);
    app.get("/api/stores", StoreContoller.allStores);
    app.get("/api/stores/:id", StoreContoller.oneStore);
    app.post("/api/stores", StoreContoller.addStore);
    app.patch("/api/stores/:id", StoreContoller.updateStore);
    app.delete("/api/stores/:id", StoreContoller.deleteStore);
}
// 3. include all the routes with the corresponding logic from controller