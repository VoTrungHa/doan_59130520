const Theme=require('../models/theme.model');


exports.create=(req,res)=>{
    const {name}=req.body;
    console.log(name)
    Theme.findOne({name}).exec((err,data)=>{
        if(err || data) return res.status(400).json({message:"duplicate"});
        const theme=new Theme({
            name
        })
        theme.save((err,data)=>{
            if(err) return res.status(404).json({message:err});
            return res.status(200).json({data})
        })
    })
}

exports.getAll=(req,res)=>{
    Theme.find().exec((err,data)=>{
        if(err) return res.status(400).json({message:err});
        return res.status(200).json({data});
    })
}