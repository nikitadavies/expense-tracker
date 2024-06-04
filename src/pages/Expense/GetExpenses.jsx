import React, { useState, useEffect } from 'react';
import api from '../../api';
import { useNavigate } from "react-router-dom";

function GetExpenses() {
    const [expenses, setExpenses] = useState();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    async function fetchData() {
      setIsLoading(true);
        const response = await api.expense.getExpenses();
        if(response){
            const expenseArray = JSON.parse(response?.body);
            setExpenses((expenseArray?.expenses));
        }
        setIsLoading(false);
        
      }
      useEffect(() => {
        fetchData();
      }, []);
      if (isLoading) {
        return <div>Loading...</div>;
      }
  return (
    <div style={{flex: 1}}>
    <div style={{display: 'flex', justifyContent: "space-between", padding: "20px", alignItems: "center"}}>
    <h1 style={{textAlign: "left"}}>
        Expenses
    </h1>
    <button
            style={{
                background: "#28317a",
                boxShadow: "0px 3px 6px #BFEEFF",
                borderRadius: "8px",
                opacity: 1,
                width: "120px",
                height: "35px",
                color: "white",
                border: "none",
                float: "right"
              }}
            onClick={() => {navigate('/dashboard/create-expense')}}
          >
            Create Expense
          </button>
    </div>
  
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {expenses?.map(expense => (
        <div key={expense?.expense_id} style={{ border: '1px solid #392c44', borderRadius: '8px', margin: '10px', padding: '10px', width: '250px', height: '270px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff' }}>
          <h3>{expense?.name}</h3>
          <p>Total Amount: {expense?.amount} CAD</p>
          <p>Description: {expense?.description}</p>
          <p>Category: {expense?.category}</p>
          <p>Date: {expense?.date}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default GetExpenses;
