// Packages
const express = require('express');
const router = express.Router();

// Controller Routes
const categoryRoutes = require('./controllers/categories');

// Category Routes
router.use('/categories', categoryRoutes);

// If no routes matches
router.use((req, res, next) => {
  if (!req.route) return next({ message: 'No route matched', status: 404 });
  next();
});

module.exports = router;
