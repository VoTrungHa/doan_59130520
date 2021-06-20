// exports.bailam={
//     maBailam:String,
//     maTaiKhoan:String,
//     maDeThi:String,
//     maKyThi:String,
//     tongDiem:Number,
//     soCauDung:Number,
//     tiLeDung:Number,
//     thoiGianLam:Number,
//     ngayThi:Date,
//     Trangthai:Boolean,
//     MaLop:String
// }
const mongoose = require("mongoose");

const GocBaiLam = new mongoose.Schema({
  performer: { type: String },
  Class: { type: String, default: "" },
  idDeThi: { type: String, default: "" },
  kyThi: { type: String, default: "" },
  timeStart: { type: String },
  timeEnd: { type: String },
  maDeThi: { type: String, default: "" },
  sumPoint: { type: Number, default: 0.0 },
  truNumberQuestion: { type: Number, default: 0 },
  percent: { type: Number, default: 0 }, //%
  time: { type: String, default: "" }, // thời gian làm trong bao lâu
  idPerformer: { type: String, default: "" }, // id người làm
  dateTest: { type: String }, // ngày làm thời gian bắt đầu thi from dethi
  status: { type: Boolean, default: false },
  content: { type: String, default: "" },
  avatar: { type: String, default: "" },
  createBy: { type: String, default: "" },
  nameCreateBy: { type: String, default: "" },
  detailTest: [
    {
      question: { type: String, default: "" },
      answers: [{ answer: String, default: "", bio: Boolean }],
      status: { type: Boolean, default: true },
      theme: { type: String },
      level: { type: String },
      result: { type: Boolean, default: false },
      answerUser: [{ answer: { type: String } }],
      soLanSuDung: { type: Number, default: 0 },
      soLanTraLoiDung: { type: Number, default: 0 },
      createDate: { type: Date },
      dateMotify: { type: Date },
    },
  ],
});

module.exports = mongoose.model("GocBaiLam", GocBaiLam);
