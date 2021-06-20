const NamHoc=require('../models/namHoc.model');

exports.create=(req,res)=>{
   const {namhoc,hocky}=req.body.data;
   
   var template='Năm học _0_ - học kỳ _1_';
   var name= template.replace("_0_",namhoc).replace("_1_",hocky);  
    NamHoc.findOne({ name }).exec((err, data) => {
      if (err || data) {
        return res.status(400).json({ message: "duplicate" });
      }
      const kythi = new NamHoc({
        name,
      });
      kythi.save((err, data) => {
        if (err) return res.status(400).json({ message: err });
        return res.status(200).json({ message: "success" });
      });
    });
}

exports.getAll=(req,res)=>{
    NamHoc.find().exec((err,data)=>{
        if(err)return res.status(400).json({message:err});
        return res.status(200).json({data});
    })
}