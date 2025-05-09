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

module.exports = app; // Export the app instance

