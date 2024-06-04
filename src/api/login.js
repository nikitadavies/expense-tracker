import * as api from './utils';

export async function login(login) {
    try {
      const response = await api.post('/login', login);
      return response;
    } catch (error) {
      throw error;
    }
  }

  export async function register(formData) {
    try {
      const response = await api.post('/register', formData);
      return response;
    } catch (error) {
      throw error;
    }
  }
