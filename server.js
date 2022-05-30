const mongoose = require('mongoose')
const dotenv = require('dotenv')

// Handling UNCAUGHT EXCEPTION errors
process.on('uncaughtException', (err) => {
    console.log('\x1b[31m', '[UNCAUGHT EXCEPTION] Shutting down...')
    console.log(err.name, err.message)
    process.exit(1)
})

dotenv.config({ path: './config.env' })
const app = require('./app')

// MongoDB database connection
const DB = process.env.DB_CONNECTION_STRING.replace(
    '<DATABASE_NAME>',
    process.env.DATABASE_NAME
).replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('\x1b[32m', '[MongoDB] Database connection successful')
    })

// Local server connection
const port = process.env.PORT || 3000
const server = app.listen(port, () =>
    console.log('\x1b[36m', `[Express] App listening at http://localhost:${port}`)
)

// Handling UNHANDLED REJECTION errors
process.on('unhandledRejection', (err) => {
    console.log('\x1b[31m', '[UNHANDLED REJECTION] Shutting down...')
    console.log(err.name, err.message)
    server.close(() => {
        process.exit(1)
    })
})

// Handling SIGTERM RECEIVED errors
process.on('SIGTERM', () => {
    console.log('\x1b[31m', '[SIGTERM RECEIVED] Shutting down gracefully')
    server.close(() => {
        console.log('\x1b[31m', '[APP] Process terminated!')
    })
})
