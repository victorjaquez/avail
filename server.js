const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

app.use(express.json());
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

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/avail";
// mongoose.connect(mongoURI);

// mongoose.connection.once("open", () => {
//   console.log("connected to mongo . . .");
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
