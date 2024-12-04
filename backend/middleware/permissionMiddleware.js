// src/middleware/permissionMiddleware.js
const permissionMiddleware = (requiredRole) => {
    return (req, res, next) => {
      const user = req.user; // O usuário é definido pelo middleware de autenticação
  
      if (!user) {
        return res.status(403).json({ error: 'Acesso proibido!' });
      }
  
      if (user.tipo !== requiredRole) {
        return res.status(403).json({ error: 'Permissão negada!' });
      }
  
      next(); // Permite que a requisição siga para o próximo middleware ou rota
    };
  };
  
  module.exports = permissionMiddleware;