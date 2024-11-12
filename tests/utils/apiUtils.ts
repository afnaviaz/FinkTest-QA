// tests/utils/apiUtils.ts
import axios from 'axios';

// Función para hacer peticiones GET
export const getRequest = async (url: string, params: object = {}) => {
  try {
    const response = await axios.get(url, { params });
    return response;  // Retorna la respuesta para poder hacer verificaciones
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error in GET request: ${error.message}`);
    } else {
      throw new Error('Error in GET request');
    }
  }
};
