const express = require("express");
const { dbConnection } = require("../db");

const { defaultCallback } = require("../utils/dbHelper");

const router = express.Router();

router.get("/events", (req, res) => {
  dbConnection.execute(`SELECT * FROM events`, (err, result) => {
    defaultCallback(err, result, res);
  });
});

router.post("/events", (req, res) => {
  const { body } = req;

  dbConnection.execute(
    "INSERT INTO events (name, surname, email, phoneNo) VALUES ( ?, ?, ?, ?)",
    [body.name, body.surname, body.email, body.phoneNo],
    (err, result) => defaultCallback(err, result, res)
  );
});

router.delete("/events/:id", (req, res) => {
  const { id } = req.params;
  dbConnection.execute(
    "DELETE FROM events WHERE id = ?",
    [id],
    (err, result) => {
      defaultCallback(err, result, res);
    }
  );
});

module.exports = router;
