const {
    Types: { ObjectId },
} = require('mongoose')
const URL = require('../models/urlModel')
const Visitor = require('../models/visitorModel')
const User = require('../models/userModel')
const catchAsync = require('../utils/catchAsync')

exports.getTotalsForUser = catchAsync(async (req, res, next) => {
    const sumOfUrls = await URL.aggregate([
        { $match: { user: new ObjectId(req.user.id) } },
        {
            $group: {
                _id: null,
                clicks: { $sum: '$clicks' },
                urls: { $sum: 1 },
            },
        },
    ])

    res.status(200).json({
        status: 'success',
        data: {
            urls: sumOfUrls[0].urls,
            clicks: sumOfUrls[0].clicks,
        },
    })
})

exports.statisticsForUser = catchAsync(async (req, res, next) => {
    const shortedId = req.params.id
    const filterForUrl = shortedId
        ? { user: new ObjectId(req.user.id), shortedId }
        : { user: new ObjectId(req.user.id) }

    const urlData = await URL.aggregate([
        { $match: filterForUrl },
        {
            $group: {
                _id: {
                    $dateToString: {
                        date: '$_id',
                        format: '%Y-%m-%d',
                    },
                },
                clicks: { $sum: '$clicks' },
                createdLinks: { $sum: 1 },
            },
        },
    ])

    const filterForCountry = shortedId
        ? { 'url.user': new ObjectId(req.user.id), 'url.shortedId': shortedId }
        : { 'url.user': new ObjectId(req.user.id) }

    const countryData = await Visitor.aggregate([
        {
            $lookup: {
                from: 'urls',
                as: 'url',
                localField: 'url',
                foreignField: '_id',
            },
        },
        { $match: filterForCountry },
        {
            $group: {
                _id: '$country',
                clicks: { $sum: 1 },
            },
        },
    ])

    res.status(200).json({
        status: 'success',
        data: {
            urls: urlData,
            countries: countryData,
        },
    })
})

exports.getTotalsForAdmin = catchAsync(async (req, res, next) => {
    const totalUsers = await User.countDocuments()
    const sumOfUrls = await URL.aggregate([
        {
            $group: {
                _id: null,
                clicks: { $sum: '$clicks' },
                urls: { $sum: 1 },
            },
        },
    ])

    res.status(200).json({
        status: 'success',
        data: {
            users: totalUsers,
            urls: sumOfUrls[0].urls,
            clicks: sumOfUrls[0].clicks,
        },
    })
})

exports.statisticsForAdmin = catchAsync(async (req, res, next) => {
    const shortedId = req.params.id
    const filterForUrl = shortedId ? { shortedId } : {}

    const urlData = await URL.aggregate([
        { $match: filterForUrl },
        {
            $group: {
                _id: {
                    $dateToString: {
                        date: '$_id',
                        format: '%Y-%m-%d',
                    },
                },
                clicks: { $sum: '$clicks' },
                createdLinks: { $sum: 1 },
            },
        },
    ])

    const filterForCountry = shortedId ? { 'url.shortedId': shortedId } : {}

    const countryData = await Visitor.aggregate([
        {
            $lookup: {
                from: 'urls',
                as: 'url',
                localField: 'url',
                foreignField: '_id',
            },
        },
        { $match: filterForCountry },
        {
            $group: {
                _id: '$country',
                clicks: { $sum: 1 },
            },
        },
    ])

    const userData = await User.aggregate([
        {
            $group: {
                _id: {
                    $dateToString: {
                        date: '$_id',
                        format: '%Y-%m-%d',
                    },
                },
                numOfUsers: { $sum: 1 },
            },
        },
    ])

    const users = shortedId ? undefined : userData

    res.status(200).json({
        status: 'success',
        data: {
            urls: urlData,
            countries: countryData,
            users,
        },
    })
})
