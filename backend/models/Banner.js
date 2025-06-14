const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  title: String,
  image_url: String,
  link: String,
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Banner', bannerSchema);
