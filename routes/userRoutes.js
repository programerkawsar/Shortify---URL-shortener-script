const router = require('express').Router()

// Authentication & Users routes
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

// Authentication routes
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.post('/forgot-password', authController.forgotPassword)
router.put('/reset-password/:token', authController.resetPassword)

// The user must be logged in to access below the routes
router.use(authController.protect)

// Users routes
router.get('/me', userController.getMe, userController.getUser)
router.put('/updateMe', userController.updateMe)
router.put('/updateMyPassword', authController.updatePassword)
router.delete('/deleteMe', userController.deleteMe)

// The user role must be admin to enter below the routes
router.use(authController.restrictTo('admin'))

router.put('/disableUser/:id', userController.disableUser)
router.put('/activeUser/:id', userController.activeUser)
router.route('/').get(userController.getAllUsers).post(userController.createUser)

router
    .route('/:id')
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = router
