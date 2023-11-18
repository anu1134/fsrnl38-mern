const restaurantModel = require("../model/restaurants.model");

exports.create = (req, res) => {
  console.log("request body", req.body);
  const {
    name,
    avgRating,
    cloudinaryImageID,
    cuisines,
    costForTwo,
    menuItems,
  } = req.body;

  const newRestaurant = new restaurantModel({
    name,
    avgRating,
    cloudinaryImageID,
    cuisines,
    costForTwo,
    menuItems,
  });

  newRestaurant
    .save()
    .then((data) => {
      if (!data) {
        res.status(400).send("something went wrong");
      }

      res.send(data);
    })
    .catch((err) => res.status(500).json({ message: "server not available" }));
};

exports.fetch = (req, res) => {
  restaurantModel
    .find()
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }

      res.send(data);
    })
    .catch((err) => res.status(500).json({ message: "Server not available" }));
};

exports.fetchOne = (req, res) => {
  const _id = req.params.id;

  restaurantModel
    .find({ _id: _id })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }

      res.send(data);
    })
    .catch((err) => res.status(500).json({ message: "Server not available" }));
};

exports.updateOne = (req, res) => {
  const _id = req.params.id;

  restaurantModel
    .findByIdAndUpdate(_id, { avgRating: "4.0" })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }

      res.send(data);
    })
    .catch((err) => res.status(500).json({ message: "Server not available" }));
};
exports.delete = (req, res) => {
  const _id = req.params.id;

  restaurantModel
    .findByIdAndDelete(_id)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Restaurant not found" });
      }

      res.send(data);
    })
    .catch((err) => res.status(500).json({ message: "Server not available" }));
};
