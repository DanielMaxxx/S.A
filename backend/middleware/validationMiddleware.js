// src/middleware/validationMiddleware.js
const { validationResult } = require('express-validator');

const validationMiddleware = (req, res, next) => {
  const errors = validationResult(req); // Verifica se há erros de validação

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next(); // Se não houver erros, passa para o próximo middleware ou rota
};

module.exports = validationMiddleware;