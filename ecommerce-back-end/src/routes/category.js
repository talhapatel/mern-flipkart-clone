const express = require("express");

const router = express.Router();
const shortid = require("shortid");
const { default: slugify } = require("slugify");
const category = require("../models/category");

router.post("/category/create", (req, res) => {});

module.exports = router;
