const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createBanner,
  listBanners,
  getBanner,
  updateBanner,
  deleteBanner
} = require('../controllers/bannerController');

router.get('/', listBanners);
router.get('/:id', getBanner);
router.post('/', auth, createBanner);
router.put('/:id', auth, updateBanner);
router.delete('/:id', auth, deleteBanner);

module.exports = router;
