import api from './api';

export const getRecipes = async (filters = {}) => {
  try {
    const response = await api.get('/recipes', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar receitas:', error.response?.data || error.message);
    throw error;
  }
};

export const getRecipeById = async (id) => {
  try {
    const response = await api.get(`/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar receita:', error.response?.data || error.message);
    throw error;
  }
};

export const createRecipe = async (recipeData) => {
  try {
    const response = await api.post('/recipes', recipeData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar receita:', error.response?.data || error.message);
    throw error;
  }
};