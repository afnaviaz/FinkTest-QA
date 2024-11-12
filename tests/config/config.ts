import axios from 'axios';

export const apiRequest = async (method: string, url: string, data = {}) => {
  return await axios({
    method,
    url,
    data,
    headers: { 'Content-Type': 'application/json' },
  });
};
