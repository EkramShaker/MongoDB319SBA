const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// CRUD Routes
router.post('/cars', carController.createCar);         // Create a car
router.get('/cars', carController.getAllCars);         // Get all cars
router.get('/cars/:id', carController.getCarById);     // Get car by ID
router.put('/cars/:id', carController.updateCarById);  // Update car by ID
router.delete('/cars/:id', carController.deleteCarById); // Delete car by ID

module.exports = router;
