const shortID = require('shortid')
const getPublicIP = require('external-ip')()
const geoIP = require('geoip-country')
const URL = require('../models/urlModel')
const Visitor = require('../models/visitorModel')
const factory = require('./handlerFactory')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')

exports.setProperties = (req, res, next) => {
    const generatedID = shortID.generate()
    const APP_URL = process.env.SHORT_URL_DOMAIN || `${req.protocol}://${req.get('host')}/`

    if (req.userId && req.method === 'POST') req.body.user = req.userId

    req.body.shortedId = generatedID
    req.body.shortURL = APP_URL + generatedID

    next()
}

exports.visitURL = catchAsync(async (req, res, next) => {
    const shortedId = req.params.id
    const doc = await URL.findOneAndUpdate(
        { shortedId },
        { $inc: { clicks: 1 } },
        { new: true }
    ).select('+password')

    if (!doc) return next(new AppError('No document found with that ID!', 404))

    if (doc.checkMaxClicks(doc.clicks)) {
        return next(new AppError('Access denied! No more clicks are acceptable', 400))
    }

    if (doc.checkExpiryDate()) {
        return next(new AppError('Sorry, the short URL has been expired!', 400))
    }

    if (doc.password) {
		const password = req.body.password || req.query.password
		
        if (!password)
            return next(new AppError('The short URL is protected by a password!', 403))

        if (!(await doc.checkPassword(password, doc.password))) {
            return next(new AppError('The password you entered is incorrect!', 401))
        }
    }

    getPublicIP(async (err, ip) => {
        if (err) return next(new AppError('Visitor public IP was not found!', 500))

        const { country } = await geoIP.lookup(ip)
        const visit = await Visitor.findOne({ url: doc.id, publicIp: ip })

        if (!visit) await Visitor.create({ url: doc.id, publicIp: ip, country })
    })

    res.status(200).json({
        status: 'success',
        data: doc,
    })
})

exports.setCurrentUser = async (req, res, next) => {
    req.query.user = req.user.id
    next()
}

exports.getAllURLs = factory.getAll(URL)
exports.getURL = factory.getOne(URL, [{ path: 'user', select: 'name email' }, { path: 'visitors', select: 'country createdAt -url' }])
exports.createURL = factory.createOne(URL)
exports.updateURL = factory.updateOne(URL)
exports.deleteURL = factory.deleteOne(URL)
