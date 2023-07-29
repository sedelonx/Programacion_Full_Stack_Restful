const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(err.status).json({ error: err.status ||
    'Server error' });
    res.status(err.status || 404).json({error:err.message||`Error 404, something is missing.`});
    };
    
    module.exports = errorHandler;