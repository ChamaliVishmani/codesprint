const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  category: String,
  description: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Video", videoSchema);
