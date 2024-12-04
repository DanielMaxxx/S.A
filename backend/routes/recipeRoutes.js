const express = require('express');
const { createRecipe, getRecipes } = require('../controllers/RecipeController');
const authenticate = require('../middlewares/authenticate'); // Middleware para verificar o JWT
const router = express.Router();

router.post('/', authenticate, createRecipe);
router.get('/', getRecipes);

// Adicionar aos favoritos
router.post('/favorites', authenticate, addFavorite);

// Remover dos favoritos
router.delete('/favorites', authenticate, removeFavorite);

// Listar favoritos
router.get('/favorites', authenticate, getFavorites);

module.exports = router;