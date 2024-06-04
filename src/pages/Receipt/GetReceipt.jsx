import React, { useState, useEffect } from 'react';
import api from '../../api';
import { useNavigate } from "react-router-dom";

function GetReceipt() {
    const [receipts, setReceipts] = useState();
    const navigate = useNavigate();
    const storedUserData = localStorage.getItem('responseData');
    const userData = JSON.parse(storedUserData);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchData() {
      setIsLoading(true);
        const response = await api.receipt.getReceipt();
        if(response){
            const receiptArray = JSON.parse(response?.body);
            setReceipts((receiptArray));
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
        Receipts
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
            Create Receipt
          </button>
    </div>
  <div>

  </div>
  <div>
  {receipts?.length > 0 ? (
                <ul>
                    {receipts?.map((file, index) => (
                        <li key={index}>
                            <a href={file.url} target="_blank" rel="noopener noreferrer">
                                {file.key}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No files uploaded yet.</p>
            )}
  </div>
    </div>
  );
}

export default GetReceipt;
