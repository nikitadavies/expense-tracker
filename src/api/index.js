import * as receiptApi from './receipt';
import * as loginApi from './login';
import * as expenseApi from './expense'


const api = {
 receipt: receiptApi,
 login: loginApi,
 expense: expenseApi
};

export default api;