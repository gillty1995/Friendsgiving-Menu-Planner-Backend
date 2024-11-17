const Dish = require("../models/dish");

// Create a new dish
const createDish = async (req, res) => {
  try {
    const { name, category, imageUrl, ingredients } = req.body;

    const newDish = new Dish({
      name,
      category,
      imageUrl,
      ingredients,
    });

    await newDish.save();

    res.status(201).json({
      message: "Dish created successfully",
      dish: newDish,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating dish",
      error: error.message,
    });
  }
};

// Get all dishes
const getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching dishes",
      error: error.message,
    });
  }
};

// Delete a dish by ID
const deleteDish = async (req, res) => {
  try {
    const dishId = req.params.id;

    const deletedDish = await Dish.findByIdAndDelete(dishId);

    if (!deletedDish) {
      return res.status(404).json({ message: "Dish not found" });
    }

    res
      .status(200)
      .json({ message: "Dish deleted successfully", dish: deletedDish });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error deleting dish",
      error: error.message,
    });
  }
};

module.exports = {
  createDish,
  getAllDishes,
  deleteDish,
};
