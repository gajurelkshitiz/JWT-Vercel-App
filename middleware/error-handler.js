const { CustomAPIError } = require('../errors'); // importing default export 
const { StatusCodes } = require('http-status-codes'); // importing named export

// const { CustomAPIError } = require('../errors/custom-error');  // yesma jaile error aayo 

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    else{
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ msg: 'Something Went Wrong, Error Occured!' })
    }
}

module.exports = errorHandlerMiddleware;