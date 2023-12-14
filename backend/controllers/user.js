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

        return setCookie(res, created_user, 201, `${name} registered successfully`)

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
            return setCookie(res, user, 200, `Welcome ${user.name}`)
        }  

        return next(new ErrorHandler('Invalid email or password', 404))
        
    } catch (error) {
        next(new ErrorHandler(error.message, 500))
    }
}

const addJob = async (req, res, next) => {
    try {
        const job = await jobCollection.create({
            ...req.body,
            user: req.user._id,
        });

        res.status(201).json({
            success: true,
            message: 'Job added successfully',
        });
    } catch (error) {
        next(new ErrorHandler(error.message, 500));
    }
};


const updateJob = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { user } = req; 

        const updatedJob = await jobCollection.findByIdAndUpdate(
            id,
            { ...req.body, user: user._id },
            { new: true }
        );

        if (!updatedJob) {
            return next(new ErrorHandler("Job Not Found", 404));
        }

        res.status(200).json({
            success: true,
            message: 'Job updated successfully',
        });
    } catch (error) {
        next(new ErrorHandler(error.message, 500));
    }
};

const searchJob = async (req, res, next) => {
    try {
        const {job_position, skills} = req.body

        const jobs = await jobCollection.find({
            $or: [
              { job_position: { $eq: job_position } },
              { skills: { $in: skills } }
            ]
          }).select('-user');

        if(!jobs){
            return next(new ErrorHandler("Jobs not found", 404))
        }
        res.status(200).json({
            success : true,
            jobs
        })
    } catch (error) {
        next(new ErrorHandler(error.message, 500))
    }
}

const getSpecificJob = async (req, res, next) => {
    try {
        const {id} = req.params
        const job = await jobCollection.findById(id).select('-user');

        if(!job){
            return next(new ErrorHandler("Jobs not found", 404))
        }

        res.status(200).json({
            success : true,
            job
        })
        
    } catch (error) {
        next(new ErrorHandler(error.message, 500))
    }
}

module.exports = {checkRoute, register, login, addJob, updateJob, searchJob, getSpecificJob}