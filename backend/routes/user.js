const express = require('express')
const checkRoute = require('../controllers/user')

const router = express.Router()

router.get('/health', checkRoute)

module.exports = router