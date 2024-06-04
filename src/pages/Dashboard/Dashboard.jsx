import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';

function Dashboard() {
  const navigate = useNavigate();
  const storedUserData = localStorage.getItem('responseData');
  const userData = JSON.parse(storedUserData);

  return (
    <div>
    <h1 style={{textAlign: "left", padding: "20px"}}>
        Hello {JSON.parse(userData)?.user_name}!!
    </h1>
    <div className="card-container">
            <Card title="Add Expense" onClick={() => {navigate('/dashboard/create-expense')}}/>
            <Card title="Upload Receipts" onClick={() => {navigate('/dashboard/create-receipt')}}/>
        </div>
    </div>
  );
}

export default Dashboard;