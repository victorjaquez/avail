const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

require("./config/passport.js")(passport);

const coinsController = require("./controllers/coins.js");
app.use("/coins", coinsController);

const usersController = require("./controllers/users.js");
app.use("/user", usersController);

const profileController = require("./controllers/profile.js");
app.use("/profile", profileController);

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/avail";
mongoose.connect(mongoURI);

mongoose.connection.once("open", () => {
  console.log("connected to mongo . . .");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listening on port 5000. . .");
});
