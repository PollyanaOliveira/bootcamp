const isValidPrice = (req, res, next) => {
  const content = req.body;

  if (!content.price) return res.status(400).json("Product without price");
  next();
};

module.exports = isValidPrice;
