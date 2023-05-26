const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { dbConnection } = require("../db");
const { defaultCallback } = require("../utils/dbHelper");
const { verifyToken } = require("../utils/authenticationHelper");

const router = express.Router();

router.post("/register", (req, res) => {
  const { body } = req;

  const hashedPassword = bcrypt.hashSync(body.password, 12);
  console.log(hashedPassword);

  dbConnection.execute(
    "INSERT INTO users (email, name, surname, password) VALUES (?, ?, ?, ?)",
    [body.email, body.name, body.surname, hashedPassword],
    (err, result) => defaultCallback(err, result, res)
  );
});

router.post("/login", (req, res) => {
  const { body } = req;
  console.log("request", req.body);
  const { email, password } = body;
  console.log("email", email);
  console.log("password", password);
  const incorrectCredentialsResponse = () =>
    res.json({
      message: "Incorrect email or password",
    });

  if (!email || !password) {
    incorrectCredentialsResponse();
    // console.log(email, password);
    return;
  }

  dbConnection.execute(
    "SELECT * FROM users WHERE users.email=?",
    [email],
    (err, result) => {
      if (result.length === 0) {
        incorrectCredentialsResponse();
      } else {
        const user = result[0];
        console.log("user", user);
        console.log("password", password);
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);

        if (isPasswordCorrect) {
          const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET
          );
          res.json({
            message: "Successfully loggen in!",
            token,
          });
        } else {
          incorrectCredentialsResponse();
        }
      }
    }
  );
});

router.get("/token/verify", verifyToken, (req, res) => {
  res.json(res.locals.user);
});

module.exports = router;
