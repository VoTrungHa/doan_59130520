const DeThi = require("../models/dethi.model");
const Question = require("../models/cauhoi.model");
const CDate = require("../share/ganeralDate");
const moment = require("moment");
const path = "./api/public/uploads/";
const Namhoc = require("../models/namHoc.model");
const Theme = require("../models/theme.model");
const fs = require("fs");
const xml2js = require("xml2js");
const Account = require("../models/account.model");
const Upload = require("../share/uploadFile");
exports.Create = (req, res) => {
  const {
    timeEnd,
    note,
    id,
    Class,
    content,
    detailTest,
    kyThi,
    status,
    password,
    timeStart,
    createBy,
    avatar,
    action,
    idCreateBy,
    confirmationBy,
  } = req.body; 
  console.log("30"+req.body)
  DeThi.findOne({ $and: [{ id, kyThi }] })
    .then((data) => {
      if (data) return res.status(404).json({ message: "duplicate" });
      const dethi = new DeThi({
        kyThi,
        createBy,
        Class: Class,
        id,
        confirmationBy,
        password,
        avatar,
        createDate: moment().format(),
        timeStart: `${timeStart.day}-${timeStart.month}-${timeStart.year}, ${timeStart.hours}:${timeStart.minute}`,

        timeEnd: `${timeEnd.day}-${timeEnd.month}-${timeEnd.year}, ${timeEnd.hours}:${timeEnd.minute}`,
        note,
        content,
        detailTest,
        status,
      });

        console.log("52dethi" + dethi);
      return dethi
        .save()
        .then((data) => {
          const Detailtest = data.detailTest;
          const namhoc = data.kyThi;
          Namhoc.findOne({ name: namhoc }).exec((err, data) => {
            if (!data) {
              const nh = new Namhoc({
                name: namhoc,
              });
              nh.save();
            }
          });
          Detailtest.map((item, index) => {
            Question.findOne({
              question: {
                $regex: new RegExp(
                  "^" +
                    item.question.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") +
                    "$",
                  "i"
                ),
              },
            }).exec((err, data) => {
              if (!data) {
                const ques = new Question();
                (ques.question = item.question),
                  (ques.answers = item.answers),
                  (ques.level = item.level),
                  // (ques.subject = item.subject),
                  (ques.createDate = moment().format()),
                  (ques.status = true),
                  (ques.theme = item.theme);
                (ques.soLanSuDung = item.soLanSuDung),
                  (ques.soLanTraLoiDung = item.soLanTraLoiDung);
                ques.save((err, data) => {
                   console.log("85"+data);
                });
              }
            });
            Theme.findOne({
              name: {
                $regex: new RegExp(
                  "^" +
                    item.theme.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") +
                    "$",
                  "i"
                ),
              },
            }).exec((err, data) => {
              if (!data) {
                const theme = new Theme({
                  name: item.theme,
                });
                theme.save();
              }
            });
          });
          if (action) {
            console.log("106" + action);
            const text =
              "Mã đề thi: " +
              data.id +
              ", Kythi: " +
              data.kyThi +
              ", Nội dung: " +
              data.content +
              ", Số lượng câu hỏi: " +
              data.detailTest.length +
              ", Giáo viên: " +
              data.createBy.name +
              ", Lớp: " +
              JSON.stringify(data.Class) +
              ", Mật khẩu:" +
              password;
            const textforFile = Upload.CreateTextForHistory(
              "Đề thi bảng nháp",
              idCreateBy,
              createBy.name,
              text
            );
            Upload.writeHistoryGV(textforFile);
          } else {
            console.log("131" + action);
            const text =
              "Mã đề thi: " +
              data.id +
              ", Kythi: " +
              data.kyThi +
              ", Nội dung: " +
              data.content +
              ", Số lượng câu hỏi: " +
              data.detailTest.length +
              ", Giáo viên: " +
              data.createBy.name +
              ", Lớp: " +
              JSON.stringify(data.Class) +
              ", Mật khẩu:" +
              password;
            const textforFile = Upload.CreateTextForHistory(
              "Tạo Đề thi",
              idCreateBy,
              createBy.name,
              text
            );
            Upload.writeHistoryGV(textforFile);
          }

          return res.status(200).json({ data });
        })
        .catch((err) => {
          return res.status(404).json({ message: err });
        });
    })
    .catch((err) => {
      return res.status(404).json({ message: err });
    });
};

exports.DuyetDeThi = (req, res) => {
  const { confirmationBy, action, createBy, idCreateBy } = req.body.data;
  const data = {
    confirmationBy,
  };
  console.log(req.body.data);
  DeThi.findByIdAndUpdate({ _id: req.params.id }, data, { new: true }).exec(
    (err, data) => {
      if (err || !data) return res.status(400).json({ message: err });
      const text =
        "Mã đề thi: " +
        data.id +
        ", Kythi: " +
        data.kyThi +
        ", Nội dung: " +
        data.content +
        ", Số lượng câu hỏi: " +
        data.detailTest.length +
        ", Giáo viên: " +
        data.createBy.name +
        ", Lớp: " +
        JSON.stringify(data.Class) +
        ", Mật khẩu:" +
        data.password;
      if (action == "true") {
        const textforFile = Upload.CreateTextForHistory(
          "Duyệt đề thi",
          idCreateBy,
          data.createBy.name,
          text
        );
        Upload.writeHistoryGV(textforFile);
      } else {
        const textforFile = Upload.CreateTextForHistory(
          "Hủy duyệt đề thi",
          idCreateBy,
          data.createBy.name,
          text
        );
        Upload.writeHistoryGV(textforFile);
      }

      return res.status(200).json({ data: data });
    }
  );
};

exports.Update = (req, res) => {
  const {
    timeEnd,
    note,
    id,
    Class,
    content,
    detailTest,
    kyThi,
    password,
    timeStart,
    avatar,
    createBy,
    idCreateBy,
    status,
    confirmationBy,
  } = req.body.data;

  const dethi = {
    timeEnd,
    note,
    id,
    Class: Class,
    content,
    detailTest,
    status,
    idCreateBy,
    kyThi,
    avatar,
    password,
    timeStart: `${timeStart.day}-${timeStart.month}-${timeStart.year}, ${timeStart.hours}:${timeStart.minute}`,

    timeEnd: `${timeEnd.day}-${timeEnd.month}-${timeEnd.year}, ${timeEnd.hours}:${timeEnd.minute}`,

    confirmationBy,
  };
  DeThi.findByIdAndUpdate({ _id: req.params.id }, dethi).exec((err, data) => {
    if (err) return res.status(404).json({ message: err });
    // return res.status(200).json({ data: data });
    const Detailtest = data.detailTest;
    const namhoc = data.kyThi;
    Namhoc.findOne({ name: namhoc }).exec((err, data) => {
      if (!data) {
        const nh = new Namhoc({
          name: namhoc,
        });
        nh.save();
      }
    });
    Detailtest.map((item, index) => {
      Question.findOne({
        question: {
          $regex: new RegExp(
            "^" + item.question.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$",
            "i"
          ),
        },
      }).exec((err, data) => {
        if (!data) {
            console.log("update");
          const ques = new Question();
          (ques.question = item.question),
            (ques.answers = item.answers),
            (ques.level = item.level),
            // (ques.subject = item.subject),
            (ques.createDate = moment().format()),
            (ques.status = true),
            (ques.theme = item.theme);
              (ques.soLanSuDung = item.soLanSuDung),
                (ques.soLanTraLoiDung = item.soLanTraLoiDung);
          ques.save();
        }
      });
      Theme.findOne({
        name: {
          $regex: new RegExp(
            "^" + item.theme.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$",
            "i"
          ),
        },
      }).exec((err, data) => {
        if (!data) {
          const theme = new Theme({
            name: item.theme,
          });
          theme.save();
        }
      });
    });
    const text =
      "Mã đề thi: " +
      data.id +
      ", Kythi: " +
      data.kyThi +
      ", Nội dung: " +
      data.content +
      ", Số lượng câu hỏi: " +
      data.detailTest.length +
      ", Giáo viên: " +
      data.createBy.name +
      ", Lớp: " +
      JSON.stringify(data.Class) +
      ", Mật khẩu:" +
      password;
    const textforFile = Upload.CreateTextForHistory(
      "Sửa đề thi",
      idCreateBy,
      data.createBy.name,
      text
    );
    Upload.writeHistoryGV(textforFile);

    return res.status(200).json({ data });
  });
};

exports.search = (req, res) => {
  const { search, sort, reverse, page, limit, kyThi, Class } = req.query;

  var pages = 0;
  if (+page != 1) {
    // nếu page=1 thi bắt đầu lấy từ phần tử 0
    pages = (page * 1 - 1) * +limit;
  }
  // const { year, month, day, hour, minute } = req.body;
  const reve = reverse === "true" ? 1 : -1;
  const sorts = sort ? sort : "id";
  DeThi.find(
    {
      $and: [
        { kyThi: { $regex: kyThi } },
        { content: { $regex: search } },
        { "Class.name": { $regex: `${Class}` } },
      ],
    },
    { __v: 0 }
  )
    .limit(+limit)
    .skip(pages)
    .sort([[sorts, reve]])
    .then((data) => {
      if (!data) return res.status(400).json({ message: "empty" });
      return res.status(200).json({ data });
    })
    .catch((err) => {
      return res.status(401).json({ message: err });
    });
};

exports.getDethi = (req, res) => {
  DeThi.find().exec((err, data) => {
    if (err) return res.status(401).json({ err });
    return res.status(200).json({ data });
  });
};

exports.getByIdTwo = (req, res) => {
  let _id = req.params.id;
  DeThi.findById({ _id })
    .then((data) => {
      return res.status(200).json({ data: data });
    })
    .catch((err) => {
      return res.status(400).json({ message: err });
    });
};

exports.getById = (req, res) => {
  let _id = req.params.id;

  DeThi.findById({ _id })
    .then((data) => {
      var Class = [];
      data.Class.map((item, index) => {
        Class.push(item.name);
      });

      Account.find({
        // lays sinh vien trong đề thi
        $and: [{ "infor.Class.name": { $in: Class } }, { authorities: "SV" }],
      }).exec((err, sv) => {
        if (err) {
        }
        if (sv) {
          return res.status(200).json({ data, sinhvien: sv });
        }
      });
    })
    .catch((err) => {
      return res.status(401).json({ err });
    });
};

exports.delete = (req, res) => {
  const { idCreateBy } = req.body.data;
  DeThi.findByIdAndRemove({ _id: req.params.id }).exec((err, data) => {
    if (err) return res.status(404).json({ message: err });
    console.log(data);
    const text =
      "Mã đề thi: " +
      data.id +
      ", Kythi: " +
      data.kyThi +
      ", Nội dung: " +
      data.content +
      ", Số lượng câu hỏi: " +
      data.detailTest.length +
      ", Giáo viên: " +
      data.createBy.name +
      ", Lớp: " +
      JSON.stringify(data.Class) +
      ", Mật khẩu:" +
      data.password;
    const textforFile = Upload.CreateTextForHistory(
      "Xóa đề thi",
      idCreateBy,
      data.createBy.name,
      text
    );
    Upload.writeHistoryGV(textforFile);
    return res.status(200).json({ message: "success" });
  });
};

exports.uploadQuesTXT = async (req, resp) => {
  const files = req.file;
  var QuesTXT = [];
  if (!files) {
    const error = new Error("Please choose files");
    return resp.status(400).json({ message: error });
  }
  let url = `${path}${files.filename}`;
  fs.readFile(url, { encoding: "utf-8" }, (err, res) => {
    if (err) {
      console.log(err);
    }
    try {
      const data = res.split(/\r\n/);
      const Ques = {
        question: "",
        answers: [],
        level: "",
        theme: "",
        fullName: function () {
          return {
            question: this.question,
            answers: this.answers,
            level: this.level,
            theme: this.theme,
          };
        },
      };
      var isStruct = false;
      data.map((item, index) => {
        // duyệt qua arr[text]
        if (item.slice(0, 3) === "Câu") {
          isStruct = true;
          Ques.answers = [];
          // cập nhâp new object
          Ques.question = item.slice(7);
          return;
        } else if (item.slice(0, 6) === "Chủ đề") {
          Ques.theme = item.slice(8, item.length - 1);
          return;
        } else if (item.slice(0, 6) === "Mức độ") {
          Ques.level = item.slice(8, item.length - 1);
          return;
        } else if (item.slice(0, 6) === "Đáp án") {
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
          QuesTXT.push(Ques.fullName());
          if (index === data.length - 1) {
            return resp.status(200).json({ data: QuesTXT });
          }
        } else {
          Ques.answers.push({ answer: item.slice(3) });
        }
      });
      if (isStruct == false) {
        return resp.status(406).json({ message: "Không đúng cấu trúc." });
      }
    } catch (error) {
      return resp.status(400).json({ message: error });
    }
  });
};

exports.uploadQuesXML = (req, res) => {
  const files = req.file;
  var QuesTXT = [];
  if (!files) {
    const error = new Error("Please choose files");
    return res.status(400).json({ message: error });
  }
  let url = `${path}${files.filename}`;
  fs.readFile(url, { encoding: "utf-8" }, (err, data) => {
    // read file
    if (err) {
      return res.status(404).json({ message: "No found File" });
    }
    const Ques = {
      question: "",
      answers: [],
      level: "",
      theme: "",
      fullName: function () {
        return {
          question: this.question,
          answers: this.answers,
          level: this.level,
          theme: this.theme,
        };
      },
    };
    xml2js.parseString(data, (err, result) => {
      // transform xml to object
      if (err) {
        return res.status(400).json({ message: "transform data fail" });
      }
      try {
        const data = result.Questions.Question;
        data.map((item, index) => {
          // get a jobject
          Ques.question = item.question.toString();
          Ques.level = item.level.toString();
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
          QuesTXT.push(Ques.fullName());
          if (index == data.length - 1) {
            return res.status(200).json({ data: QuesTXT });
          }
          Ques.answers = [];
        });
      } catch (error) {
        return res.status(400).json({ message: "struct file fial" });
      }
    });
  });
};

// phân trang
exports.getAllDethiById = (req, res) => {
  const { id } = req.params;
  const { state } = req.query;
  const sta = state == "true" ? true : false;

  DeThi.find({
    "createBy.id": id,
  })
    .then((data) => {
      var Arr = [];
      data.map((item, index) => {
        let date = item.timeEnd.split(",")[0].split("-");
        let time = item.timeEnd.split(",")[1].split(":");
        const dateE = new Date();
        dateE.setFullYear(date[2]);
        dateE.setMonth(date[1] - 1);
        dateE.setDate(date[0]);
        dateE.setHours(time[0], time[1]);

        const datenow = new Date();
        const dateN = new Date();

        dateN.setFullYear(datenow.getFullYear());
        dateN.setMonth(datenow.getMonth());
        dateN.setDate(datenow.getDate());
        dateN.setHours(datenow.getHours(), datenow.getMinutes());
        // sắp diễn ra
        if (sta && dateN.getTime() < dateE.getTime()) {
          Arr.push(item);
        }
        if (!sta && dateN.getTime() > dateE.getTime()) {
          Arr.push(item);
        }
      });
      return res.status(200).json({ data: Arr });
    })
    .catch((err) => {
      return res.status(400).json({ message: err });
    });
};

exports.getDeThiById = (req, res) => {
  var Arr = [];
  const { id, current_page, createBy, authorities, limit, state, Class } =
    req.body.data;
  console.log(req.body.data);
  var pages = 0;
  if (+current_page != 1) {
    // nếu page=1 thi bắt đầu lấy từ phần tử 0
    pages = (current_page * 1 - 1) * +limit;
  }
  const sta = state == "true" ? true : false;
  // console.log(moment().format());
  if (Class.length > 0) {
    DeThi.find({
      $and: [{ "Class.name": { $in: Class } }, { confirmationBy: { $ne: "" } }],
    })
      .then((res) => {
        console.log("line 510" + res);
        res.map((item, index) => {
          let date = item.timeEnd.split(",")[0].split("-");
          let time = item.timeEnd.split(",")[1].split(":");
          const dateE = new Date();
          dateE.setFullYear(date[2]);
          dateE.setMonth(date[1] - 1);
          dateE.setDate(date[0]);
          dateE.setHours(time[0], time[1]);
          const datenow = new Date();
          const dateN = new Date();
          dateN.setFullYear(datenow.getFullYear());
          dateN.setMonth(datenow.getMonth());
          dateN.setDate(datenow.getDate());
          dateN.setHours(datenow.getHours(), datenow.getMinutes());
          console.log(item.confirmationBy);
          // sắp diễn ra
          if (
            sta &&
            dateN.getTime() < dateE.getTime() &&
            item.confirmationBy != ""
          ) {
            Arr.push(item);
          }
          if (
            !sta &&
            dateN.getTime() > dateE.getTime() &&
            item.confirmationBy != ""
          ) {
            Arr.push(item);
          }
        });
        return Arr;
      })
      .then((data) => {
        var result = [];
        const leng = data.length;
        const end = limit > leng ? leng - 1 : limit;

        for (let i = pages; i <= end; i++) {
          result.push(data[i]);
        }
        return res.status(200).json({ data: result });
      })
      .catch((error) => {
        return res.status(400).json({ message: error });
      });
  } else if (authorities == "ADMIN" || authorities == "TBM") {
    DeThi.find()
      .then((res) => {
        res.map((item, index) => {
          console.log(item.timeEnd);
          let date = item.timeEnd.split(",")[0].split("-");
          let time = item.timeEnd.split(",")[1].split(":");
          const dateE = new Date();

          dateE.setFullYear(date[2]);
          dateE.setMonth(date[1] - 1);
          dateE.setDate(date[0]);
          dateE.setHours(time[0], time[1]);
          const datenow = new Date();
          const dateN = new Date();
          dateN.setFullYear(datenow.getFullYear());
          dateN.setMonth(datenow.getMonth());
          dateN.setDate(datenow.getDate());
          dateN.setHours(datenow.getHours(), datenow.getMinutes());
          console.log(datenow.getHours());
          // sắp diễn ra
          if (
            sta &&
            dateN.getTime() < dateE.getTime() &&
            item.confirmationBy != ""
          ) {
            Arr.push(item);
          }
          if (
            !sta &&
            dateN.getTime() > dateE.getTime() &&
            item.confirmationBy != ""
          ) {
            Arr.push(item);
          }
        });
        return Arr;
      })
      .then((data) => {
        var result = [];
        const leng = data.length;

        const end = limit > leng ? leng - 1 : limit;

        for (let i = pages; i <= end; i++) {
          result.push(data[i]);
        }

        return res.status(200).json({ data: result });
      })
      .catch((error) => {
        return res.status(400).json({ message: error });
      });
  } else {
    console.log(req.body);
    DeThi.find({
      $and: [{ confirmationBy: { $ne: "" } }, { "createBy.id": createBy }],
    })
      .then((res) => {
        res.map((item, index) => {
          let date = item.timeEnd.split(",")[0].split("-");
          let time = item.timeEnd.split(",")[1].split(":");
          const dateE = new Date();
          dateE.setFullYear(date[2]);
          dateE.setMonth(date[1] - 1);
          dateE.setDate(date[0]);
          dateE.setHours(time[0], time[1]);
          const datenow = new Date();
          const dateN = new Date();
          dateN.setFullYear(datenow.getFullYear());
          dateN.setMonth(datenow.getMonth());
          dateN.setDate(datenow.getDate());
          dateN.setHours(datenow.getHours(), datenow.getMinutes());

          // sắp diễn ra
          if (sta && dateN.getTime() < dateE.getTime()) {
            Arr.push(item);
          }
          if (!sta && dateN.getTime() > dateE.getTime()) {
            Arr.push(item);
          }
        });
        return Arr;
      })
      .then((data) => {
        var result = [];
        const leng = data.length;

        const end = limit > leng ? leng - 1 : limit;

        for (let i = pages; i <= end; i++) {
          result.push(data[i]);
        }
        return res.status(200).json({ data: result });
      })
      .catch((error) => {
        return res.status(400).json({ message: error });
      });
  }
};

//đề thi đã kết thúc
exports.getAllByStatefalse = (req, res) => {
  const { current_page, limit } = req.body.data;
  console.log(req.body);
  var Arr = [];
  var pages = 0;
  if (+current_page != 1) {
    // nếu page=1 thi bắt đầu lấy từ phần tử 0
    pages = (current_page * 1 - 1) * +limit;
  }
  DeThi.find()
    .then((res) => {
      res.map((item, index) => {
        let date = item.timeEnd.split(",")[0].split("-");
        let time = item.timeEnd.split(",")[1].split(":");
        const dateE = new Date();
        dateE.setFullYear(date[2]);
        dateE.setMonth(date[1] - 1);
        dateE.setDate(date[0]);
        dateE.setHours(time[0], time[1]);
        const datenow = new Date();
        const dateN = new Date();
        dateN.setFullYear(datenow.getFullYear());
        dateN.setMonth(datenow.getMonth());
        dateN.setDate(datenow.getDate());
        dateN.setHours(datenow.getHours(), datenow.getMinutes());

        // kết thúc
        if (dateN.getTime() > dateE.getTime() && item.confirmationBy != "") {
          Arr.push(item);
        }
      });
      return Arr;
    })
    .then((data) => {
      var result = [];
      const leng = data.length;
      const end = limit > leng ? leng - 1 : limit;
      for (let i = pages; i <= end; i++) {
        result.push(data[i]);
      }
      return res.status(200).json({ data: result });
    })
    .catch((error) => {
      return res.status(400).json({ message: error });
    });
};

// đề thi sắp diễn ra.
exports.getAllByStateTrue = (req, res) => {
  const { current_page, limit } = req.body.data;
  var Arr = [];
  console.log(req.body);
  var pages = 0;
  if (+current_page != 1) {
    // nếu page=1 thi bắt đầu lấy từ phần tử 0
    pages = (current_page * 1 - 1) * +limit;
  }
  DeThi.find()
    .then((res) => {
      res.map((item, index) => {
        let date = item.timeEnd.split(",")[0].split("-");
        let time = item.timeEnd.split(",")[1].split(":");
        const dateE = new Date();
        dateE.setFullYear(date[2]);
        dateE.setMonth(date[1] - 1);
        dateE.setDate(date[0]);
        dateE.setHours(time[0], time[1]);
        const datenow = new Date();
        const dateN = new Date();
        dateN.setFullYear(datenow.getFullYear());
        dateN.setMonth(datenow.getMonth());
        dateN.setDate(datenow.getDate());
        dateN.setHours(datenow.getHours(), datenow.getMinutes());

        // sắp diễn ra
        if (dateN.getTime() < dateE.getTime() && item.confirmationBy != "") {
          Arr.push(item);
        }
      });
      return Arr;
    })
    .then((data) => {
      var result = [];
      const leng = data.length;
      const end = limit > leng ? leng - 1 : limit;
      for (let i = pages; i <= end; i++) {
        result.push(data[i]);
      }
      return res.status(200).json({ data: result });
    })
    .catch((error) => {
      return res.status(400).json({ message: error });
    });
};

exports.getDethiDetailById = (req, res) => {
  const { id } = req.params;
  DeThi.findById({ _id: id })
    .then((data) => {})
    .catch((err) => {});
};

exports.getDeThiByClass = (req, res) => {
  const { _id } = req.body;

  Account.findById({ _id })
    .then((account) => {
      var Class = [];
      account.infor.Class.map((item, index) => {
        Class.push(item.name);
      });

      DeThi.find({ "Class.name": { $in: Class } }).exec((err, data) => {
        if (err) {
          return res.status(400).json({ message: err });
        } else {
          return res.status(200).json({ data });
        }
      });
    })
    .catch((err) => {
      return res.status(400).json({ message: err });
    });
};
