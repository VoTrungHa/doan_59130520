const CDate = require("../share/ganeralDate");
const BaiLam = require("../models/bailam.model");
const GocBaiLam = require("../models/gocbailam.model");
const Question = require("../models/cauhoi.model");
const moment = require("moment");
const xlsx = require("xlsx");
const path = require("path");
const Upload = require("../share/uploadFile");
exports.Create = (req, res) => {
  const {
    performer,
    Class,
    timeStart,
    role,
    timeEnd,
    idDeThi,
    createBy,
    kyThi,
    maDeThi,
    content,
    avatar,
    nameCreateBy,
    status,
    idPerformer,
    detailTest,
  } = req.body.data;
  // console.log(req.body.data);
  const datetest = moment().format();
  GocBaiLam.findOne({ performer, idDeThi, kyThi })
    .then((data) => {
      if (data) {
        return res.status(200).json({ data: data._id });
      }
      // return res.status(401).json({ message: "duplicate" });
      let dateS = timeStart.split(",")[0].split("-");
      let timeS = timeStart.split(",")[1].split(":");
      let dateE = timeEnd.split(",")[0].split("-");
      let timeE = timeEnd.split(",")[1].split(":");
      const gocBaiLam = new GocBaiLam({
        performer,
        Class,
        idDeThi,
        maDeThi,
        content,
        avatar,
        nameCreateBy,
        status,
        createBy,
        kyThi,
        idPerformer,
        timeStart: `${dateS[0]}-${dateS[1]}-${dateS[2]}, ${timeS[0]}:${timeS[1]}`,

        timeEnd: `${dateE[0]}-${dateE[1]}-${dateE[2]}, ${timeE[0]}:${timeE[1]}`,
        detailTest: ranDomQuestion(detailTest),
        dateTest: datetest,
      });
      gocBaiLam.save((err, data) => {
        if (err) return res.status(402).json({ message: err });
        data.detailTest.map((item, index) => {
          item.answers.map((ans, ind) => {
            ans.bio = false;
          });
        });
        BaiLam.findOne({ performer, idDeThi, kyThi }).exec((err, data1) => {
          if (err) return res.status(400).json({ message: err });
          const bailam = new BaiLam({
            performer,
            Class,
            idDeThi,
            maDeThi,
            createBy,
            nameCreateBy,
            content,
            avatar,
            status,
            kyThi,
            idPerformer,
            timeStart: data.timeStart,
            timeEnd: data.timeEnd,
            detailTest: data.detailTest,
            dateTest: data.dateTest,
            goc: data._id,
          });
          // console.log("83" + data.detailTest);
          // console.log(bailam);
          bailam.save((err, result) => {
            if (err) return res.status(400).json({ message: err });
            data.detailTest.map((item, index) => {
              Question.findOne({
                question: item.question,
                theme: item.theme,
              }).exec((err, data1) => {
                if (err) return;
                Question.findOneAndUpdate(
                  { question: item.question, theme: item.theme },
                  { soLanSuDung: `${data1.soLanSuDung + 1}` },
                  { new: true }
                ).exec((err, data) => {
                  if (err) return;
                  console.log(data);
                });
                console.log(data);
              });
            });

            if (role == "SV") {
              const text =
                "Mã đề thi: " +
                maDeThi +
                ", Kỳ thi: " +
                kyThi +
                ", Thời gian bắt đầu: " +
                timeStart +
                ", Thời gian kết thúc: " +
                timeEnd +
                ", Giáo viên ra đề: " +
                nameCreateBy +
                ", Lớp: " +
                Class;
              const textforFile = Upload.CreateTextForHistory(
                "Làm bài thi",
                idPerformer,
                performer,
                text
              );
              Upload.writeHistorySV(textforFile);
            } else {
              const text =
                "Mã đề thi: " +
                maDeThi +
                ", Kỳ thi: " +
                kyThi +
                ", Thời gian bắt đầu: " +
                timeStart +
                ", Thời gian kết thúc: " +
                timeEnd +
                ", Giáo viên ra đề: " +
                nameCreateBy +
                ", Lớp: " +
                Class;
              const textforFile = Upload.CreateTextForHistory(
                "Test bài thi",
                idPerformer,
                performer,
                text
              );
              Upload.writeHistoryGV(textforFile);
            }
            return res.status(200).json({ data: result.goc });
          });
        });
      });
    })
    .catch((err) => {
      return res.status(400).json({ message: err });
    });
};

function ranDomQuestion(questions) {
  let leng = questions.length;
  var ArrayQues = [];
  var n = 0;
  var map = new Map();
  while (n <= leng - 1) {
    let index = Math.floor(Math.random() * leng);
    if (map.get(index)) continue;
    else {
      map.set(index, `${index}`);
      n += 1;
      ArrayQues.push(questions[index]);
    }
  }
  // console.log(ArrayQues);
  return ArrayQues;
}

function MarkForText(data) {
  const bailam = new BaiLam();
  var benchmarks = 10 / data.detailTest.length;
  return GocBaiLam.findById({ _id: data.idBailam })
    .then((res) => {
      if (res) {
        res.detailTest.map((item, index) => {
          var fla = 0; // so cau hỏi user chọn
          var flas = 0; // soluong cau hoi dung
          for (let i = 0; i < item.answers.length; i++) {
            for (let j = 0; j < data.detailTest[index].answerUser.length; j++) {
              // answerUswer
              let answerChoos = data.detailTest[index].answerUser[j].answer;
              if (
                answerChoos === item.answers[i].answer &&
                item.answers[i].bio
              ) {
                fla += 1;
              }
            }
            if (item.answers[i].bio == true) {
              flas += 1;
            }
          }
          if (fla == flas && data.detailTest[index].answerUser.length == flas) {
            BaiLam.findOne({ _id: data._id }).then((xxx) => {
              if (xxx) {
                xxx.detailTest.map((ques, inx) => {
                  if (ques.question == item.question && ques.result == false) {
                    Question.findOne({
                      question: item.question,
                      theme: item.theme,
                    }).exec((err, data1) => {
                      if (err) return;
                      var mucdo = 3;
                      const md =
                        ((data1.soLanTraLoiDung + 1) / data1.soLanSuDung) * 100;
                      if (md >= 70) {
                        mucdo = 1;
                      } else if (md < 70 && md >= 50) {
                        mucdo = 2;
                      } else {
                        mucdo = 3;
                      }

                      Question.findOneAndUpdate(
                        {
                          question: item.question,
                          theme: item.theme,
                        },
                        {
                          soLanTraLoiDung: `${data1.soLanTraLoiDung + 1}`,
                          level: mucdo,
                        },
                        { new: true }
                      ).exec((err, data) => {
                        if (err) return;
                      });
                    });
                  }
                });
              }
            });

            data.detailTest[index].result = true;
            bailam.sumPoint += benchmarks;
            bailam.truNumberQuestion += 1;
            bailam.percent = bailam.truNumberQuestion / res.detailTest.length;
            bailam.time = CDate.time(res.dateTest); // thơi gian đã làm
            bailam.dateTest = res.dateTest;
          } else {
            BaiLam.findOne({ _id: data._id }).then((xxx) => {
              if (xxx) {
                xxx.detailTest.map((ques, inx) => {
                  if (ques.question == item.question && ques.result == true) {
                    Question.findOne({
                      question: item.question,
                      theme: item.theme,
                    }).exec((err, data1) => {
                      if (err) return;
                      var mucdo = 3;
                      const md =
                        ((data1.soLanTraLoiDung - 1) / data1.soLanSuDung) * 100;
                      if (md >= 70) {
                        mucdo = 1;
                      } else if (md < 70 && md >= 50) {
                        mucdo = 2;
                      } else {
                        mucdo = 3;
                      }
                      Question.findOneAndUpdate(
                        {
                          question: item.question,
                          theme: item.theme,
                        },
                        {
                          soLanTraLoiDung: `${data1.soLanTraLoiDung - 1}`,
                          level: mucdo,
                        },
                        { new: true }
                      ).exec((err, data) => {
                        if (err) return;
                      });
                    });
                  } else {
                    Question.findOneAndUpdate(
                      {
                        question: item.question,
                        theme: item.theme,
                      },
                      {
                        level: 3,
                      },
                      { new: true }
                    ).exec((err, data) => {
                      if (err) return;
                    });
                  }
                });
              }
            });
          }
        });
      }
      return { data, bailam };
    })
    .catch((error) => {
      // console.log(error);
    });
}
exports.update = (req, res) => {
  const {
    performer,
    Class,
    // detailTest,
    idBailam,
    idDeThi,
    maDeThi,
    kyThi,
    status,
    // percent,
  } = req.body.data;
  const getData = MarkForText(req.body.data);

  getData.then(function (result) {
    const data = {
      performer,
      Class,
      maDeThi,
      status,
      idDeThi, // ma de thi
      kyThi, // nawm hoc
      sumPoint: result.bailam.sumPoint,
      truNumberQuestion: result.bailam.truNumberQuestion,
      percent: result.bailam.percent,
      time: result.bailam.time,
      detailTest: result.data.detailTest,
      dateTest: result.bailam.dateTest,
    };
    // console.log(data.detailTest);
    BaiLam.findOneAndUpdate({ performer, Class, goc: idBailam }, data).exec(
      (err, data) => {
        if (err) console.log(err);
        return res.status(200).json({ data });
      }
    );
  });
  ``;
};

exports.getAll = (req, res) => {
  BaiLam.find().exec((err, data) => {
    if (err) return res.status(400).json({ message: err });
    return res.status(200).json({ data });
  });
};
exports.getBaiLamById = (req, res) => {
  const { id } = req.params;
  // console.log(id);
  BaiLam.findOne({ goc: id })
    .then((data) => {
      GocBaiLam.findById({ _id: id }).exec((err, data1) => {
        if (err) console.log(err);
        return res.status(200).json({ data, data1 });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getBaiLamByIdandPerformer = (req, res) => {
  const { id, idPerformer, role, createBy } = req.body.data;
  // console.log(req.body.data);
  BaiLam.findOne({ $and: [{ idDeThi: id }, { idPerformer: idPerformer }] })
    .then((data) => {
      if (data) {
        GocBaiLam.findById({ _id: data.goc }).exec((err, data1) => {
          if (err) console.log(err);
          if (role == "SV") {
            const text =
              "Mã đề thi: " +
              data.maDeThi +
              ", Kỳ thi: " +
              data.kyThi +
              ", Thời gian bắt đầu: " +
              data.timeStart +
              ", Thời gian kết thúc: " +
              data.timeEnd +
              ", Giáo viên ra đề: " +
              data.nameCreateBy +
              ", Sinh viên thực hiện: " +
              data.performer +
              ", Lớp: " +
              data.Class;
            const textforFile = Upload.CreateTextForHistory(
              "Xem kết quả",
              idPerformer,
              createBy,
              text
            );
            Upload.writeHistorySV(textforFile);
          } else {
            const text =
              "Mã đề thi: " +
              data.maDeThi +
              ", Kỳ thi: " +
              data.kyThi +
              ", Thời gian bắt đầu: " +
              data.timeStart +
              ", Thời gian kết thúc: " +
              data.timeEnd +
              ", Giáo viên ra đề: " +
              data.nameCreateBy +
              ", Sinh viên thực hiện: " +
              data.performer +
              ", Lớp: " +
              data.Class;
            const textforFile = Upload.CreateTextForHistory(
              "Xem Kết quả",
              idPerformer,
              createBy,
              text
            );
            Upload.writeHistoryGV(textforFile);
          }

          return res.status(200).json({ data, data1, bailam: true });
        });
      } else {
        return res.status(201).json({ data: { status: false }, bailam: false });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.loadAllByperfomer = (req, res) => {
  const { idPerformer, createBy } = req.params;
  BaiLam.findById({ idPerformer }).exec((err, data) => {
    if (err) return res.status(400).json({ message: err });
    return res.status(200).json({ data });
  });
};

exports.loadAll = (req, res) => {
  const {
    page,
    limit,
    search,
    idPerformer,
    sort,
    reverse,
    kyThi,
    Class,
    createBy,
  } = req.query;
  var pages = 0;
  if (+page != 1) {
    // nếu page=1 thi bắt đầu lấy từ phần tử 0
    pages = (page * 1 - 1) * +limit;
  }
  const reve = reverse === "true" ? 1 : -1 || 1;
  // console.log(req.query);
  BaiLam.find(
    {
      $and: [
        { content: { $regex: search } },
        { createBy: { $regex: createBy } },
        { Class: { $regex: Class } },
        { kyThi: { $regex: kyThi } },
        { idPerformer: { $regex: idPerformer } },
      ],
    },
    { __v: 0 }
  )
    .limit(+limit)
    .skip(pages)
    .sort([[sort, reve]])
    .then((data) => {
      if (!data) return res.status(400).json({ message: "empty" });

      BaiLam.find({
        $and: [
          { createBy: { $regex: createBy } },
          { idPerformer: { $regex: idPerformer } },
        ],
      }).exec((err, allData) => {
        if (err) return res.status(400).json({ message: err });
        return res.status(200).json({ data, allData });
      });
    })
    .catch((err) => {
      return res.status(401).json({ message: err });
    });
};

const exportExcel = (data, colunmName, worksheetName, filepath) => {
  const workbook = xlsx.utils.book_new();
  const sheetData = [colunmName, ...data];
  const worksheet = xlsx.utils.aoa_to_sheet(sheetData);
  xlsx.utils.book_append_sheet(workbook, worksheet, worksheetName);
  xlsx.writeFile(workbook, path.join(__dirname, filepath));
};
const exportDatetoExcel = (data, colunmName, worksheetName, filepath) => {
  const dt = data.map((item) => {
    return [
      item.maDeThi,
      item.kyThi,
      item.nameCreateBy,
      item.performer,
      item.truNumberQuestion,
      item.Class,
    ];
  });
  exportExcel(dt, colunmName, worksheetName, filepath);
};

exports.exportFileExcel = (req, res) => {
  // return res.status(200).json({data:"ok"})
  const { data } = req.body;
  const colunmName = [
    "Mã đề thi",
    "Kỳ thi",
    "Người ra đề",
    "Tên sinh viên",
    "Điểm",
    "Class",
  ];
  const path = "../public/excel/ketqua.xlsx";
  try {
    exportDatetoExcel(data, colunmName, "ketqua", path);
    return res.status(200).json({ message: "success !" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

exports.viewFileExcelKetqua = (req, res) => {
  return res.sendFile(
    path.join(__dirname, `../public/excel/${req.params.name}`)
  );
};
