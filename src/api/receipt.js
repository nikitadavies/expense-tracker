import * as api from './utils';

export async function uploadReceipt(receipt) {
  try {
    const response = await api.post(`/receipts`, receipt);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getReceipt() {
  try {
    const response = await api.get('/receipts');
    return response;
  } catch (error) {
    throw error;
  }
}