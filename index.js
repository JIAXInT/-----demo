const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
var http = require("http").Server(app);
const io = require("socket.io")(http, { cors: true });

io.on("connection", function (socket) {
  socket.on("kehu message", function (msg) {
    io.emit("kehu message", msg);
    console.log("kehu message: " + msg);
  });

  socket.on("kefu message", function (msg) {
    io.emit("kefu message", msg);
    console.log("kefu message: " + msg);
  });
});

app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

http.listen(3000, function () {
  console.log("listening on *:3000");
});
