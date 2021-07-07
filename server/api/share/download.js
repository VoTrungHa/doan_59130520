const path = require("path");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const xml2js = require("xml2js");

exports.ViewFileXml = (req, res) => {
  return res.sendFile(
    path.join(__dirname, `../public/xmlfiles/${req.params.id}`)
  );
};

exports.ViewFileHistory = (req, res) => {
  return res.sendFile(
    path.join(__dirname, `../public/history/${req.params.id}`)
  );
};

exports.GeneralFilePDF = (req, res, next) => {
  // console.log(req.body)
  const Arr = { Questions: { Question: req.body } };
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(Arr);
  fs.writeFile(
    path.join(__dirname, "../public/xmlfiles/question.xml"),
    xml,
    (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      }
      return res.status(200).json({ message: "success" });
    }
  );
};

exports.GeneralFileKetquaXml = (req, res) => {
  //console.log(req.body);
  const Arr = { Ketqua: { dethi: req.body.data } };
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(Arr);
  fs.writeFile(
    path.join(__dirname, `../public/xmlfiles/ketqua.xml`),
    xml,
    (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      }
      return res.status(200).json({ message: "success" });
    }
  );
};

exports.GeneralFileBailamXml = (req, res) => {
  // console.log(req.body);
  const Arr = { Bailam: req.body };
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(Arr);
  fs.writeFile(
    path.join(__dirname, `../public/xmlfiles/bailam.xml`),
    xml,
    (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      }
      return res.status(200).json({ message: "success" });
    }
  );
};

exports.GeneralFile = (req, res, next) => {
  // console.log(req.body);
  const Arr = { Dethi: req.body.data };
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(Arr);
  fs.writeFile(
    path.join(__dirname, `../public/xmlfiles/${req.body.filename}`),
    xml,
    (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      }
      return res.status(200).json({ message: "success" });
    }
  );
};
