const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')
const APIFeatures = require('../utils/apiFeatures')

// Delete single document
exports.deleteOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id)

        if (!doc) {
            return next(new AppError('No document found with that ID!', 404))
        }

        res.status(202).json({
            status: 'success',
            data: doc,
        })
    })

// Update single document
exports.updateOne = (Model) =>
    catchAsync(async (req, res, next) => {
        if (Object.keys(req.body).length === 0) {
            return next(new AppError('You did not include any fields', 400))
        }

        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })

        if (!doc) {
            return next(new AppError('No document found with that ID!', 404))
        }

        res.status(200).json({
            status: 'success',
            data: doc,
        })
    })

// Create a document
exports.createOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.create(req.body)

        res.status(201).json({
            status: 'success',
            data: doc,
        })
    })

// Get a document
exports.getOne = (Model, popOptions) =>
    catchAsync(async (req, res, next) => {
        let query = Model.findById(req.params.id)
        if (popOptions) query = query.populate(popOptions)
        const doc = await query

        if (!doc) {
            return next(new AppError('No document found with that ID!', 404))
        }

        res.status(200).json({
            status: 'success',
            data: doc,
        })
    })

// Get all documents with all API features
exports.getAll = (Model) =>
    catchAsync(async (req, res, next) => {
        let filter = {}
        if (req.params.urlId) filter = { url: req.params.urlId }

        // Get all data & also filtering
        const features = new APIFeatures(Model.find(filter), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate()
        const doc = await features.query

        res.status(200).json({
            status: 'success',
            results: doc.length,
            data: doc,
        })
    })
