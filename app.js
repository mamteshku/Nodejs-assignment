const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const compression = require("compression");
const mongoose = require("mongoose");
const helmet = require("helmet");
const app = express();
const http = require("http");

const user = require("./routes/user");
const project = require("./routes/project")
const config = require("./config");
const accessController = require("./custom/accessControl").accessController;

// Database connections
mongoose.connect(config.server.database, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("mongodb connected!");
}).catch((error) => {
  console.log(error);
});

app.use(compression());
app.use(helmet());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  bodyParser.urlencoded({ limit: "10mb", extended: true, parameterLimit: 1000 })
);
app.use(accessController);
app.use(morgan("combined"));


app.use(config.server.api, user);
app.use(config.server.api, project)

// create server
http.createServer(function (req, res) {
  app.handle(req, res);
}).listen(3000);
console.log(`App Started 3000!`);