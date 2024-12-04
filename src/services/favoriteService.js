import api from './api';

export const getFavorites = async () => {
  try {
    const response = await api.get('/favorites', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar favoritos:', error.response?.data || error.message);
    throw error;
  }
};

export const addFavorite = async (recipeId) => {
  try {
    const response = await api.post(
      '/favorites',
      { recipeId },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar aos favoritos:', error.response?.data || error.message);
    throw error;
  }
};

export const removeFavorite = async (recipeId) => {
  try {
    const response = await api.delete(`/favorites/${recipeId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao remover dos favoritos:', error.response?.data || error.message);
    throw error;
  }
};  