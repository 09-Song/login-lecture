"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

//요청
router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);


module.exports = router;