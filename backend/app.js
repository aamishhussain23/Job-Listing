const express = require('express')
const allUserRoutes = require('./routes/user')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const {errorMiddleware} = require('./middlewares/Error')

const app = express()

dotenv.config({
    path : './config/config.env'
})
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1/user', allUserRoutes)

app.use(errorMiddleware)

module.exports = app
