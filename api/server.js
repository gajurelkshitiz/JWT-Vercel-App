require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app'); // Import the app instance
const connectDB = require('./db/connect');

// define a port
const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
