var fs = require("fs");
var parser = require("xml2json");
exports.random = () => {
  return Math.floor(Math.random() * 99999);
};

exports.readFileSync = (path, name) => {
  try {
    let data = fs.readFileSync(path, { encoding: "utf8" });
    // var result = parser.toJson(data, {object:true}); // chuyển xml ->json
    return data;
  } catch (error) {
    return `Process readfile ${name}  Error:` + error;
  }
};

exports.wirteFile = (path, data, name) => {
  try {
    fs.writeFileSync(path, data, { encoding: "utf8" });
    return true;
  } catch (error) {
    return `Process wirte ${name} error: ${error}`;
  }
};

exports.RoleFunctions = (role) => {
  switch (role) {
    case "ADMIN":
      return [
        "LICHSU",
        "allAccount",
        "nhacuatoi",
        "createAccount",
        "updateAccount",
      ];
    case "GV":
      return [
        "allQuestion",
        "allQuestion",
        "allBaiThi",
        "createQuestion",
        "updateQuestion",
        "deleteQuestion",
        "detailQuestion",
        "createBaiThi",
        "updateBaiThi",
        "detailBaiThi",
        "nhacuatoi",
        "Bangdiems", // xem bangr điểm của học sinh,
        "suaBangDiem", // sửa điểm ccho học sinh
        "updateAccount",
        "baigiangs",
      ];
    case "TBM":
      return [
        "createQuestion",
        "allQuestion",
        "updateQuestion",
        "deleteQuestion",
        "detailQuestion",
        "createBaiThi",
        "updateBaiThi",
        "detailBaiThi",
        "deleteBaiThi",
        "nhacuatoi",
        "createBaiThi",
        "detailBaiThi",
        "updateBaiThi",
        "allBaiThi", //xem tất cả để thi
        "Bangdiems", // xem bangr điểm của học sinh,
        "suaBangDiem", // sửa điểm ccho học sinh
        "updateAccount",
        "baigiangs",
        "thembaigiang",
        "thaydoibaigiang",
      ];
    default:
      return [
        "allBaiLam",
        "updateBaiLam",
        "createBaiLam",
        "detailBaiLam",
        "nhacuatoi",
        "xemdiem",
        "updateAccount",
        "baigiangs",
      ];
  }
};
