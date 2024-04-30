const express = require("express");
const router = express.Router();
const path = require("path");

const rootDir = require("../utils/path");

router.get("/product-add", (req, res, next) => {
  //res.sendFile(path.join(__dirname, "../", "views", "admin.html"));
  res.sendFile(path.join(rootDir, "views", "admin.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body);

  res.redirect("/");
});

module.exports = router;
