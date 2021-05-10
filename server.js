const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(bodyParser.json());

// Importing Routes
const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);

// Route
app.get("/", (req, res) => {
  res.send("this is home");
});

// Connecting to DB using mongoose
const CONNECTION_STRING = process.env.CONNECTION_STRING;

mongoose.connect(
  CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Successfully connected to DB");
  }
);

// Listening to app
const PORT = 6000;

app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`);
});
