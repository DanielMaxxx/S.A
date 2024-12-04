import api from './api';

export const getUserProfile = async () => {
  try {
    const response = await api.get('/users/me', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar perfil do usuário:', error.response?.data || error.message);
    throw error;
  }
};

export const updateUserPreferences = async (preferences) => {
  try {
    const response = await api.put('/users/preferences', preferences, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar preferências:', error.response?.data || error.message);
    throw error;
  }
};