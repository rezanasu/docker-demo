require("dotenv").config();

const config = {
    development: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        dialect: "postgres"
    },
    test: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB_TEST,
        host: process.env.POSTGRES_HOST,
        dialect: "postgres",
        port: process.env.CUSTOM_PORT
    },
    docker: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: "postgres",
        dialect: "postgres",
        port: process.env.CUSTOM_PORT
    }
}
console.log(config, "<<<<<<")
module.exports = config;