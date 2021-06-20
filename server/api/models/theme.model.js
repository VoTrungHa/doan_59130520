const mongoose = require("mongoose");

const Theme = new mongoose.Schema({
  name: { type: String },
});
module.exports = mongoose.model("Theme", Theme);
