const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      trim: true,
      minlength: [4, "Project name must be at least 4"],
      maxlength: [25, "Project name must be at most 25"],
      required: [true, "Project name is required"],
    },
    clientName: {
      type: String,
      trim: true,
      minlength: [4, "Client name must be at least 4"],
      maxlength: [25, "Client name must be at most 25"],
      required: [true, "Client name is required"],
    },
    avatarUrl: {
      type: String,
      trim: true,
    },
    bookmark: {
      type: Boolean,
      default: false,
    },
    progressStatus: {
      type: String,
    },
    priorityStatus: {
      type: String,
    },
    projectType: {
      type: Array,
    },
    dueDate: {
      type: String,
      required: [true, "Due date is required"],
    },
    frontendUrl: {
      type: String,
      trim: true,
    },
    backendUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Projects", projectSchema);
