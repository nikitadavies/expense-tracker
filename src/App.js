import './App.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage/HomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header/Header';
import LeftNavigation from "./components/LeftNavigation/LeftNavigation"
import CreateExpense from './pages/Expense/CreateExpense';
import GetExpenses from './pages/Expense/GetExpenses';
import CreateReceipt from './pages/Receipt/CreateReceipt';
import GetReceipt from './pages/Receipt/GetReceipt';

function App() {
  return (
     <Router>
      <div className="App">
        <ToastContainer />
        <div className="App-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard/*" element={<ProtectedRoutes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function ProtectedRoutes() {
  return (
    <>
     <Header />
      <div className="main">
        <LeftNavigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-expense" element={<CreateExpense />} />
            <Route path="/get-expenses" element={<GetExpenses />} />
            <Route path="/create-receipt" element={<CreateReceipt />} />
            <Route path="/receipts" element={<GetReceipt />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;