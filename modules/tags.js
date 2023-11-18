const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Tag name is required"],
    minlength: [2, "Tag name must be at least 2 characters"],
    maxLength: [10, "Tag name must be at most 10 characters"],
  },
});

module.exports = mongoose.model("Tags", tagSchema);
