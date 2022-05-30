const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const urlSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        shortedId: {
            type: String,
            trim: true,
            unique: 'Shorted ID must be unique!',
            required: [true, 'Shorted ID must be required'],
        },
        shortURL: {
            type: String,
            trim: true,
            unique: 'Short URL must be unique!',
            required: [true, 'Short URL must be required'],
        },
        originalURL: {
            type: String,
            trim: true,
            required: [true, 'Original URL must be required'],
            validate: [validator.isURL, 'Please provide a valid original URL'],
        },
        clicks: {
            type: Number,
            default: 0,
        },
        maxClicks: Number,
        expiryDate: {
            type: Date,
            validate: {
                // Validate date and check past dates
                validator() {
                    const currDate = new Date()
                    const inputDate = new Date(this.expiryDate)

                    return !(inputDate !== currDate && inputDate < currDate)
                },
                message: () => `Refrain from using past dates!`,
            },
        },
        password: {
            type: String,
            select: false,
            minlength: [8, 'Password must be at least 8 characters'],
        },
        active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
)

// Indexing for faster performance
urlSchema.index({ shortedId: -1, shortURL: 1 }, { unique: true })
urlSchema.index({ user: 1, clicks: -1, active: -1 })

// Populate the user & replies when find() method call
urlSchema.pre('find', function (next) {
    this.populate([
        {
            path: 'user',
            select: 'name email',
        },
        {
            path: 'visitors',
            select: '_id -url',
        },
    ])

    next()
})

// Hashing password before save
urlSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

urlSchema.methods.checkMaxClicks = function (clicks) {
    if (this.maxClicks) {
        return clicks > this.maxClicks
    }

    return false
}

urlSchema.methods.checkExpiryDate = function () {
    if (this.expiryDate) {
        const expiryTimestamp = this.expiryDate.getTime()
        return Date.now() > expiryTimestamp
    }

    return false
}

urlSchema.methods.checkPassword = async function (bodyPassword, correctPassword) {
    if (correctPassword) {
        const response = await bcrypt.compare(bodyPassword, correctPassword)
        return response
    }

    return false
}

urlSchema.virtual('visitors', {
    ref: 'Visitor',
    foreignField: 'url',
    localField: '_id',
})

// It is more convenient to use the name id than _id
urlSchema.virtual('id').get(function () {
    return this._id.toHexString()
})

module.exports = mongoose.model('URL', urlSchema)
