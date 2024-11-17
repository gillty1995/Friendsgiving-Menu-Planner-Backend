const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Starter", "Main Course", "Dessert", "Side Dish"],
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: function (url) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(url);
      },
      message: "Please enter a valid URL for the dish image.",
    },
  },
  ingredients: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Dish", dishSchema);
