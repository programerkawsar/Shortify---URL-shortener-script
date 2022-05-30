const router = require('express').Router()

const { protect, restrictTo } = require('../controllers/authController')
const statisticController = require('../controllers/statisticController')

router.route('/user').get(protect, statisticController.statisticsForUser)
router.route('/user/url/:id').get(protect, statisticController.statisticsForUser)
router.route('/admin').get(protect, restrictTo('admin'), statisticController.statisticsForAdmin)
router
    .route('/admin/url/:id')
    .get(protect, restrictTo('admin'), statisticController.statisticsForAdmin)

router.route('/user/totals').get(protect, statisticController.getTotalsForUser)
router
    .route('/admin/totals')
    .get(protect, restrictTo('admin'), statisticController.getTotalsForAdmin)

module.exports = router
