"use strict";

const express = require("express");
const app = express();


const home = require("./src/routes/home")

//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // 미들웨어

module.exports = app;