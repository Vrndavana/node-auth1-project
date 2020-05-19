const express = require("express");
const server = express();
const cors = require("cors");

server.use(session(sessionConfig)); 
server.use(helmet());
server.use(express.json());
server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);
server.use(cors());

server.get("/", (req, res) => {
  res.json({ api: "*Root Server Running*" });
});

// Create The Logic for Your Cookie 
// one hour in milliseconds
// send the cookie only over https, true in production -> secure || true
// true means client JS cannot access the cookie ----------------
const sessionConfig = {
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: process.env.SECURE_COOKIE || false, 
  },
  resave: false,
  saveUninitialized: process.env.USER_ALLOWED_COOKIES || true,
  name: "secretadmin",
  secret: process.env.COOKIE_SECRET || "keepitsecret,keepitsafe!",
};

// turn on sessions for the API ---------
module.exports = server;