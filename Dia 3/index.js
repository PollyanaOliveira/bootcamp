const express = require("express");

const app = express();

let products = require("./products");

app.use(express.json());

// POST para adicionar 4 produtos, de uma vez.

app.post("/produtos", (req, res) => {
  const product = req.body;
  products = [...products, product];

  res.status(201).json(products);
});

// PUT para modificar um desses produtos.

app.put("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const content = req.body;

  const product = products.find((product) => product.id === id);

  if (!product) return res.status(400).json({ message: "Product not found" });

  products = products.map((item) => (item.id === id ? content : product));

  res.status(200).json(products);
});

// DELETE para deletar um desses produtos.

app.delete("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({ message: "This product does not exist" });
  }

  products = products.filter((item) => item.id !== id);

  res.json(products);
});

// GET para verificar os que foram mantidos.

app.get("/produtos", (_req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000/");
});
