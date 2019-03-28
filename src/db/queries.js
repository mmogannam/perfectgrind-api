const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'perfectgrind',
  password: 'password',
  port: 5432,
})

//use to get all workorders
const getWorkOrders = (request, response) => {
  var sql = `select wo.*, c.name as coffee, m.name as method from workorders wo
              inner join method m on wo.method_id = m.id
              inner join coffee c on wo.coffee_id = c.id`

  pool.query(sql, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//use to get a single workorder by id
const getWorkOrderById = (request, response) => {
  const id = parseInt(request.params.id)
  var sql = `select wo.*, c.name as coffee, m.name as method from workorders wo
              inner join method m on wo.method_id = m.id
              inner join coffee c on wo.coffee_id = c.id
              where wo.id = $1`
  console.log(id);
  pool.query(sql, [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//use to create a workorders
const createWorkOrder = (request, response) => {
  var sql = `INSERT INTO workorders (coffee_id, method_id, number_of_cases,
              packets_per_case, priority, ship_date)
              VALUES ($1, $2, $3, $4, $5, $6)`
  const { coffee_id, method_id, number_of_cases, packets_per_case, ship_date, priority } = request.body

   pool.query(sql, [coffee_id, method_id, number_of_cases, packets_per_case, priority, ship_date], (error, results) => {
     if (error) {
       throw error
     }
     response.status(201).send(`Workorder added`)
   })
}



module.exports = {
  getWorkOrders,
  getWorkOrderById,
  createWorkOrder
}
