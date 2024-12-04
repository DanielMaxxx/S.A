// src/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  // Obtendo o token do cabeçalho da requisição
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.startsWith("Bearer ") 
    ? authHeader.replace("Bearer ", "") 
    : null;

  if (!token) {
    return res.status(401).json({ error: "Acesso não autorizado! Token ausente." });
  }

  try {
    // Verificando e decodificando o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // JWT_SECRET deve estar configurado no .env

    // Buscando o usuário no banco de dados com base no ID decodificado
    const user = await User.findById(decoded.userId);
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado!" });
    }

    // Anexando informações do usuário à requisição para uso nas rotas seguintes
    req.user = {
      id: user._id,
      email: user.email,
      role: user.role, // Inclui a função do usuário, caso exista
    };

    next(); // Passa o controle para o próximo middleware ou rota
  } catch (err) {
    // Erro no processo de verificação ou token expirado
    return res.status(401).json({ error: "Token inválido ou expirado!" });
  }
};

module.exports = authMiddleware;