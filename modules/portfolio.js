const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileHeaderSchema = new Schema({
  profileName: {
    type: String,
    trim: true,
    minlength: [4, "Profile name must be at least 4"],
    maxlength: [25, "Profile name must be at most 25"],
    required: [true, "Profile name is required"],
  },
  gitHubUsername: {
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
});

const subMenuSchema = new Schema({
  name: {
    type: String,
    trim: true,
    minlength: [4, "Menu name must be at least 4"],
    maxlength: [15, "Menu name must be at most 15"],
    required: [true, "Menu name is required"],
  },
  link: {
    type: String,
    trim: true,
    required: [true, "Menu URL is required"],
  },
  iconName: {
    type: String,
    trim: true,
    required: [true, "Icon name is required"],
  },
});

const mainMenuSchema = new Schema({
  menuType: {
    type: String,
    trim: true,
    enum: ["Projects", "Social", "Main"],
    default: "Main",
    required: [true, "Menu type is required"],
  },
  subMenus: [subMenuSchema],
});

const portfolioSchema = new Schema(
  {
    portfolioHeader: profileHeaderSchema,
    portfolioMenus: [mainMenuSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
