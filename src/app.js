const express = require('express')
const cors = require('cors')

const ordersRouter = require('./routers/workorders.js')

var app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(ordersRouter)


module.exports = app
