const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  price: Number,
  sellerId: String
});

module.exports = mongoose.model('Product', schema);
