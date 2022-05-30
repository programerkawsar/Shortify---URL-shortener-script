const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'Please tell us your name'],
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            required: [true, 'Please provide your email'],
            validate: [validator.isEmail, 'Please provide a valid email!'],
        },
        password: {
            type: String,
            select: false,
            required: [true, 'Please provide a password'],
            minlength: [8, 'Password must be at least 8 characters'],
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
        passwordChangedAt: Date,
        passwordResetToken: String,
        passwordResetExpires: Date,
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
userSchema.index({ email: 1 }, { unique: true })
userSchema.index({ role: 1, active: 1 })

// Hashing password before save
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

// Set passwordChangedAt field before save
userSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew) return next()
    this.passwordChangedAt = Date.now() - 1000
    next()
})

// Get only active users
/*
userSchema.pre('find', function (next) {
    this.find({ active: { $ne: false } })
    next()
})
*/

// Check correct hash password
userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    // Compare password
    const response = await bcrypt.compare(candidatePassword, userPassword)
    return response
}

// Set date after changed password
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        // Check password changed timestamp
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10)

        return JWTTimestamp < changedTimestamp
    }

    return false
}

// Create password reset token
userSchema.methods.createPasswordResetToken = function () {
    // Generate random token
    const resetToken = crypto.randomBytes(32).toString('hex')

    // Convert token to hash
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    // Set password reset expiry time
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000

    return resetToken
}

// It is more convenient to use the name id than _id
userSchema.virtual('id').get(function () {
    return this._id.toHexString()
})

module.exports = mongoose.model('User', userSchema)
