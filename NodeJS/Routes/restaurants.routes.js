const restaurantController = require("../controllers/restaurants.controller");

module.exports = (app) => {
  app.post("/api/restaurants", restaurantController.create);
  app.get("/api/restaurants", restaurantController.fetch);
  app.get("/api/restaurants/:id", restaurantController.fetchOne);
  app.put("/api/restaurants/:id", restaurantController.updateOne);
  app.delete("/api/restaurants/:id", restaurantController.delete);
};
