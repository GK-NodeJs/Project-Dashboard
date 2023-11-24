const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileHeaderSchema = new Schema({
  profileName: {
    type: String,
    trim: true,
    minlength: [4, "Profile name must be at least 4 characters"],
    maxlength: [25, "Profile name must be at most 25 characters"],
    required: [true, "Profile name is required"],
  },
  gitHubUsername: {
    type: String,
    trim: true,
    minlength: [4, "GitHub username must be at least 4 characters"],
    maxlength: [25, "GitHub username must be at most 25 characters"],
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
    minlength: [4, "Menu name must be at least 4 characters"],
    maxlength: [15, "Menu name must be at most 15 characters"],
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
    enum: ["projects", "social", "main"],
    default: "Main",
    required: [true, "Menu type is required"],
  },
  subMenus: [subMenuSchema],
});

const projectSchema = new Schema({
  name: {
    type: String,
    trim: true,
    minlength: [4, "Project name must be at least 4 characters"],
    maxlength: [25, "Project name must be at most 25 characters"],
    required: [true, "Project name is required"],
  },
  imageURL: {
    type: String,
    trim: true,
    minlength: [15, "Project image URL must be at least 15 characters"],
    required: [true, "Project image URL is required"],
  },
  usedTech: [
    {
      type: String,
      trim: true,
      minlength: [2, "Used technologies name must be at least 2 characters"],
      maxlength: [25, "Used technologies must be at most 25 characters"],
      required: [true, "Used technologies is required"],
    },
  ],
  description: [
    {
      type: String,
      trim: true,
      maxlength: [50, "Project description must be at most 50 characters"],
      required: [true, "Project description is required"],
    },
  ],
  link: {
    type: String,
    trim: true,
  },
});

const techSchema = new Schema({
  name: {
    type: String,
    trim: true,
    minlength: [2, "Technology name must be at least 2 characters"],
    maxlength: [25, "Technology name must be at most 25 characters"],
    required: [true, "Technology name is required"],
  },
  icon: {
    type: String,
    trim: true,
    required: [true, "Technology icon is required"],
  },
  secondaryTechName: {
    type: String,
    trim: true,
    minlength: [2, "Technology name must be at least 2 characters"],
    maxlength: [15, "Technology name must be at most 15 characters"],
  },
  secondaryTechIcon: {
    type: String,
    trim: true,
  },
  knowledgeLevel: {
    type: Number,
    min: [0, "Knowledge level must be at least 0%"],
    max: [100, "Knowledge level must be at most 100%"],
    required: [true, "Knowledge level is required"],
  },
});

const skillsSchema = new Schema({
  skillType: {
    type: String,
    trim: true,
    enum: ["frontend", "backend", "database", "dev-ops", "other"],
    default: "Other",
    required: [true, "Skill type is required"],
  },
  skills: [techSchema],
});

const portfolioSchema = new Schema(
  {
    portfolioHeader: profileHeaderSchema,
    portfolioMenus: [mainMenuSchema],
    portfolioProjects: [projectSchema],
    portfolioSkills: [skillsSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
