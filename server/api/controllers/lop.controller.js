const Lop =require('../models/lop.model');

exports.Create=(req,res)=>{
    console.log(res.body)
    const {name}=req.body;
    Lop.findOne({name}).exec((err,data)=>{
        if(data || err){return res.status(400).json({message:"duplicate"})}
        const lop=new Lop({
            name
        });
        lop.save((err,data)=>{
            if(err){return res.status(400).json({message:err})}
            return res.status(200).json({message:"success"})
        })
    })
}
exports.getAll=(req,res)=>{
    Lop.find().exec((err,data)=>{
        if(err) {return res.status(400).json({message:err})};
        return res.status(200).json({data})
    })
}