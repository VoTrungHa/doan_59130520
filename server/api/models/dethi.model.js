// exports.dethi={
//     maDeThi:String,
//     maKyThi:String,
//     nguoiTao:String,
//     nguoiDuyet:String,
//     maMH:String,
//     matKhau:String,
//     trangThai:Boolean,
//     thoiGianBD:Date,
//     thoiGianKT:Date,
//     ghiChu:String,
//     NoiDung:String 
// }

 
const mongoose=require('mongoose');

const DeThi = new mongoose.Schema({
  id: { type: String },
  kyThi: { type: String, default: "" },
  createBy: { name: { type: String, default: "" }, id: { type: String } },
  Class: [{ name: { type: String } }],
  confirmationBy: { type: String, default: "" }, // người xác nhận
  //   subject: { type: String, default: "" },
  password: { type: String, default: "" },
  status: { type: String },
  timeStart: { type: String },
  timeEnd: { type: String },
  note: { type: String, default: "" },
  content: { type: String, default: "" },
  avatar: { type: String, default: "" },
  detailTest: [
    {
      question: { type: String, default: "" },
      answers: [{ answer: String, default: "", bio: Boolean }],
      status: { type: Boolean, default: true },
      theme: { type: String },
      level: { type: String, default: "Chưa xác định" },
      soLanSuDung: { type: Number, default: 0 },
      soLanTraLoiDung: { type: Number, default: 0 },
      createDate: { type: String },
      dateMotify: { type: String },
    },
  ],
  createDate: { type: String },
  dateMotify: { type: String },
});

module.exports=mongoose.model("DeThi",DeThi);