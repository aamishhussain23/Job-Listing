const userCollection = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const setCookie = require("../utils/cookie")
const {ErrorHandler} = require("../middlewares/Error")
const jobCollection = require("../models/job")

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
        next(new ErrorHandler(error.message, 500))
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
        next(new ErrorHandler(error.message, 500))
    }
}

const addJob = async (req, res) => {
    try {
        const {company_name, company_logo, job_position, monthly_salary, 
                job_type, remote_office, location, job_description, 
                about_company, skills, information} = req.body

                console.log(req.user._id)
 
        const job = await jobCollection.create({company_name, company_logo, job_position, monthly_salary, 
                                                job_type, remote_office, location, job_description, 
                                                about_company, skills, information, user : req.user._id})
        
        res.status(201).json({
            success : true,
            message : 'Job added successfully'
        })
    } catch (error) {
        next(new ErrorHandler(error.message, 500))
    }
    
}

module.exports = {checkRoute, register, login, addJob}