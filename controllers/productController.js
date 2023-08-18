const {Product, Category} = require("../models");

class ProductController {

    static findAll = async (req, res, next) => {
        try {
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch(err) {
            next(err);
        }
    }

    static findOne = async (req, res, next) => {
        try {
            const {id} = req.params;
            const product = await Product.findOne({
                where: {
                    id
                },
                include: {
                    model: Category
                }
            });

            if(!product) {
                throw {name: "ErrorNotFound"}
            }

            res.status(200).json(product);
        } catch(err) {
            next(err);
        }
    }

    static create = async (req, res, next) => {
        try {
            const {title, sku, stock} = req.body;

            await Product.create({
                title,
                sku,
                stock
            })

            res.status(201).json({message: "Product created"});
        } catch(err) {
            next(err);
        }
    }

    static update = async (req, res, next) => {
        try {
            const {id} = req.params;
            const {title, sku, stock} = req.body;

            // Product find
            const foundProduct = await Product.findOne({
                where: {
                    id
                }
            })

            if(!foundProduct) {
                throw {name: "ErrorNotFound"}
            }

            await foundProduct.update({
                title: title || foundProduct.title,
                sku: sku || foundProduct.sku,
                stock: stock || foundProduct.stock
            })

            // foundProduct data lama

            await foundProduct.save();

            // foundProduct data terupdate

            res.status(200).json({message: "Product updated"})
        } catch(err) {
            next(err);
        }
    }

    static destroy = async (req, res, next) => {
        try {
            const {id} = req.params;

            const foundProduct = await Product.findOne({
                where: {
                    id
                }
            })

            if(!foundProduct) {
                throw {name: "ErrorNotFound"}
            }

            await foundProduct.destroy();

            res.status(200).json({message: "Product deleted"})
        } catch(err) {  
            next(err);
        }
    }

}

module.exports = ProductController;