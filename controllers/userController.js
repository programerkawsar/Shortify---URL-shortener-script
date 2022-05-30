const User = require('../models/userModel')
const factory = require('./handlerFactory')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')

// This filter is because some field user updates are not allowed
// So a new object has been created by omitting these fields
const filterObj = (obj, ...notAllowedFields) => {
    const newObj = {}
    Object.keys(obj).forEach((el) => {
        // Remove not allowed fields
        if (!notAllowedFields.includes(el)) newObj[el] = obj[el]
    })

    return newObj
}

// Get current user data
exports.getMe = (req, res, next) => {
    req.params.id = req.user.id
    next()
}

// Update current user data
exports.updateMe = catchAsync(async (req, res, next) => {
    // Check user put password field or not
    if (req.body.password) {
        // Returning error message with status code
        return next(
            new AppError(
                'This route is not for password updates. Please use /updateMyPassword',
                400
            )
        )
    }

    // It has some fields that are not permitted to update
    const filteredBody = filterObj(req.body, 'password', 'role', 'active')
    // Update user data with filteredBody
    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
        new: true,
        runValidators: true,
    })

    // Server response
    res.status(200).json({
        status: 'success',
        data: updatedUser,
    })
})

// Delete current user account
// It's simply deactivate the account
exports.deleteMe = catchAsync(async (req, res, next) => {
    // Find user and update
    await User.findByIdAndUpdate(req.user.id, { active: false })

    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000), // Set expiry time by current time
        httpOnly: true,
    })

    res.clearCookie('jwt')

    // Server response
    res.status(202).json({
        status: 'success',
        message: 'Your account has been deactivated!',
    })
})

// This function is for notifying the user
exports.createUser = (req, res, next) => {
    // Server response
    res.status(500).json({
        status: 'error',
        message: 'This route is not defined! Please use /register instead',
    })
}

exports.disableUser = catchAsync(async (req, res, next) => {
    // Find user and update
    const response = await User.findByIdAndUpdate(req.params.id, { active: false })

    if (response) {
        // Server response
        res.status(202).json({
            status: 'success',
            message: 'The account has been deactivated!',
        })
    }
})

exports.activeUser = catchAsync(async (req, res, next) => {
    // Find user and update
    const response = await User.findByIdAndUpdate(req.params.id, { active: true })

    if (response) {
        // Server response
        res.status(202).json({
            status: 'success',
            message: 'The account has been activated!',
        })
    }
})

// Doing to complete all other operations using handler factory
exports.getAllUsers = factory.getAll(User)
// Get review with population
exports.getUser = factory.getOne(User)
exports.updateUser = factory.updateOne(User)
exports.deleteUser = factory.deleteOne(User)
