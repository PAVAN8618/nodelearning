// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("hello pawan");
// });

// server.listen(3000);
const express = require("express");
const app = express();

const path = require("path");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoute);
app.use(shopRoute);

app.use((req, res) => {
  res.status(400).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen("3000");
