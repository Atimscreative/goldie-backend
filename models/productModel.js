const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    // informations: {
    productName: {
      type: String,
      required: [true, "Please enter a product name"],
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enums: {
        values: ["milestone cakes", "kids cakes", "cupcakes", "wedding cakes"],
        message:
          "{VALUE} is not a valid category: milestone cakes, kids cakes, cupcakes, wedding cakes",
      },
    },
    subcategory: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: false,
      default: 0,
    },
    // },

    variants: {
      shapes: [String],
      sizes: [String],
      fillings: [String],
      toppings: [String],
    },
    pricing: {
      minPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      maxPrice: {
        type: Number,
        required: true,
        default: 0,
      },
    },

    images: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
