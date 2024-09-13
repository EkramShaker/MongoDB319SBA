// index.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const carRoutes = require('./routes/carRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(express.json());

// Use the routes
app.use('/', userRoutes);
app.use('/', carRoutes);
app.use('/', reviewRoutes);

const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/carDB';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
