const restaurantController = require("../controllers/restaurants.controller");
const verifyToken = require("../middlewares/verifyToken");

module.exports = (app) => {
  app.post("/api/restaurants", restaurantController.create);
  app.get("/api/restaurants", restaurantController.fetch);
  app.get("/api/restaurants/:id", verifyToken, restaurantController.fetchOne);
  app.put("/api/restaurants/:id", restaurantController.updateOne);
  app.delete("/api/restaurants/:id", restaurantController.delete);
};
