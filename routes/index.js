const express = require("express");
const router = express.Router();
const productRouter = require("./product.js");
const categoryRouter = require("./category.js")

router.use("/products", productRouter)
router.use("/categories", categoryRouter)


module.exports = router;

// node js
// postgres

// Project Sistem Akuntansi (Cloud ERP)
// Banyak backend

