const mongoose = require("mongoose");

const TaiLieu = new mongoose.Schema({
  chuong: { type: String },
  avatar:{type: String},
  DsNoiDung: [
    {
      tieuDe: { type: String, default: "" },
      noidung: [{ text: String, bio:String}],
    },
  ],
  detailTest: [
    {
      question: { type: String },
      answers: [{ answer: String, bio: Boolean }],
      status: { type: Boolean, default: true },
      createDate: { type: String },
      dateMotify: { type: String },
    },
  ],
  nguoiSoan: { name: String },
});
module.exports = mongoose.model("TaiLieu", TaiLieu);
