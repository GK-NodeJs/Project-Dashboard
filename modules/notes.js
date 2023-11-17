const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters"],
      maxLength: [25, "Title must be at most 25 characters"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Description is required"],
      minlength: [3, "Description must be at least 3 characters"],
      maxLength: [100, "Description must be at most 100 characters"],
    },
    pinned: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notes", portfolioSchema);
