const RSVP = require("../models/rsvp");

// Get all RSVPs
const getAllRSVPs = async (req, res) => {
  try {
    const rsvps = await RSVP.find({});
    res.status(200).json(rsvps);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch RSVPs", error: err.message });
  }
};

// Create new RSVP
const createRSVP = async (req, res) => {
  try {
    const { name } = req.body;
    const newRSVP = await RSVP.create({ name });
    res.status(201).json(newRSVP);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create RSVP", error: err.message });
  }
};

// Delete an RSVP
const deleteRSVP = async (req, res) => {
  try {
    const { id } = req.params;
    await RSVP.findByIdAndDelete(id);
    res.status(200).json({ message: "RSVP successfully deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete RSVP", error: err.message });
  }
};

// Update an RSVP
const updateRSVP = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedRSVP = await RSVP.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).json(updatedRSVP);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update RSVP", error: err.message });
  }
};

module.exports = {
  getAllRSVPs,
  createRSVP,
  deleteRSVP,
  updateRSVP,
};
