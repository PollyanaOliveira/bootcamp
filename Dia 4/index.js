const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
const productsRoute = require("./routes/products");

app.use("/produtos", productsRoute);

app.use("*", (_req, res, next) => {
  res.send("Error 404, Not found");
  next();
});

app.listen(3000, () => {
  console.log(`Listening on http://localhost:${PORT}/`);
});
