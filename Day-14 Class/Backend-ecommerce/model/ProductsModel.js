const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    imageSrc: { type: String, required: true },
    categories: { type: String, required: true },
    ratings: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("productDetails", ProductSchema);
