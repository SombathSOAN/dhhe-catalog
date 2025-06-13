const Product = require('../models/Product');

async function getPopularProducts(req, res) {
  const products = await Product.find().sort({ views: -1 }).limit(10);
  res.json(products);
}

module.exports = { getPopularProducts };
