const errorHandler = (err, req, res, next) => {

    console.log(err);

    console.log(err.name, "<<<<<<<<")

    if(err.name === "ErrorNotFound") {
        res.status(404).json({message: "Error Not Found"});
    } else if(err.name === "SequelizeValidationError") {
        res.status(400).json({message: "Validation Error"})
    }
    
    else {
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = errorHandler;