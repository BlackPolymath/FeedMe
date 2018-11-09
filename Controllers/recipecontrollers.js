const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.render('showviews')
});


router.get("/", (req, res) => {
  res.render("indexviews");
});

module.exports = router;
