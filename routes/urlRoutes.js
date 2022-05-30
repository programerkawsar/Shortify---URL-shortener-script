const router = require('express').Router()

const { unprotect, protect, restrictTo } = require('../controllers/authController')
const urlController = require('../controllers/urlController')

router
    .route('/')
    .get(protect, restrictTo('admin'), urlController.getAllURLs)
    .post(unprotect, urlController.setProperties, urlController.createURL)

router.route('/visit/:id').get(urlController.visitURL)

router.use(protect)

router.route('/me').get(urlController.setCurrentUser, urlController.getAllURLs)

router
    .route('/:id')
    .get(urlController.getURL)
    .put(urlController.setProperties, urlController.updateURL)
    .delete(urlController.deleteURL)

module.exports = router
