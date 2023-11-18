const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "List name is required"],
    minlength: [2, "List name must be at least 2 characters"],
    maxLength: [10, "List name must be at most 10 characters"],
  },
  color: {
    type: String,
    trim: true,
    required: [true, "Color is required"],
    minlength: [2, "Color must be at least 2 characters"],
    maxLength: [7, "Color must be at most 7 characters"],
  },
});

module.exports = mongoose.model("Lists", listSchema);
