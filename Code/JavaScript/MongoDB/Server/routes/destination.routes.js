// 1. import the controller
const DestController = require('../controllers/destination.controller')
// 2. export a function that reads one argument (app)
module.exports = (app)=>{
    app.get("/api/testing", DestController.apiTest);
    app.get("/api/destinations", DestController.allDest);
    app.get("/api/destinations/:id", DestController.oneDest);
    app.post("/api/destinations", DestController.addDest);
    app.patch("/api/destinations/:id", DestController.updateDest);
    app.delete("/api/destinations/:id", DestController.deleteDest);
}
// 3. include all the routes with the corresponding logic from controller