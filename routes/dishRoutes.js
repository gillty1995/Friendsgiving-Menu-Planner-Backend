const express = require("express");
const router = express.Router();
const {
  createDish,
  getAllDishes,
  deleteDish,
} = require("../controllers/dishController");

// Route to create a dish
router.post("/", createDish);

// Route to get all dishes
router.get("/", getAllDishes);

// Route to delete a dish by id
router.delete("/:id", deleteDish);

module.exports = router;
