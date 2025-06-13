const geoip = require('geoip-lite');

function getUserLocation(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const geo = geoip.lookup(ip) || {};
  res.json({ ip, location: geo });
}

module.exports = { getUserLocation };
