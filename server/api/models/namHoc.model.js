const mongoose = require("mongoose");

const namHoc = new mongoose.Schema({
  name: { type: String },
});
module.exports = mongoose.model("namHoc", namHoc);
