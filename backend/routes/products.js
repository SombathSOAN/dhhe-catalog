const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createProduct,
  listProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

router.get('/', listProducts);
router.get('/:id', getProduct);
router.post('/', auth, createProduct);
router.put('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;
