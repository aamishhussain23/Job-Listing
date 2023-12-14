const express = require('express')
const {checkRoute, register, login, addJob, updateJob, searchJob, getSpecificJob} = require('../controllers/user')
const isAuthenticated = require('../middlewares/auth')

const router = express.Router()

router.get('/health', checkRoute)
router.post('/register', register)
router.post('/login', login)
router.post('/add-job', isAuthenticated , addJob)
router.put('/update-job/:id', isAuthenticated , updateJob)
router.post('/searchJob' , searchJob)
router.get('/job/:id', isAuthenticated , getSpecificJob)

module.exports = router