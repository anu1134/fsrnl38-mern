const usersModel = require("../model/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

exports.login = (req, res) => {
  const { email, password } = req.body;

  usersModel
    .findOne({ email })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "User is not registered" });
      }

      let isValidPassword = bcrypt.compareSync(password, data.password);

      if (!isValidPassword) {
        return res
          .status(401)
          .send("Invalid Password. Please enter correct password");
      }

      let accessToken = jwt.sign({ id: data._id }, "secretKey", {
        expiresIn: "1h",
      });

      res.send({
        user: {
          fullName: data.fullName,
          email: data.email,
        },
        token: accessToken,
      });
    })
    .catch((err) => res.status(500).send("server not available"));
};
