const Recipe = require('../models/Recipe');
const User = require('../models/User');


const createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe({ ...req.body, user: req.user.id });
    await recipe.save();
    res.status(201).json({ message: 'Receita criada com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRecipes = async (req, res) => {
  try {
    const { filter } = req.query; // Filtro de preferências
    const recipes = await Recipe.find(filter ? { ingredients: { $in: [filter] } } : {});
    res.status(200).json(recipes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Adicionar uma receita aos favoritos
const addFavorite = async (req, res) => {
  try {
    const { recipeId } = req.body;

    // Verificar se a receita existe
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: 'Receita não encontrada' });
    }

    // Atualizar o usuário
    const user = await User.findById(req.user.id);
    if (user.favorites.includes(recipeId)) {
      return res.status(400).json({ message: 'Receita já está nos favoritos' });
    }

    user.favorites.push(recipeId);
    await user.save();

    res.status(200).json({ message: 'Receita adicionada aos favoritos', favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remover uma receita dos favoritos
const removeFavorite = async (req, res) => {
  try {
    const { recipeId } = req.body;

    const user = await User.findById(req.user.id);
    user.favorites = user.favorites.filter(fav => fav.toString() !== recipeId);
    await user.save();

    res.status(200).json({ message: 'Receita removida dos favoritos', favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter receitas favoritas
const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('favorites');
    res.status(200).json({ favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createRecipe, getRecipes, addFavorite, removeFavorite, getFavorites };