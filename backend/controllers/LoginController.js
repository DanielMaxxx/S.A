const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('JWT_SECRET:', process.env.JWT_SECRET);

    // Verifica se o usuário existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    // Exibe informações para depuração
    console.log("Senha fornecida:", password);
    console.log("Hash armazenado no banco:", user.password);

    // Verifica se a senha fornecida corresponde à senha criptografada no banco
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Resultado da comparação:", isMatch); // Agora é acessada após a inicialização

    if (!isMatch) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    // Gera um token JWT com um tempo de expiração de 1 hora
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Retorna o token e a mensagem de login bem-sucedido
    res.status(200).json({
      message: "Login bem-sucedido",
      token, // Retorna o token JWT
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};