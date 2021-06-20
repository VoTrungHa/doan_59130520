const { Router } = require("express");
const Question = require("../models/cauhoi.model");
const dateNow = require("../share/ganeralDate"); 
const moment=require('moment');
const Upload =require('../share/uploadFile')
exports.createQuestion = (req, res,next) => {
  const { question, answers,idCreateBy,createBy, level, subject, theme } = req.body;
  Question.findOne({ question }).exec((err, data) => {
    if (err || data) {
      return res.status(404).json({ message: "question duplicate" });
    }
    const ques = new Question();
    (ques.question = question),
      (ques.answers = answers), 
      (ques.level = level),
      (ques.subject = subject),
      (ques.createDate = moment().format()),
      (ques.status = true),
      (ques.theme = theme); 
      ques.save((err, data) => {
      if (err) console.log(err) //return res.status(401).json({message:err});
        // write history
      const text="Câu hỏi: "+question+", Mức độ: "+level+", Chủ đề: "+theme;
      const textforFile= Upload.CreateTextForHistory("Thêm câu hỏi",idCreateBy,createBy,text);
      Upload.writeHistoryGV(textforFile);
      return res.status(200).json({ data: data });
    });
  });
};

exports.UpdateById = (req, res) => {
  const {
    question,
    answers,
    idCreateBy,
    createBy,
    level,
    subject,
    theme,
  } = req.body;
  const Ques = {
    question,
    answers: answers,
    level, 
    // subject,
    theme,
    dateMotify: dateNow.createDateNow(),
  };
  console.log(Ques);
  Question.findByIdAndUpdate({ _id: req.params.id }, Ques, { new: true }).exec(
    (err, data) => {
      if (err || !data) return res.status(400).json({ message: err });
      // write history
      const text =
        "Câu hỏi: " + question + ", Mức độ: " + level + ", Chủ đề: " + theme;
      const textforFile = Upload.CreateTextForHistory(
        "Sửa câu hỏi",
        idCreateBy,
        createBy,
        text
      );
      Upload.writeHistoryGV(textforFile);
      return res.status(200).json({ data: data });
    }
  );
};

exports.DeleteById = (req, res) => {
  const {createBy,idCreateBy}=req.body.data;
  Question.findByIdAndDelete({ _id: req.params.id }).exec((err, data) => {
    if (err) return res.status(401).json({ message: err });
     const text =
       "Câu hỏi: " + data.question + ", Mức độ: " + data.level + ", Chủ đề: " + data.theme;
     const textforFile = Upload.CreateTextForHistory(
       "Xóa câu hỏi",
       idCreateBy,
       createBy,
       text
     );
     Upload.writeHistoryGV(textforFile);
    return res.status(200).json({ message: data });
  });
};
exports.getAll=(req,res)=>{ 
  return Question.find().exec((err, data) => {
    if(err) return res.status(400).json({message:err})
    return res.status(200).json({data});
  });
};

exports.SearchMulti = (req, res) => {
  const {
    page,
    limit,
    search,
    sort,
    reverse,
    theme,
    level,
    subject,
  } = req.query;
  var pages = 0; 
  if (+page != 1) {// nếu page=1 thi bắt đầu lấy từ phần tử 0
    pages = (page * 1 - 1) * +limit;
  } 
  const reve = reverse === "true" ? 1 : -1 || 1;
  console.log(req.query);
  Question.find({
    $and: [
               { theme: { $regex: theme } },
      // // { subject: { $regex: subject } },
      { question: { $regex: search } },
         { level: { $regex: level } },
    ],
  },{__v:0,answers:{_id:0}}) 
    .limit(+limit)
    .skip(pages)
    .sort([[sort, reve]])
    .then((data) => { 
      if(!data) return res.status(400).json({message:"empty"})
      return res.status(200).json({data});
    }).catch((err) => {
      return res.status(401).json({ message: err });
    });
};
