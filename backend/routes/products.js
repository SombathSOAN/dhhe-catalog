const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createProduct,
  listProducts,
  searchProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  bulkImport,
  bulkExport
} = require('../controllers/productController');

router.get('/', listProducts);
router.get('/search', searchProducts);
router.get('/:id', getProduct);
router.post('/', auth, createProduct);
router.put('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);
router.post('/import', auth, bulkImport);
router.get('/export', bulkExport);

module.exports = router;
