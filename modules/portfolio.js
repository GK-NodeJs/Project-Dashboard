const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema(
  {
    portfolioHeader: {
      profileName: {
        type: String,
        trim: true,
        minlength: [4, "Profile name must be at least 4"],
        maxlength: [25, "Profile name must be at most 25"],
        required: [true, "Profile name is required"],
      },
      githubUsername: {
        type: String,
        trim: true,
        minlength: [4, "GitHub username must be at least 4"],
        maxlength: [25, "GitHub username must be at most 25"],
        required: [true, "GitHub username is required"],
      },
      profileImageURL: {
        type: String,
        trim: true,
        required: [true, "Profile image URL is required"],
      },
      backgroundImageURL: {
        type: String,
        trim: true,
        required: [true, "Background image URL is required"],
      },
      resumeFileURL: {
        type: String,
        trim: true,
        required: [true, "Resume file URL is required"],
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
