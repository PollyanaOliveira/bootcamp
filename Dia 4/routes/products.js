const express = require("express");
const router = express.Router();
const isValidPrice = require("../middlewares/product");

let products = require("../products");

// 1 - Retornar todos os produtos do array

router.get("/", (_req, res) => {
  res.status(200).json(products);
});

// 2 - Obter um produto específico pelo ID

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);
  res.status(200).json(product);
});

// 3 - Adicionar um novo produto

router.post("/", (req, res) => {
  const product = req.body;
  products = [...products, product];

  res.status(201).json(products);
});

// 4 - Mudar uma propriedade do produto (qualquer uma)

router.put("/:id", isValidPrice, (req, res) => {
  const id = Number(req.params.id);
  const content = req.body;

  const product = products.find((product) => product.id === id);

  if (!product) return res.status(400).json({ message: "Product not found" });

  products = products.map((item) => (item.id === id ? content : product));

  res.status(200).json(products);
});

// 5 - Deletar um produto utilizando o ID

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({ message: "This product does not exist" });
  }

  products = products.filter((item) => item.id !== id);

  res.status(200).json({ message: "Product Removed" });
});

module.exports = router;
