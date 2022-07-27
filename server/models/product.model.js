const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productCode:{
    type: String,
    required: true,
  },
  productname: {
    type: String,
    required: true,
  },
  prix: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  promotion: { type: String, required: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Product", ProductSchema);
