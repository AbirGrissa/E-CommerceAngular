const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
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
  promotion!: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  roles: [
    {
      type: String,
    },
  ],
  versionKey: false,
});
module.exports = mongoose.model("Product", ProductSchema);