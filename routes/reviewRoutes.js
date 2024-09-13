// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const { createReview, getCarReviews } = require('../controllers/reviewController');

router.post('/reviews', createReview);
router.get('/reviews/car/:carId', getCarReviews);

module.exports = router;
