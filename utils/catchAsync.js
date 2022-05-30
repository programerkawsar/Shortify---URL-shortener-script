// This module will help to catch async errors
// One of the reasons to use it is not to use the try catch block repeatedly for catch async errors
module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next)
    }
}
