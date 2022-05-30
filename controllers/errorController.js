const AppError = require('../utils/appError')

// Handle database common errors
const handleCastErrorDB = (err) => {
    const message = `Invalid ${err.path}: ${err.value}.`
    return new AppError(message, 400)
}

const handleDuplicateFieldsDB = (err) => {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0]
    const message = `Duplicate field value: ${value}. Please use another value!`

    return new AppError(message, 400)
}

const handleValidationErrorDB = (err) => {
    const errors = Object.values(err.errors).map((el) => el.message)
    const message = `Invalid input data. ${errors.join('. ')}`

    return new AppError(message, 400)
}

// Handle JWT errors
const handleJWTError = () => new AppError('Invalid token. Please log in again!', 401)

const handleJWTExpiredError = () => new AppError('Your token has expired! Please log in again', 401)

const handleSMPTAuthenticationError = () =>
    new AppError('SMPT authentication failed! Please check email or password', 401)

// Send development errors
const sendErrorDev = (err, req, res, next) => {
    if (req.originalUrl.startsWith('/api')) {
        // Log error
        console.error('\x1b[31m', '[ERROR]', err)

        return res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack,
        })
    }
}

// Send production errors
const sendErrorProd = (err, req, res, next) => {
    if (req.originalUrl.startsWith('/api')) {
        // Operational, trusted error: send message to client
        if (err.isOperational) {
            return res.status(err.statusCode).json({
                status: err.status,
                message: err.message,
            })
        }

        // Send generic message
        return res.status(500).json({
            status: 'error',
            message: 'Something went very wrong!',
        })
    }
}

module.exports = (err, req, res, next) => {
    // Set status code
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    // Development & Production mode
    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, req, res)
    }

    if (process.env.NODE_ENV === 'production') {
        if (err.name === 'CastError') err = handleCastErrorDB(err)
        if (err.code === 11000) err = handleDuplicateFieldsDB(err)
        if (err.name === 'ValidationError') err = handleValidationErrorDB(err)
        if (err.name === 'JsonWebTokenError') err = handleJWTError()
        if (err.name === 'TokenExpiredError') err = handleJWTExpiredError()
        if (err.code === 'EAUTH') err = handleSMPTAuthenticationError()

        sendErrorProd(err, req, res)
    }
}
