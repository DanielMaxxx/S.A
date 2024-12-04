// src/middleware/errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
    console.error(err); // Log do erro
  
    res.status(500).json({
      message: err.message || 'Algo deu errado!',
    });
  };
  
  module.exports = errorMiddleware;