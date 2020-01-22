// Set up express 🚀
const express = require("express");

// Set up routes and middeware 🏇
const usersRouter = require("./routers/users");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

// Enable express on server 🚀
const server = express();

// Enable routes and middleware 🐎
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("dev"));
server.use(logger);
server.use("/api/users", usersRouter);

// Enable MOTD 💬
server.get("/", (req, res) => {
  res.send(
    `<h2>Welcome To My Postgresql Database!</h2> <h4>Add "/api/users" to the end of this url to see the list of users!</h4>`
  );
});

/* 🔥 Custom middleware 🔥 */
function logger(req, res, next) {
  console.log(`${req.method} request received`);
  next();
}

// Export server 🚀
module.exports = server;
