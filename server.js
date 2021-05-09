const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const bodyParser = require("body-parser");

dotenv.config({ path: "./config/config.env" });

const app = express();

// Importing Routes
const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);

// app.use(bodyParser.json());

// Route
app.get("/", (req, res) => {
  res.send("This is home");
});

// Connecting to DB using mongoose
const CONNECTION_STRING = process.env.CONNECTION_STRING;

mongoose.connect(
  CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

// Listening to app
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`);
});
