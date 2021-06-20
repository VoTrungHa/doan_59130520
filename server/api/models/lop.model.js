const mongoose=require('mongoose');

const Lop=new mongoose.Schema({
    name:{type:String},
}) 
module.exports = mongoose.model("Lop", Lop);

