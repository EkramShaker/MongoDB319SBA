// controllers/carController.js
const Car = require('../models/carModel');

// Create a new car
const createCar = async (req, res) => {
    try {
        const newCar = new Car(req.body);
        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all cars
const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find().populate('owner');
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get a car by ID
const getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a car by ID
const updateCarById = async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCar) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a car by ID
const deleteCarById = async (req, res) => {
    try {
        const deletedCar = await Car.findByIdAndDelete(req.params.id);
        if (!deletedCar) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createCar,
    getAllCars,
    getCarById,
    updateCarById,
    deleteCarById
};
