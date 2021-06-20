// exports.Account={
//     maTaiKhoan:"fdsa",
//     tenDangNhap:String,
//     matKhau:String,
//     trangThai:Boolean,
//     Role:String,
//     functions:new Array(String),
//     ngayTao:Date,
// }

const mongoose =require("mongoose");

const Account = new mongoose.Schema({
  login: { type: String },
  password: { type: String },
  actived: { type: Boolean, default: true },
  authorities: { type: String, default: "SV" },
  functions: [{ type: String, default: "" }],
  // idInfo: { type: String, default: "" },
  infor: {
    id: { type: String, default: "" }, // MAX SINH VIEEN/ GIAO VIÊN
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    avatar: { type: String, default: "" },
    birthDay: { type: String },
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    gender: { type: String },
    nganh: { type: String },
    diachi: { type: String },
    Class: [
      {
        name: { type: String, default: "" },
      },
    ],
  },
  resetPasswordlink: {
    data: String,
    default: "",
  },
  createdDate: { type: String, default: "" },
}); 
module.exports=mongoose.model("Account",Account);

