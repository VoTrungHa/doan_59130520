const Router = require("express").Router();
const AccountController = require("../controllers/Account.Controller");
const QuestionController = require("../controllers/Question.Controller");
const DethiController = require("../controllers/DeThi.Controller");
const BaiLamController = require("../controllers/BaiLai.Controller");
const Upload = require("../share/uploadFile");
const Download = require("../share/download");
const Lop = require("../controllers/lop.controller");
const kyThi = require("../controllers/kyThi.Controller");
const taiLieu = require("../controllers/Tailieu.Controller");
const themeController = require("../controllers/theme.Controller");
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./api/public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

var storageIMG = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/image/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var uploadIMG = multer({ storage: storageIMG });

exports.InitRouterUser = (app) => {
  // uploadImg

  Router.post(
    "/api/upload/image",
    uploadIMG.single("file"),
    Upload.uploadImage
  );
  //upload file
  Router.post(
    "/api/upload/question",
    upload.single("file"),
    Upload.UploadQuestion
  );
  Router.post(
    "/api/uploadXml/question",
    upload.single("file"),
    Upload.uploadXml
  );

  //upload Dethi

  Router.post(
    "/api/uploadQuestion/dethi",
    upload.single("file"),
    DethiController.uploadQuesTXT
  );
  Router.post(
    "/api/uploadXmlQuestion/dethi",
    upload.single("file"),
    DethiController.uploadQuesXML
  );

  // download
  Router.get("/api/viewXml/:id", Download.ViewFileXml);
  // download
  Router.get("/api/history/:id", Download.ViewFileHistory);

  Router.post("/api/ketquaxml", Download.GeneralFileKetquaXml);
  // Router.get("/api/viewXml/:id", Download.GeneralFileKetquaXml);

  Router.get("/api/excel/:name", BaiLamController.viewFileExcelKetqua);

  Router.post("/api/downloadFile/question", Download.GeneralFilePDF);
  Router.post("/api/downloadFileXml/bailam", Download.GeneralFileBailamXml);

  // dowload for dethi
  Router.post("/api/downloadFile/all", Download.GeneralFile);

  // Router.get("/getfile",AccountController.getfile);
  // Router.post("/create",AccountController.createAccuont);
  Router.post("/api/login", AccountController.login);
  Router.post("/api/register", AccountController.registerAccount);
  Router.get("/api/profile/:id", AccountController.getInfo);
  Router.get("/api/thanhvien/sinhviens", AccountController.getAll);
  Router.get("/api/thanhvien/giaovien/query", AccountController.searchGV);
  Router.get("/api/thanhvien/sinhvien/query", AccountController.search);
  Router.post("/api/delete/thanhvien/:id", AccountController.delete);
  Router.put("/api/thanhvien/thaydoi/:id", AccountController.update);
  Router.get("/api/getAccountGv", AccountController.getAllAccountGV);

  Router.post("/api/deleteadmin", AccountController.deleteAdmin);
  // Question
  Router.post("/api/question/create", QuestionController.createQuestion);
  Router.put("/api/question/update/:id", QuestionController.UpdateById);
  Router.post("/api/question/delete/:id", QuestionController.DeleteById);
  Router.get("/api/question/query", QuestionController.SearchMulti);
  Router.get("/api/questions/", QuestionController.getAll);

  // de thi

  Router.get("/api/dethi/getone/:id", DethiController.getById);
  Router.post("/api/dethi/create", DethiController.Create);
  Router.put("/api/dethi/thaydoi/:id", DethiController.Update);
  Router.post("/api/dethi/pheduyet/:id", DethiController.DuyetDeThi);
  Router.get("/api/dethi/getDuyet/:id", DethiController.getByIdTwo);
  Router.get("/api/dethis", DethiController.getDethi);
  Router.get("/api/dethi/search", DethiController.search);
  Router.post("/api/dethi/delete/:id", DethiController.delete);
  Router.post("/api/dethiCreateBy", DethiController.getDeThiById);
  Router.get("/api/getalldethibyid/:id/query", DethiController.getAllDethiById);
  Router.post("/api/getbystatetrue", DethiController.getAllByStateTrue);
  Router.post("/api/getbystatefalse", DethiController.getAllByStatefalse);
  Router.post("/api/getbyclass", DethiController.getDeThiByClass);
  // Bai lam
  Router.post("/api/bailam/create", BaiLamController.Create);
  Router.post("/api/bailam/update", BaiLamController.update);
  Router.get("/api/bailam/getAll", BaiLamController.getAll);
  Router.get("/api/bailambyid/:id", BaiLamController.getBaiLamById);
  Router.post(
    "/api/bailambyidandperformer",
    BaiLamController.getBaiLamByIdandPerformer
  );
  Router.get("/api/bailam/search/query", BaiLamController.loadAll);
  Router.get("/api/bailam/loadAll/:id", BaiLamController.loadAllByperfomer);
  Router.post("/api/bailam/fileExcel", BaiLamController.exportFileExcel);
  // Lop
  Router.post("/api/lop/create", Lop.Create),
    Router.get("/api/lop", Lop.getAll);

  // chu de
  Router.post("/api/chude/createTheme", themeController.create);
  Router.get("/api/chude/getAllTheme", themeController.getAll);

  // ky thi
  Router.post("/api/create/kythi", kyThi.create);
  Router.get("/api/kythi", kyThi.getAll);
  // Tai liệu
  Router.get("/api/tailieu/query", taiLieu.SearchMulti);
  Router.post("/api/tailieu/create", taiLieu.Create);
  Router.get("/api/tailieu", taiLieu.getAll);
  Router.put("/api/update/tailieu/:id", taiLieu.updateById);
  Router.get("/api/tailieu/:id", taiLieu.getDocsById);
  Router.delete("/api/delete/tailieu/:id", taiLieu.delete);
  /// Account created By Admin
  Router.post("/api/created/sinhvien", AccountController.createAccuontAdmin);
  return app.use("/", Router);
};
