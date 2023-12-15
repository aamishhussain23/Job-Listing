const express = require('express')
const allUserRoutes = require('./routes/user')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const {errorMiddleware} = require('./middlewares/Error')
const cors = require('cors')

const app = express()

dotenv.config({
    path : './config/config.env'
})
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods : ["GET", "POST", "PUT", "DELETE"],
    credentials : true
}))
app.use('/api/v1/user', allUserRoutes)

app.use(errorMiddleware)

module.exports = app
