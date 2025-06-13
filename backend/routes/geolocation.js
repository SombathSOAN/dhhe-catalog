const express = require('express');
const router = express.Router();
const { getUserLocation } = require('../controllers/geolocationController');

router.get('/', getUserLocation);

module.exports = router;
