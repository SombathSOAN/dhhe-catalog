const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  category: String,
  status: { type: String, default: 'active' },
  thumbnail_url: String,
  gallery_urls: [String],
  contact_info: {
    email: String,
    phone: String
  },
  views: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', productSchema);
