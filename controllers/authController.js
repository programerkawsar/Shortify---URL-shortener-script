const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const User = require('../models/userModel')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')
const EmailTransmitter = require('../utils/emailTransmitter')

// Set JWT authentication token
const signToken = (id) => {
    // Token sign by user ID
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN, // JWT token expiry time
    })
}

// Create JWT authentication token
const createSendToken = (user, statusCode, req, res) => {
    // Set JWT token
    const token = signToken(user.id)

    // Set JWT token in browser cookie
    res.cookie('jwt', token, {
        // Cookie expiry date
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000 // Convert into 90 days
        ),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    })

    // Remove password from cookie
    user.password = undefined

    // Server response
    res.status(statusCode).json({
        status: 'success',
        token,
        data: user,
    })
}

// User registration
exports.register = catchAsync(async (req, res, next) => {
    // Create user using specific field
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    // Send welcome email
    await new EmailTransmitter(user).sendWelcomeEmail()

    // Sign in & Create auth token
    createSendToken(user, 201, req, res)
})

// User Login
exports.login = catchAsync(async (req, res, next) => {
    // Get only email & password from request body
    const { email, password } = req.body

    // Empty Check
    if (!email || !password) {
        // Returning error message with status code
        return next(new AppError('Email and password both fields are required', 400))
    }

    // Get user data by email with password
    const user = await User.findOne({ email }).select('+password')

    // If user account not active
    if (user && user.active === false) {
        // Returning error message with status code
        return next(new AppError('Your account has been deactivated!', 401))
    }

    // Checking email existence and also correct password
    // 'correctPassword()' function executed in user model
    if (!user || !(await user.correctPassword(password, user.password))) {
        // Returning error message with status code
        return next(new AppError('Incorrect email or password!', 401))
    }

    // Sign in & Create auth token
    createSendToken(user, 200, req, res)
})

// User logout
exports.logout = (req, res, next) => {
    // Destroy browser cookie
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000), // Set expiry time by current time
        httpOnly: true,
    })

    res.clearCookie('jwt')

    // Server response
    res.status(200).json({
        status: 'success',
        message: 'You have successfully logged out!',
    })
}

// Forgot password
exports.forgotPassword = catchAsync(async (req, res, next) => {
    // Get user data by email
    const user = await User.findOne({ email: req.body.email })

    // When user not found
    if (!user) {
        // Returning error message with status code
        return next(new AppError('There is no user with this email address!', 404))
    }

    // Generate password reset token
    // 'createPasswordResetToken()' function executed in user model
    const resetToken = user.createPasswordResetToken()
    // Save user and validation not working before save
    await user.save({ validateBeforeSave: false })

    try {
        // Base URL
        const baseURL = `${req.protocol}://${req.get('host')}/`
        // Password reset URL
        const resetURL = `${baseURL}/reset-password/${resetToken}`
        // Send password reset email
        await new EmailTransmitter(user).sendPasswordResetEmail(resetURL)

        // Server response
        res.status(200).json({
            status: 'success',
            message: 'Password reset link has been sent to your email',
        })
    } catch (err) {
        // When error occurred
        user.passwordResetToken = undefined
        user.passwordResetExpires = undefined
        // Set 'passwordResetToken' & 'passwordResetExpires' field undefined
        await user.save({ validateBeforeSave: false })

        // Returning error message with status code
        return next(new AppError('There was an error sending the email. Try again later!'), 500)
    }
})

// Password reset
exports.resetPassword = catchAsync(async (req, res, next) => {
    // Generate hash
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

    // Checking token expiry date
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() },
    })

    // When user not found
    if (!user) {
        // Returning error message with status code
        return next(new AppError('Token is invalid or has expired!', 400))
    }

    // Set new password & Save to database
    user.password = req.body.password
    user.passwordResetToken = undefined // Set empty
    user.passwordResetExpires = undefined // Set empty
    await user.save()

    // Sign in & Create auth token
    createSendToken(user, 200, req, res)
})

// Update password
exports.updatePassword = catchAsync(async (req, res, next) => {
    // Get user data by user id with password
    const user = await User.findById(req.user.id).select('+password')

    // Checking old password
    // 'correctPassword()' function executed in user model
    if (!(await user.correctPassword(req.body.currentPassword, user.password))) {
        // Returning error message with status code
        return next(new AppError('Your current password is wrong!', 401))
    }

    // Set new password & Save to database
    user.password = req.body.newPassword
    await user.save()

    // Sign in & Create auth token
    createSendToken(user, 200, req, res)
})

exports.unprotect = catchAsync(async (req, res, next) => {
    let token

    // Check bearer token existence in request headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    } else if (req.cookies.jwt) {
        // Set JWT token
        token = req.cookies.jwt
    }

    if (token) {
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
        const currentUser = await User.findById(decoded.id)
        if (currentUser && !currentUser.changedPasswordAfter(decoded.iat)) {
            req.userId = currentUser.id
        }
    }

    next()
})

// Check user is authenticated or not
exports.protect = catchAsync(async (req, res, next) => {
    let token

    // Check bearer token existence in request headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    } else if (req.cookies.jwt) {
        // Set JWT token
        token = req.cookies.jwt
    }

    if (!token) {
        // Returning error message with status code
        return next(new AppError('You are not logged in! Please login to get access', 401))
    }

    // Decode the token & Check token is valid or not
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    const currentUser = await User.findById(decoded.id)

    // When token not valid
    if (!currentUser) {
        // Returning error message with status code
        return next(new AppError('The user belonging to this token does no longer exist!', 401))
    }

    // All other devices will be logged out with the change of password
    // 'changedPasswordAfter()' function executed in user model
    if (currentUser.changedPasswordAfter(decoded.iat)) {
        // Returning error message with status code
        return next(new AppError('User recently changed password! Please login again', 401))
    }

    // If all goes well then store the current user in locals
    req.user = currentUser
    res.locals.user = currentUser
    next()
})

// User roles permission
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        // Checking user role for use the routes
        if (!roles.includes(req.user.role)) {
            // Returning error message with status code
            return next(new AppError('You do not have permission to perform this action!', 403))
        }

        next()
    }
}
