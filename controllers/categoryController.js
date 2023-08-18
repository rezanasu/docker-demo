const {Category} = require("../models")

class CategoryController {

    static findAll = async (req, res, next) => {
        try {
            const categories = await Category.findAll();

            res.status(200).json(categories)
        } catch(err) {
            next(err)
        }
    }

    static findOne = async (req, res, next) => {
        try {
            const {id} = req.params;
            
            const category = await Category.findOne({
                where: {
                    id
                }
            })

            if(!category) {
                throw {name: "ErrorNotFound"}
            }

            res.status(200).json(category)
        } catch(err) {
            next(err)
        }
    }
}

module.exports = CategoryController