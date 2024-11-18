const express = require("express");
const router = express.Router();
const {
  createDish,
  getAllDishes,
  deleteDish,
  updateDish,
} = require("../controllers/dishController");

// Route to create dish
router.post("/", createDish);

// Route to get all dishes
router.get("/", getAllDishes);

// Route to delete dish by id
router.delete("/:id", deleteDish);

// Route to update dish by id
router.put("/:id", updateDish);

module.exports = router;
