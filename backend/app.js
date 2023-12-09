const express = require('express')
const allUserRoutes = require('./routes/user')
const dotenv = require('dotenv')

const app = express()

dotenv.config({
    path : './config/config.env'
})
app.use(express.json())
app.use('/api/v1/user', allUserRoutes)

module.exports = app
