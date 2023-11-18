const usersModel = require("../model/users.model");
const bcrypt = require("bcrypt");

exports.register = (req, res) => {
  const { fullName, email, password } = req.body;

  const newUser = new usersModel({
    fullName,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  usersModel
    .findOne({ email })
    .then((data) => {
      if (data) {
        return res.status(400).json({ message: "User already registered" });
      } else {
        newUser.save().then((data) => {
          return res
            .status(200)
            .json({ message: "User registered successfully" });
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({ message: "server not available" });
    });
};
