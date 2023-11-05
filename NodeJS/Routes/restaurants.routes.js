const restaurantController = require("../controllers/restaurants.controller");

module.exports = (app) => {
  app.post("/api/restaurants", restaurantController.create);
};
