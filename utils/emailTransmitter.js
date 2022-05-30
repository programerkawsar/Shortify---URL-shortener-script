const nodemailer = require('nodemailer')
const htmlToText = require('html-to-text')

// Email templates
const passwordResetEmailTemplate = require('../email-templates/passwordReset')
const welcomeEmailTemplate = require('../email-templates/welcomeEmail')

class EmailTransmitter {
    constructor(user) {
        this.to = user.email
        this.name = user.name
        this.from = `${process.env.APP_NAME} <${process.env.EMAIL_FROM}>`
    }

    // Create nodemailer email transport
    transporter() {
        // Production mode
        if (process.env.NODE_ENV === 'production') {
            return nodemailer.createTransport({
                service: process.env.EMAIL_TRANSPORT_SERVICE,
                auth: {
                    user: process.env.EMAIL_TRANSPORT_USER,
                    pass: process.env.EMAIL_TRANSPORT_PASSWORD,
                },
            })
        }

        // Development mode
        return nodemailer.createTransport({
            host: process.env.EMAIL_TRANSPORT_HOST,
            port: process.env.EMAIL_TRANSPORT_PORT,
            auth: {
                user: process.env.EMAIL_TRANSPORT_USER,
                pass: process.env.EMAIL_TRANSPORT_PASSWORD,
            },
        })
    }

    // Email sending transporter
    async sendEmail(template, subject) {
        const mailOptions = {
            from: this.from,
            to: this.to,
            subject,
            html: template,
            text: htmlToText.fromString(template),
        }

        // Send email
        await this.transporter().sendMail(mailOptions)
    }

    // Send welcome email
    async sendWelcomeEmail() {
        // Email template module
        const template = welcomeEmailTemplate(this.name)
        await this.sendEmail(template, `Welcome to the ${process.env.APP_NAME} family!`)
    }

    // Send password reset email
    async sendPasswordResetEmail(resetURL) {
        // Email template module
        const template = passwordResetEmailTemplate(resetURL)
        await this.sendEmail(
            template,
            `[${process.env.APP_NAME}] Your password reset token (valid for only 10 minutes)`
        )
    }
}

module.exports = EmailTransmitter
