const express = require("express");
const {
  getAllRSVPs,
  createRSVP,
  deleteRSVP,
  updateRSVP,
} = require("../controllers/rsvpController");

const router = express.Router();

// Route to get all RSVPs
router.get("/", getAllRSVPs);

// Route to create new RSVP
router.post("/", createRSVP);

// Route to delete RSVP
router.delete("/:id", deleteRSVP);

// Route to update RSVP
router.put("/:id", updateRSVP);

module.exports = router;
