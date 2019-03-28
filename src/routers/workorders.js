const express = require('express')
const router = new express.Router()
const db = require('../db/queries.js')

//order routers
router.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

router.get('/workorders', db.getWorkOrders)
router.get('/workorders/:id', db.getWorkOrderById)
router.post('/workorders',db.createWorkOrder)


module.exports = router
