require("dotenv").config();

const express = require("express");
const cors = require("cors");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/authentication");
const eventsRouter = require("./routes/events");

const app = express();

app.use(cors());
app.use(express.json());
app.use(registerRouter);
app.use(loginRouter);
app.use(eventsRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
