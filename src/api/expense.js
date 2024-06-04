import * as api from './utils';

export async function createExpense(expense) {
    try {
      const response = await api.post('/expense', expense);
      return response;
    } catch (error) {
      throw error;
    }
  }

  export async function getExpenses() {
    try {
      const response = await api.get('/expense');
      return response;
    } catch (error) {
      throw error;
    }
  }
