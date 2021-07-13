var fs = require("fs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Account = require("../models/account.model");
const Profile = require("../models/profile.model");
const Upload = require("../share/uploadFile");
const Share = require("../share/random");
const datebirth = require("../share/ganeralDate");
let current_datetime = new Date();
let dateCurrent =
  current_datetime.getFullYear() +
  "/" +
  current_datetime.getMonth() +
  "/" +
  (current_datetime.getDate() + 1);

exports.createAccuont = (req, res) => {
  const dataForm = req.body;
  var root = create({ version: "1.0", encoding: "UTF-8" }).ele("Accounts");
  let dataFile = share.readFileSync(dirPath, "Account");
  if (JSON.stringify(dataFile) !== "{}") {
    //new Array
    var dataArray = new Array();
    if (Array.isArray(dataFile.Accounts.Account)) {
      dataArray = dataFile.Accounts.Account;
    } else {
      dataArray.push(dataFile.Accounts.Account);
    }

    let newDate = dataForm; // data from user Input
    newDate.Role = req.body.Role ? req.body.Role : "SV"; // Role default
    newDate.ngayTao = dateCurrent;
    newDate.trangThai = true;
    newDate.maTaiKhoan = `AC-${share.random()}-${share.random()}`;
    if (newDate.Role === "SV") {
      newDate.functions = constant.RoleSV;
    } else if (newDate.Role === "GV") {
      newDate.functions = constant.RoleGV;
    } else if (newDate.Role === "TBM") {
      newDate.functions = constant.RoleTBM;
    } else {
      newDate.functions = constant.RoleADMIN;
    }
    dataArray.push(newDate); // pass newDate from use to Array
    dataArray.map((e) => {
      let Account = root.ele("Account", {
        maTaiKhoan: `AC-${share.random()}-${share.random()}`,
      });
      Account.ele("tenDangNhap").txt(e.tenDangNhap).up();
      Account.ele("matKhau").txt(e.matKhau).up();
      Account.ele("Role").txt(e.Role).up();
      Account.ele("trangThai").txt(true).up();
      Account.ele("ngayTao").txt(e.ngayTao).up();
      if (Array.isArray(e.functions) && e.functions.length > 0) {
        e.functions.forEach((item) => {
          Account.ele("functions").txt(item).up();
        });
      }
    });
  } else {
    let Account = root.ele("Account", {
      maTaiKhoan: `AC-${share.random()}-${share.random()}`,
    });
    console.log("else");
    let role = dataForm.Role ? dataForm.Role : "SV";
    Account.ele("tenDangNhap").txt(dataForm.tenDangNhap).up();
    Account.ele("matKhau").txt(dataForm.matKhau).up();
    Account.ele("Role").txt(role).up();
    Account.ele("trangThai").txt(true).up();
    Account.ele("ngayTao").txt(dateCurrent).up();
    if (role === "SV") {
      constant.RoleSV.map((role) => {
        Account.ele("functions").txt(role).up();
      });
    } else if (role === "GV") {
      constant.RoleGV.map((role) => {
        Account.ele("functions").txt(role).up();
      });
    } else if (role === "TBM") {
      constant.RoleTBM.map((role) => {
        Account.ele("functions").txt(role).up();
      });
    } else {
      constant.RoleADMIN.map((role) => {
        Account.ele("functions").txt(role).up();
      });
    }
  }
  const xml = root.end({ prettyPrint: true });
  let result = share.wirteFile(dirPath, xml, "Account");
  if (result) {
    res.status(200).json({ message: true });
  } else {
    res.status(400).json({ message: result });
  }
};

exports.getfile = (req, res) => {
  // var obj ={Accounts:{Account:{name: "Super", Surname: "Man", age: 23,funstions:["fdas","fads"]}}};

  // var builder = new xml2js.Builder();
  // var xml = builder.buildObject(obj);
  //   console.log(xml)

  // share.wirteFile(dirPath,xml);

  fs.readFile(dirPath, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    // convert XML data to JSON object
    xml2js.parseString(data, (err, result) => {
      if (err) {
        throw err;
      }
      const postgres = {
        name: "PostgreSQL",
        type: "RDBMS",
      };
      // console.log(JSON.stringify(result));

      result.Accounts.Account.push(postgres);
      const builder = new xml2js.Builder();
      const xml = builder.buildObject(result);
      fs.writeFile(dirPath, xml, (err) => {
        if (err) {
          throw err;
        }
        // console.log(`Updated XML is written to a new file.`);
      });
    });
  });
};

exports.registerAccount = (req, res) => {
  const { authorities, username, password } = req.body.data;
  console.log(req.body.data);
  Account.findOne({
    login: username,
  }).exec((err, user) => {
    if (err || user) {
      return res.status(402).json({ message: `${username} đã tồn tại !` });
    }
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
        return res.status(400).json({});
      }
      let role = authorities ? authorities : "SV";
      const account = new Account();
      account.authorities = role;
      account.login = username;
      account.password = hash;
      account.createdDate = dateCurrent;
      (account.infor.email = username),
        (account.infor.id = Math.floor(Math.random() * 600000000)),
        (account.functions = Share.RoleFunctions(role));
      (account.infor.firstName = "Không"),
        (account.infor.lastName = "có"),
        (account.infor.gender = "Không có"),
        (account.infor.nganh = "Không có"),
        (account.infor.birthDay = dateCurrent),
        (account.infor.diachi = "Không có"),
        (account.infor.phone = "Không có"),
        account.infor.Class.push({ name: "Không có" }),
        account.save((err, user) => {
          if (err) {
            return res.status(401).json({
              message: err,
            });
          }
          return res.json({
            success: true,
            message: "Đăng ký thành công !",
          });
        });
    });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  // console.log(req.body);
  Account.findOne({ login: username }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({ message: "email không tồn tại" });
    }
    bcrypt
      .compare(password.toLowerCase(), user.password)
      .then(function (result) {
        if (!result) {
          return res.status(401).json({
            message: `Mật khẩu không chính xác !`,
          });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "60m",
        });
        return res.status(200).json({
          token,
          id: user._id,
        });
      });
  });
};

exports.getInfo = (req, res) => {
  Account.findById({ _id: req.params.id }).exec((err, data) => {
    if (err || !data) return res.status(400).json({ message: err });
    return res.status(200).json({ data });
  });
};

//////////////////////////////////////
exports.createAccuontAdmin = (req, resp) => {
  const {
    login,
    lastName,
    firstName,
    Class,
    password,
    authorities,
    gender,
    diachi,
    createBy,
    idCreateBy,
    nganh,
    birthDay,
    phone,
  } = req.body;
  // console.log(req.body);
  Account.findOne({
    login: {
      $regex: new RegExp(
        "^" + login.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$",
        "i"
      ),
    },
  })
    .then((res) => {
      if (res) {
        // console.log("duplicate");
        return resp.status(400).json({ message: "duplicase" });
      }
      bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
          // console.log("hash");
          return resp.status(400).json({ message: "hash" });
        }
        let role = authorities ? authorities : "SV";
        const account = new Account();
        account.authorities = role;
        account.login = login;
        account.password = hash;
        account.createdDate = dateCurrent;
        account.functions = Share.RoleFunctions(role);
        account.infor.id = Math.floor(Math.random() * 600000000);
        account.infor.firstName = firstName;
        account.infor.lastName = lastName;
        account.infor.nganh = nganh;
        account.infor.diachi = diachi;
        account.infor.birthDay =
          birthDay.year + "/" + birthDay.month + "/" + birthDay.day;
        account.infor.email = login;
        account.infor.phone = phone;
        account.infor.gender = gender;
        account.infor.Class.push({ name: Class });
        account.save((err, user) => {
          if (err) {
            return resp.status(401).json({
              message: err,
            });
          }
          const text =
            "Tên đăng nhập: " +
            login +
            ", Mật khẩu: " +
            password +
            ", Quyền: " +
            role +
            ", Họ và tên: " +
            firstName +
            " " +
            lastName +
            ", Địa chỉ: " +
            diachi +
            ", Ngành: " +
            nganh +
            ", Lớp: " +
            Class +
            ", Email:" +
            login;
          const textforFile = Upload.CreateTextForHistory(
            "Tạo tài khoản",
            idCreateBy,
            createBy,
            text
          );
          Upload.writeHistoryGV(textforFile);

          return resp.json({
            success: true,
            message: "Đăng ký thành công !",
          });
        });
      });
    })
    .catch((err) => {
      return resp.status(400).json({ message: err });
    });
};
exports.delete = (req, res) => {
  const { idCreateBy, createBy } = req.body.data;
  Account.findByIdAndDelete({ _id: req.params.id }).exec((err, data) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    const text =
      "Tên đăng nhập: " +
      data.login +
      ", Mật khẩu: " +
      data.password +
      ", Quyền: " +
      data.authorities +
      ", Họ và tên: " +
      data.infor.firstName +
      " " +
      data.infor.lastName +
      ", Địa chỉ: " +
      data.infor.diachi +
      ", Ngành: " +
      data.infor.nganh +
      ", Lớp: " +
      JSON.stringify(data.infor.Class.name) +
      ", Email:" +
      data.infor.email;
    const textforFile = Upload.CreateTextForHistory(
      "Xóa tài khoản",
      idCreateBy,
      createBy,
      text
    );
    Upload.writeHistoryGV(textforFile);

    return res.status(200).json({ message: "xóa thành công" });
  });
};

exports.update = (req, res) => {
  const {
    login,
    lastName,
    firstName,
    Class,
    password,
    authorities,
    gender,
    createBy,
    idCreateBy,
    id,
    diachi,
    nganh,
    birthDay,
    avatar,
    phone,
    actived,
  } = req.body.data;
  // console.log(password);
  const _id = req.params.id;
  let role = authorities ? authorities : "SV";

  Account.findById({ _id }).exec((err, acc) => {
    if (err) return res.status(400).json(err);
    if (acc.password == password) {
      const accout = {
        login: login,
        actived: actived,
        authorities: role,
        functions: Share.RoleFunctions(role),
        // idInfo: { type: String, default: "" },
        infor: {
          id: id, // MAX SINH VIEEN/ GIAO VIÊN
          firstName: firstName,
          lastName: lastName,
          birthDay: birthDay.year + "/" + birthDay.month + "/" + birthDay.day,
          email: login,
          phone: phone,
          avatar: avatar,
          gender: gender,
          nganh: nganh,
          diachi: diachi,
          Class: [
            {
              name: Class,
            },
          ],
        },
      };
      Account.findByIdAndUpdate(
        {
          _id,
        },
        accout
      )
        .then((data) => {
          if (role == "SV") {
            const text =
              "Tên đăng nhập: " +
              login +
              ", Mật khẩu: " +
              password +
              ", Quyền: " +
              role +
              ", Họ và tên: " +
              data.infor.firstName +
              " " +
              data.infor.lastName +
              ", Địa chỉ: " +
              diachi +
              ", Ngành: " +
              nganh +
              ", Lớp: " +
              Class +
              ", Email:" +
              login;
            const textforFile = Upload.CreateTextForHistory(
              "Sửa tài khoản",
              idCreateBy,
              createBy,
              text
            );
            Upload.writeHistorySV(textforFile);
          } else {
            const text =
              "Tên đăng nhập: " +
              login +
              ", Mật khẩu: " +
              password +
              ", Quyền: " +
              role +
              ", Họ và tên: " +
              data.infor.firstName +
              " " +
              data.infor.lastName +
              ", Địa chỉ: " +
              diachi +
              ", Ngành: " +
              nganh +
              ", Lớp: " +
              Class +
              ", Email:" +
              login;
            const textforFile = Upload.CreateTextForHistory(
              "Sửa tài khoản",
              idCreateBy,
              createBy,
              text
            );
            Upload.writeHistoryGV(textforFile);
          }
          return res.status(200).json({ message: "Thành công" });
        })
        .catch((err) => {
          // console.log(err)
          return res.status(400).json({ message: err });
        });
    } else {
      bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
          // console.log("hash");
          return resp.status(400).json({ message: "hash" });
        } else {
          const accout = {
            login: login,
            password: hash,
            actived: actived,
            authorities: role,
            functions: Share.RoleFunctions(role),
            // idInfo: { type: String, default: "" },
            infor: {
              id: id, // MAX SINH VIEEN/ GIAO VIÊN
              firstName: firstName,
              lastName: lastName,
              birthDay:
                birthDay.year + "/" + birthDay.month + "/" + birthDay.day,
              email: login,
              phone: phone,
              avatar: avatar,
              gender: gender,
              nganh: nganh,
              diachi: diachi,
              Class: [
                {
                  name: Class,
                },
              ],
            },
          };
          Account.findByIdAndUpdate(
            {
              _id,
            },
            accout
          )
            .then((res) => {
              // console.log(res);
            })
            .catch((err) => {
              // console.log(err);
            });
        }
      });
    }
  });
};

exports.getAll = (req, res) => {
  Account.find().exec((err, data) => {
    if (err) return res.status(400).json({ message: err });
    return res.status(200).json({ data });
  });
};

exports.getAllAccountGV = (req, res) => {
  Account.find({ authorities: "GV" }).exec((err, data) => {
    if (err) return res.status(400).json({ message: err });
    return res.status(200).json({ data });
  });
};

exports.search = (req, res) => {
  const { search, sort, reverse, page, limit, Class } = req.query;
  console.log(req.query);
  var pages = 0;
  if (+page != 1) {
    // nếu page=1 thi bắt đầu lấy từ phần tử 0
    pages = (page * 1 - 1) * +limit;
  }
  // const { year, month, day, hour, minute } = req.body;
  const reve = reverse === "true" ? 1 : -1;
  const sorts = sort ? sort : "id";
  Account.find(
    {
      $and: [
        { authorities: { $regex: `SV` } },
        { "infor.lastName": { $regex: `${search}` } },
        { "infor.Class.name": { $regex: `${Class}` } },
      ],
    },
    { __v: 0, password: 0 }
  )
    .limit(+limit)
    .skip(pages)
    .sort([[sorts, reve]])
    .then((data) => {
      if (!data) return res.status(400).json({ message: "empty" });
      // console.log(data);
      return res.status(200).json({ data });
    })
    .catch((err) => {
      return res.status(401).json({ message: err });
    });
};

exports.searchGV = (req, res) => {
  const { search, authorities, sort, reverse, page, limit, Class } = req.query;
  // console.log(req.query);
  var pages = 0;
  if (+page != 1) {
    // nếu page=1 thi bắt đầu lấy từ phần tử 0
    pages = (page * 1 - 1) * +limit;
  }
  // const { year, month, day, hour, minute } = req.body;
  const reve = reverse === "true" ? 1 : -1;
  const sorts = sort ? sort : "id";
  roleGV = "GV";
  roleTBM = "TBM";
  if (authorities == "GV") {
    roleGV = "GV";
    roleTBM = "";
  } else if (authorities == "true") {
    roleGV = "GV";
    roleTBM = "TBM";
  } else {
    roleGV = "";
    roleTBM = "TBM";
  }
  Account.find(
    {
      $and: [
        {
          $or: [{ authorities: `${roleGV}` }, { authorities: `${roleTBM}` }],
        },
        { "infor.lastName": { $regex: `${search}` } },
        { "infor.Class.name": { $regex: `${Class}` } },
      ],
    },
    { __v: 0, password: 0 }
  )
    .limit(+limit)
    .skip(pages)
    .sort([[sorts, reve]])
    .then((data) => {
      if (!data) return res.status(400).json({ message: "empty" });
      // console.log(data);
      return res.status(200).json({ data });
    })
    .catch((err) => {
      return res.status(401).json({ message: err });
    });
};
