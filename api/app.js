require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const mainRouter = require('./routes/main');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middlewares
app.use(express.static('./public'));
app.use(express.json());


app.use('/api/v1', mainRouter); // mount the main router
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


// connectDB
const mongoose = require('mongoose');
const connectDB = require('./db/connect');





// define a port
const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.PORT}...`);
        })
    }
    catch (error) {
        console.log(error);
    }
}

start();

