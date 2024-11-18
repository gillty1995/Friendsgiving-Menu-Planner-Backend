const mongoose = require("mongoose");

const rsvpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const RSVP = mongoose.model("RSVP", rsvpSchema);

module.exports = RSVP;
