const fs = require("fs");
const path = "./api/public/uploads/";
var textract = require("textract");
var lineReader = require("line-reader");
const moment = require("moment");
const xml2js = require("xml2js");
const Question = require("../models/cauhoi.model");
const pth = require("path");

exports.CreateTextForHistory=(action,idcreateby,createby,data)=>{

const date= moment().format('L')
return "Thời gian: " +date+", hành động: "+action+", Mã người dùng: "+ idcreateby+", Họ tên: "+createby+", dữ liệu: "+data;
}
exports.writeHistorySV = (data) => {
  const filepath = "../public/history/sinhvien.txt"; 
  fs.appendFile(pth.join(__dirname, filepath), data + "\n\n", (err) => {
     console.log(err);
  });
};
exports.writeHistoryGV = (data) => {
  const filepath = "../public/history/giaovien.txt";
  fs.appendFile(pth.join(__dirname, filepath), data + "\n\n", (err) => {
    console.log(err);
  });
};

exports.UploadQuestion = (req, resp) => {
  const files = req.file;
  if (!files) {
    const error = new Error("Please choose files");
    return resp.status(400).json({ message: error });
  }
  let url = `${path}${files.filename}`;

  fs.readFile(url, { encoding: "utf-8" }, (err, res) => {
    if (err) {
      // return resp.status(404).json({ message: err });
    }
    const data = res.split(/\r\n/);
    console.log(data);
    fs.unlink(url, (err) => {
      // delete file sau khi read
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully deleted the file.");
      }
    });
    const Ques = {
      question: "",
      answers: [],
      level: "",
      theme: "",
      soLanSuDung: 0,
      soLanTraLoiDung: 0,
    };
    var isStruct = false;
    var flag = false; // khi nào cuối mảng thì mới đc response
    data.forEach((item, index) => {
      // duyệt qua arr[text]
      if (item.slice(0, 3) === "Câu") {
        isStruct = true;
        // cập nhâp new object
        Ques.question = "";
        Ques.answers = [];
        Ques.level = "";
        Ques.theme = "";
        Ques.question = item.slice(7);
        return;
      }
      if (item.slice(0, 6) === "Chủ đề") {
        Ques.theme = item.slice(8, item.length - 1);
        return;
      }
      // if (item.slice(0, 6) === "Mức độ") {
      //   Ques.level = item.slice(8, item.length - 1);
      //   return;
      // }
      if (item.slice(0, 6) === "Đáp án") {
        let ans = item.slice(7).split(",");
        Ques.answers.map((item, index) => {
          // thêm cio vào answer
          for (let i = 0; i <= ans.length - 1; i++) {
            if (parseInt(ans[i]) == index + 1) {
              item.bio = true;
              break;
            } else {
              item.bio = false;
            }
          }
        });

        if (index === data.length - 1) {
          flag = true;
        }
        createQuestion(Ques, resp, flag, isStruct);
        return resp.status(200).json({})
      } else {
        Ques.answers.push({ answer: item.slice(3) });
      }
    });
    if (!isStruct) {
      createQuestion(Ques, resp, flag, isStruct);
    }
  });
};

async function createQuestion(data, res, flag, istruct) {
  if (!istruct) {
    return res.status(406).json({ status: 406 });
  }
  const { question, answers, level, theme } = data;
  await Question.findOne({ question })
    .then((err, data) => {
      if (err || data) {
        return { status: 405 };
      }
      const ques = new Question();
      (ques.question = question),
        (ques.answers = answers),
        (ques.level = level),
        //   (ques.subject = subject),
        (ques.createDate = moment().format()),
        (ques.status = true),
        (ques.theme = theme);
      ques.save((err, data) => {
        if (err) return { message: err };
        else {
          return { status: 200 };
        }
      });
    })
    .then((re) => {
      if (flag) return res.status(200).json(re);
    })
    .catch((err) => {
      if (flag) return res.status(400).json(err);
    });
}

exports.uploadXml = (req, res) => {
  const files = req.file;
  if (!files) {
    const error = new Error("Please choose files");
    return res.status(400).json({ message: error });
  }
  let url = `${path}${files.filename}`;
  console.log(url)
  fs.readFile(url, { encoding: "utf-8" }, (err, data) => {
    // read file
    if (err) {
      return res.status(404).json({ message: "No found File" });
    }
    fs.unlink(url, (err) => {
      // delete file sau khi read
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully deleted the file.");
      }
    });
    var Ques = {
      // create new object<question>
      question: "",
      answers: [],
      level: "",
      theme: "",
      soLanSuDung: 0,
      soLanTraLoiDung: 0,
    };
    xml2js.parseString(data, (err, result) => {
      // transform xml to object
      if (err) {
        return res.status(400).json({ message: "transform data fail" });
      }
      try {
        const data = result.Questions.Question;
        data.map((item, index) => {
          console.log(item.question.toString());
          // get a jobject
          Ques.question = item.question.toString();
          // Ques.level = item.level.toString();
           Ques.level = '';
          Ques.theme = item.theme.toString();
          item.answers.map((ans, index) => {
            // get an answer into answer in Qusetion
            ans.answer.map((it, index) => {
              const an = {
                answer: it.name.toString(),
                bio: it.bio.toString() == "true",
              };
              Ques.answers.push(an);
            });
          });
          var flag = false; // use for ischeck object in array last
          if (index == data.length - 1) {
            flag = true;
          }
          createQuestionXml(Ques, res, flag);
          Ques = {
            question: "",
            answers: [],
            level: "",
            theme: "",
            soLanSuDung: 0,
            soLanTraLoiDung:0
          };
        });
      } catch (error) {
        return res.status(400).json({ message: "struct file fial" });
      }
    });
  });
};

function createQuestionXml(data, res, flag) {
  console.log(data.question)
  Question.findOne({ question: data.question })
    .then((res) => {
      if (res) {
        return { status: 405, message: "duplicate" };
      }
      const ques = new Question();
      (ques.question = data.question),
        (ques.answers = data.answers),
        (ques.level = ""),
        //   (ques.subject = subject),
        (ques.createDate = moment().format()),
        (ques.status = true),
        (ques.theme = data.theme);
      ques.save((err,data) => {
        if (err) return { status: 400, message: err };
        console.log(data);
        return { status: 200, message: "success", };
      });
    })
    .then((data) => {
      if (flag) {
        return res.status(200).json({ data: data });
      }
    })
    .catch((err) => {
      if (flag) {
        return res.status(400).json({ message: err });
      }
    });
}

// textract.fromFileWithPath(url, function (error, text) {
//   if (error) return res.status(400).json({ message: error });

//   console.log(text.split(/\r?\n/)[1]);
// });

exports.uploadImage = (req, res) => {
  const files = req.file;
  if (!files) {
    const error = new Error("Please choose files");
    return res.status(400).json({ message: error });
  }

  return res.status(200).json({ message: "success" });
};
