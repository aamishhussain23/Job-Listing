const jwt = require('jsonwebtoken')

const setCookie = (res, user, statusCode, message) => {
    const token = jwt.sign({_id : user._id}, process.env.JWT_SECRET)
    if(!token) return next(new ErrorHandler('Login First', 404))

    res.status(statusCode).cookie('token', token, {
        httpOnly : true, 
        maxAge : 30 * 60 * 1000, 
        sameSite : process.env.NODE_ENV === "Development" ? "lax" : "none", 
        secure :   process.env.NODE_ENV === "Development" ? false : true
    }).json({
        success : true,
        message
    })
}

module.exports = setCookie