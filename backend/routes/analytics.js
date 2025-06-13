const express = require('express');
const router = express.Router();
const { getPopularProducts } = require('../controllers/analyticsController');

router.get('/popular', getPopularProducts);

module.exports = router;
