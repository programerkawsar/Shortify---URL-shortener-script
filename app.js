const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const rateLimit = require('express-rate-limit')
const mongoSanitize = require('express-mongo-sanitize')
const xssClean = require('xss-clean')
const hpp = require('hpp')
const compression = require('compression')
const path = require('path')

// Application error handling file
const AppError = require('./utils/appError')
// Global error handling file
const globalErrorHandler = require('./controllers/errorController')

// Routes
const urlRouter = require('./routes/urlRoutes')
const userRouter = require('./routes/userRoutes')
const statisticRouter = require('./routes/statisticRoutes')

const app = express()

// Enable trusted proxy
app.enable('trust proxy')

// Allow cors for all origin
app.use(cors())
// Access-Control-Allow-Origin *
// app.use(cors({
//   origin: 'http://localhost:3000'
// }))

// Allow for all HTTP requests
app.options(process.env.CORS_ORIGIN, cors())

// Serving static files
app.use(express.static('public'))
app.use(`/visit/:id`, express.static('public'))
app.use(`/reset-password/:id`, express.static('public'))

// Set security HTTP headers
app.use(helmet())

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Parses cookies attached to the client request object
app.use(cookieParser())

// Limit requests from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 15 * 60 * 1000,
    handler(req, res) {
        return res.status(429).json({
            status: 'error',
            message: 'Too many requests from this IP, please try again in an hour!',
        })
    },
})
app.use('/api', limiter)

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// Data sanitization against NoSQL query injection
app.use(mongoSanitize())

// Data sanitization against XSS
app.use(xssClean())

// Prevent parameter pollution
app.use(hpp())

// Compression middleware makes it faster our app
app.use(compression())

// convert request time to ISO format
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next()
})

// API URL
const api = process.env.API_URL

// Route middlewares
app.use(`${api}/urls`, urlRouter)
app.use(`${api}/users`, userRouter)
app.use(`${api}/statistics`, statisticRouter)

// If the API request is not found
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(globalErrorHandler)

module.exports = app
