const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: String,
  avgRating: String,
  cuisines: Array,
  cloudinaryImageID: String,
  costForTwo: String,
  menuItems: Array,
});

const restaurantModel = mongoose.model("restaurants", restaurantSchema);
module.exports = restaurantModel;
