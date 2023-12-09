const userCollection = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const setCookie = require("../utils/cookie")
const {ErrorHandler} = require("../middlewares/Error")

const checkRoute = (req, res) => {
    res.status(200).json({
        success : true,
        message : 'Api is Working'
    })
}

const register = async (req, res, next) => {
    try {
        const {name, email, mobile, password} = req.body

        const user = await userCollection.findOne({email})

        if(user){
            return next(new ErrorHandler('user already exists', 409))
        }

        const hashed_password = await bcrypt.hash(password, 10)

        const created_user = await userCollection.create({name, email, mobile, password : hashed_password})

        return setCookie(res, created_user, 201, 'user created successfully')

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success : true,
            message : error.message
        })
    }
}

const login = async (req,res, next) => {
    try {

        const {email, password} = req.body

        const user = await userCollection.findOne({email}).select('+password')

        if(!user){
            return next(new ErrorHandler('Invalid email or password', 404))
        }

        const password_match = await bcrypt.compare(password, user.password)

        if(password_match){
            return setCookie(res, user, 200, 'login successfully')
        }  

        return next(new ErrorHandler('Invalid email or password', 404))
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success : true,
            message : error.message
        })
    }
}

module.exports = {checkRoute, register, login}