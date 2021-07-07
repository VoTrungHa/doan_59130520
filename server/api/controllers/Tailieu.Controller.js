const Tailieu = require("../models/tailieu.model");
function filterSeal(str) {
  str = typeof str === "string" ? str : "";
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/[^a-zA-Z0-9 ]/g, " ");
  str = str.trim();

  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\|\'| |\"|\&|\#|\[|\]|~|$|_/g,
    "-"
  );
  /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
  str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1-
  str = str.replace(/^\-+|\-+$/g, "");
  // cắt bỏ ký tự - ở đầu và cuối chuỗi
  return str;
}
exports.Create = (req, res) => {
  const { DsNoiDung, avatar, chuong, detailTest } = req.body;
  const s = filterSeal(chuong);
  // console.log(req.body);
  Tailieu.find().then((data) => {
    if (data.length != 0) {
      var flag = 0;
      // for (let i = 0; i <= data.length; i++) {
      data.map((item, index) => {
        //  console.log(item.chuong);
        if (filterSeal(item.chuong) === s) {
          flag = 1;
          return;
        }
      });
      if (flag == 0) {
        const tailieu = new Tailieu();
        tailieu.chuong = chuong;
        tailieu.DsNoiDung = DsNoiDung;
        tailieu.detailTest = detailTest;
        tailieu.avatar = avatar;
        tailieu.save((err, data) => {
          if (err) return res.status(400).json({ message: err });
          return res.status(200).json({ message: data });
        });
      } else {
        return res.status(405).json({ message: "Chương đã tồn tại" });
      }
    } else {
      const tailieu = new Tailieu();
      tailieu.chuong = chuong;
      tailieu.DsNoiDung = DsNoiDung;
      tailieu.detailTest = detailTest;
      tailieu.avatar = avatar;
      tailieu.save((err, data) => {
        if (err) return res.status(400).json({ message: err });
        return res.status(200).json({ message: data });
      });
    }
  });
};

exports.SearchMulti = (req, res) => {
  const { page, limit, search } = req.query;
  // console.log(req.query);
  var pages = 0;
  if (+page != 1) {
    // nếu page=1 thi bắt đầu lấy từ phần tử 0
    pages = (page * 1 - 1) * +limit;
  }
  // console.log(req.query);
  Tailieu.find({ chuong: { $regex: search } }, { __v: 0 })
    .limit(+limit)
    .skip(pages)
    .then((data) => {
      if (!data) return res.status(400).json({ message: "empty" });
      return res.status(200).json({ data });
    })
    .catch((err) => {
      return res.status(401).json({ message: err });
    });
};
exports.getAll = (req, res) => {
  Tailieu.find()
    .then((data) => {
      return res.status(200).json({ data });
    })
    .catch((err) => {
      return res.status(400).json({ message: err });
    });
};
exports.getDocsById = (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  Tailieu.findById({ _id: id })
    .then((data) => {
      if (res) {
        return res.status(200).json({ data });
      }
      return res.status(400).json({ message: "không tồn tại !" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ message: err });
    });
};
exports.delete = (req, res) => {
  Tailieu.findOneAndDelete({ _id: req.params.id }).exec((err, data) => {
    if (err) return res.status(400).json({ message: err });
    return res.status(200).json({ message: "xóa thành công !" });
  });
};
exports.updateById = (req, res) => {
  const { DsNoiDung, avatar, chuong, detailTest } = req.body.data;
  // console.log(req.body.data);
  // console.log(req.params.id);
  const tailieu = {
    chuong,
    DsNoiDung,
    detailTest,
    avatar,
  };

  Tailieu.findByIdAndUpdate({ _id: req.params.id }, tailieu, {
    new: true,
  }).exec((err, data) => {
    if (err) return res.status(400).json({ message: err });
    return res.status(200).json({ message: "thành công !" });
  });
};
