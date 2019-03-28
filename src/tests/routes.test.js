const request = require('supertest')
const app = require('../app')

describe("GET /workorders ", () => {
  test("It should respond with an array of workorders", async () => {
    const response = await request(app).get("/workorders")
    expect(response.body.length).toBeGreaterThan(1)
    expect(response.body[0]).toHaveProperty("id")
    expect(response.statusCode).toBe(200)
  });
});


describe("GET /workorders ", () => {
  test("It should respond with one workorders", async () => {
    const response = await request(app).get("/workorders/1")
    expect(response.body[0]).toHaveProperty("id")
    expect(response.statusCode).toBe(200)
  });
});

//need test mock for create workorder

//also need seprate test files for DB connection etc..
