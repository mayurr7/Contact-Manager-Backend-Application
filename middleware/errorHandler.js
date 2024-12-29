const errorHandler= (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
   
    switch (statusCode) {
        case 400:
            res.json({
                title: "validation Failed",
                message : err.message,
                stackTraxe : err.stack
            })
            break;

        case 404:
            res.json({
                title: "Not found",
                message : err.message,
                stackTraxe : err.stack
            })
            break;   
    
        default:
            break;
    }
};

module.exports = errorHandler;