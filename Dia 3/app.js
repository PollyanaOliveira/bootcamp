const express = require("express");

const app = express();
const router = express.Router();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

router.get("/", (req, res) => {
  res.redirect("/erro");
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000/");
});
