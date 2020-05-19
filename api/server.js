const express = require("express");
const server = express();


server.use(express.json());

server.get("/", (req, res) => {
  res.json({ api: "*Root Server Running*" });
});

module.exports = server;