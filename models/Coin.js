const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

const Coin = mongoose.model("Coin", coinSchema);

module.exports = Coin;
