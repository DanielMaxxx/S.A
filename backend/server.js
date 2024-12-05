const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Importar rotas
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

// Middleware para parsing de JSON e habilitar CORS
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao banco de dados com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    process.exit(1); // Encerrar aplicação em caso de erro
  }
};

// Rotas
app.use('/api/users', userRoutes); // Rotas relacionadas a usuários
app.use('/api/recipes', recipeRoutes); // Rotas relacionadas a receitas

// Rota raiz para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.status(200).send('Servidor funcionando! 🚀');
});

// Porta do servidor
const PORT = process.env.PORT || 5000;

// Iniciar servidor com tratamento de erro
const startApp = (port) => {
  const server = app.listen(port, async () => {
    try {
      await startServer();
      console.log(`Servidor rodando na porta ${port}`);
    } catch (err) {
      console.error('Erro ao iniciar servidor:', err.message);
      process.exit(1);
    }
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Porta ${port} já está em uso. Tentando outra porta...`);
      startApp(port + 1); // Tentar porta seguinte
    } else {
      console.error('Erro no servidor:', err.message);
      process.exit(1);
    }
  });
};

// Iniciar aplicação
startApp(PORT);