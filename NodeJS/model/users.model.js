const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const usersModel = mongoose.model("users", usersSchema);
module.exports = usersModel;
