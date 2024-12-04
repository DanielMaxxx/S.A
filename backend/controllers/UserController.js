const bcrypt = require("bcryptjs"); // Adicionando bcrypt
const User = require("../models/User");

// Create a user (Registro de usuário)
exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  // Validação básica
  if (!email || !password) {
    return res.status(400).json({ error: "Preencha todos os campos obrigatórios." });
  }

  // Verificar formato do e-mail (validação adicional)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "O formato do e-mail é inválido." });
  }

  // Verificar requisitos mínimos de senha (validação adicional)
  if (password.length < 6) {
    return res.status(400).json({ error: "A senha deve ter pelo menos 6 caracteres." });
  }

  try {
    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "O e-mail já está em uso." });
    }

    // Criptografar a senha antes de salvar
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar um novo usuário com a senha criptografada
    const user = new User({ email, password: hashedPassword });
    await user.save();

    // Evitar enviar a senha no retorno
    const { password: _, ...userWithoutPassword } = user.toObject();

    res.status(201).json({ message: "Usuário registrado com sucesso.", user: userWithoutPassword });
  } catch (error) {
    console.error("Erro ao registrar usuário:", error); // Log para depuração
    res.status(500).json({ error: "Erro ao registrar o usuário. Tente novamente mais tarde." });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Não retornar senhas
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error); // Log para depuração
    res.status(500).json({ error: "Erro ao buscar usuários. Tente novamente mais tarde." });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  // Evitar atualização de senha diretamente sem criptografar
  if (updates.password) {
    updates.password = await bcrypt.hash(updates.password, 10);
  }

  try {
    const user = await User.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    // Evitar enviar a senha no retorno
    const { password: _, ...userWithoutPassword } = user.toObject();

    res.status(200).json({ message: "Usuário atualizado com sucesso.", user: userWithoutPassword });
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error); // Log para depuração
    res.status(500).json({ error: "Erro ao atualizar o usuário. Tente novamente mais tarde." });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }
    res.status(200).json({ message: "Usuário deletado com sucesso." });
  } catch (error) {
    console.error("Erro ao deletar usuário:", error); // Log para depuração
    res.status(500).json({ error: "Erro ao deletar o usuário. Tente novamente mais tarde." });
  }
};