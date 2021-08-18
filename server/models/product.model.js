const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product Title Is Required"],
      minLength: [5, "Product Name must be at least 5 characters"],
    },
    price: {
      type: Number,
      required: [true, "Product Price Is Required"],
    },
    description: {
      type: String,
      required: [true, "Product Description Is Required"],
      minLength: [5, "Product Description Must Be At Least 5 Characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
