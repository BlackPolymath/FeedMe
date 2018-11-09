const express = require("express");
const app = express();
const RecipeCtrl = require("./controllers/recipecontrollers");

app.set("view engine", "hbs");

app.use(RecipeCtrl);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
