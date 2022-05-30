const mongoose = require('mongoose')

const visitorSchema = new mongoose.Schema(
    {
        url: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'URL',
            required: [true, 'URL ID must be required'],
        },
        publicIp: {
            type: String,
            trim: true,
            required: [true, 'Public IP must be required'],
        },
        country: {
            type: String,
            trim: true,
            required: [true, 'Country name must be required'],
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
visitorSchema.index({ url: 1, country: 1 })

module.exports = mongoose.model('Visitor', visitorSchema)
