// exports.CauHoi={
//     maCauHoi:String,
//     cauHoi:String,
//     dapAn:new Array(String),
//     dapAnDung:new Array(String),
//     trangThai:Boolean,
//     maTaiKhoan:String,
//     maChuDe:String,
//     ngayTao:Date,
//     doKho:String,
//     maMonHoc:String
// }

const mongoose = require("mongoose");

const Question = new mongoose.Schema({
  question: { type: String, default: "" },
  answers: [{ answer: String, default: "", bio: Boolean, default: false }],
  status: { type: Boolean },
  theme: { type: String },
  level: { type: String, default: "" },
  soLanSuDung: { type: Number, default: 0 },
  soLanTraLoiDung: { type: Number, default: 0 },
  createDate: { type: String, default: Date.now },
  dateMotify: { type: String },
});
module.exports = mongoose.model("Question", Question);
