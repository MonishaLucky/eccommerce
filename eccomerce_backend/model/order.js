const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  product_id: {
    type: Number,
    required: true
  },
  product_name: {
    type: String,
    required: true
  },
  product_path: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  product_price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Order", orderSchema);