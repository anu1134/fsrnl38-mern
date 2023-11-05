const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: String,
  avgRating: String,
  cuisines: Array,
  cloudinaryImageId: String,
  costForTwo: String,
});

const restaurantModel = mongoose.model("restaurants", restaurantSchema);
module.exports = restaurantModel;
