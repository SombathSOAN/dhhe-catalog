const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const analyticsRoutes = require('./routes/analytics');
const bannerRoutes = require('./routes/banners');
const geolocationRoutes = require('./routes/geolocation');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecatalog')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error', err));

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/banners', bannerRoutes);
app.use('/api/geolocation', geolocationRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
