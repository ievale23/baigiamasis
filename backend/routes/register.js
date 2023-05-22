const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallback } = require("../utils/dbHelper");

const router = express.Router();

router.get("/register", (req, res) => {
  dbConnection.execute(`SELECT * FROM users`, (err, result) => {
    defaultCallback(err, result, res);
  });
});

router.post("/register", (req, res) => {
  const { body } = req;
  dbConnection.execute(
    "INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)",
    [body.name, body.surname, body.email, body.password],
    (err, result) => defaultCallback(err, result, res)
  );
});

module.exports = router;
