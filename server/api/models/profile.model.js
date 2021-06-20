//  exports.proFile={ 
//     id:String,
//     maTaiKhoan:String,
//     Ten:String,
//     Ho:String,
//     Email:String,
//     dienThoai:String,
//     userType:String,
//     gioiTinh:String,
//     idChucDanh:String,
// }
const mongoose =require("mongoose");

const proFile = new mongoose.Schema({
  idAccount: { type: String, default: "" },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  Email: { type: String, default: "" },
  Phone: { type: String, default: "" },
  birthDay: { type: String },
  avatar: { type: String, default: "" },
  userType: { type: String, default: "" },
  gender: { type: String },
  reseller: {
    maSSV: { type: String, default: "" },
    class: [
      {
        id: { type: String, default: "" },
        name: { type: String, default: "" },
      },
    ],
    position: { type: String, default: "" },
  },
}); 
module.exports=mongoose.model("proFile",proFile);
