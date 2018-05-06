const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  name: String,
  amount: Number
});

const Coin = mongoose.model('Coin', coinSchema);

module.exports = Coin;
