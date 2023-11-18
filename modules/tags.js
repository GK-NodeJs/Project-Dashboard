const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Type is required"],
    minlength: [2, "Type must be at least 2 characters"],
    maxLength: [10, "Type must be at most 10 characters"],
  },
});

module.exports = mongoose.model("Tags", tagsSchema);
