const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController.js")

router.get("/", ProductController.findAll);
router.get("/:id", ProductController.findOne);
router.post("/", ProductController.create);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.destroy);

module.exports = router;