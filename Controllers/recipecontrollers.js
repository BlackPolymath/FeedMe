const express = require("express");
const router = express.Router();
//const Todos = require('../models/todoModel)

router.get("/:id", (req, res) => {
  console.log("specific recipe");
});

router.post("/create", (req, res) => {});

router.get("/", (req, res) => {
  console.log("in the items route");
  res.render("indexrouter");
});

module.exports = router;
