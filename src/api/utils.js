import axios from 'axios';

const API_BASE_URL = 'https://0dpcx359ce.execute-api.us-east-1.amazonaws.com/dev';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


const handleResponse = response => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

const handleError = error => {
  console.error(error?.response?.status);
  if (error?.response?.status === 401) {
    window.location.href = '/';
  }
  throw error;
};

export const get = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const post = async (url, data = {}) => {
  try {
    const response = await api.post(url, data);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const put = async (url, data = {}) => {
  try {
    const response = await api.put(url, data);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const del = async url => {
  try {
    const response = await api.delete(url);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};
