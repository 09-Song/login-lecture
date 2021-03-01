"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

//요청
router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

module.exports = router;