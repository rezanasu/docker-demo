const app = require("../app")
const request = require("supertest");
const {sequelize} = require("../models");
const {queryInterface} = sequelize;

// UNIT TESTING

// FEATURE A ==> 100%
// FEATURE B ==> 100%
// FEATURE C ==> 100% success

// HOOKS

beforeAll((done) => {

    queryInterface.bulkInsert("Products", 
        [
            {
              id: 1,
              title: "Pisau",
              sku: "KITCHEN-001",
              stock: 10,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: 2,  
              title: "Microwave",
              sku: "KITCHEN-002",
              stock: 10,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: 3,
              title: "Oven",
              sku: "KITCHEN-003",
              stock: 5,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: 4, 
              title: "Baseball Bat",
              sku: "SPORT-001",
              stock: 10,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: 5,
              title: "Bicycle",
              sku: "SPORT-002",
              stock: 10,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: 6,
              title: "Running Shoe",
              sku: "SPORT-003",
              stock: 10,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ]
    , {})
    .then(_ => {
        done()
    })
    .catch(err => {
        console.log(err);
        done(err);
    })
})

afterAll((done) => {

    queryInterface.bulkDelete("Products", null, {})
        .then(_ => {
            done();
        })
        .catch(err => {
            console.log(err);
            done(err);
        })
})


describe('Testing Products', () => {

    it("Findall products", (done) => {

        request(app)
            .get("/products")
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                const {body, status} = response;

                expect(status).toEqual(200);
                expect(body.length).toEqual(6);

                const pisau = body[0];

                expect(pisau.title).toBe("Pisau");
                expect(pisau.sku).toBe("KITCHEN-001")
                expect(pisau.stock).toBe(10)
                done();
            })
            .catch(err => {
                console.log(err);
                done(err);
            })
    })

    it("Find detail Products", (done) => {

        request(app)
            .get("/products/1")
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                const {body, status} = response;
                expect(status).toEqual(200);
                done()
            })
            .catch(err => {
                console.log(err);
                done(err);
            })
    })

    it("Create products", (done) => {

        request(app)
            .post("/products")
            .send({
                title: "AAA",
                sku: "TEST-001",
                stock: 100
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .then(response => {
                const {body, status} = response;

                expect(body.message).toEqual("Product created")
                done();
            })
            .catch(err => {
                console.log(err);
                done(err);
            })
    })

    it("Update products", (done) => {

        request(app)
            .put("/products/1")
            .send({
                title: "AAA",
                sku: "TEST-001",
                stock: 100
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                const {body, status} = response;

                expect(body.message).toEqual("Product updated")
                done();
            })
            .catch(err => {
                console.log(err);
                done(err);
            })
    })

    it("Delete Products", (done) => {

        request(app)
            .delete("/products/1")
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                const {body, status} = response;
                expect(body.message).toEqual("Product deleted")
                done();
            })
    })
})
