const express = require("express");
const router = express.Router();
const recipecontrollers = require("../Controllers/recipecontrollers");

router.post("/", recipecontrollers.create);
router.get("/new", recipecontrollers.new);
router.get("/:id", recipecontrollers.show);
router.put("/:id", recipecontrollers.update);

module.exports = router;
