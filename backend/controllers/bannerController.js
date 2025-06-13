const Banner = require('../models/Banner');

async function createBanner(req, res) {
  try {
    const banner = await Banner.create(req.body);
    res.status(201).json(banner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function listBanners(req, res) {
  const banners = await Banner.find();
  res.json(banners);
}

async function getBanner(req, res) {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) return res.status(404).json({ message: 'Not found' });
    res.json(banner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateBanner(req, res) {
  try {
    const banner = await Banner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!banner) return res.status(404).json({ message: 'Not found' });
    res.json(banner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteBanner(req, res) {
  try {
    const banner = await Banner.findByIdAndDelete(req.params.id);
    if (!banner) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  createBanner,
  listBanners,
  getBanner,
  updateBanner,
  deleteBanner
};
