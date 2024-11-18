const express = require("express");
const dishController = require("../controllers/dishController");
const rsvpController = require("../controllers/rsvpController");

const router = express.Router();

// Dish Routes
router.post("/dishes", dishController.createDish);
router.get("/dishes", dishController.getAllDishes);
router.delete("/dishes/:id", dishController.deleteDish);
router.put("/dishes/:id", dishController.updateDish);

// RSVP Routes
router.get("/rsvps", rsvpController.getAllRSVPs);
router.post("/rsvps", rsvpController.createRSVP);
router.delete("/rsvps/:id", rsvpController.deleteRSVP);
router.put("/rsvps/:id", rsvpController.updateRSVP);

module.exports = router;
