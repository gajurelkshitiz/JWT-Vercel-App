const { UnauthenticatedError } = require('../errors'); 
const jwt = require('jsonwebtoken');

const authenticationMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization; // Bearer token
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('Authentication Invalid');
    }

    const token = authHeader.split(' ')[1]; // get the token from the header

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify the token
 
        const { id, username } = decoded; 
        req.user = { id, username }; // add the user to the request object
        next(); // call the next middleware function
    }
    catch (error) {
        throw new UnauthenticatedError('Not Authorized to access this route');

    }
}

module.exports = authenticationMiddleware; // exporting the middleware function as default export