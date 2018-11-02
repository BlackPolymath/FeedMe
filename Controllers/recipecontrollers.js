const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  console.log("one recipe");
});


router.get("/", (req, res) => {
  res.render("indexviews");
});

module.exports = router;
