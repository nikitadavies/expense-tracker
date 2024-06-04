import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { toast } from 'react-toastify';

const CreateReceipt = () => {
  const [receiptName, setReceiptName] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            alert('Please select a file.');
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
            const fileContent = reader.result.split(',')[1];
            let uploadReceipt = {
              expense_name: receiptName,
              expense_date: date,
              fileName: file.name,
              fileType: file.type,
              fileContent
          }
            try {
                const response = await api.receipt.uploadReceipt(uploadReceipt);
                toast.success('Receipt Uploaded Successfully!!');
                navigate("/dashboard/receipts");
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('Error uploading file.');
            }
        };
    };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="header">
        <h2>Create Receipt</h2>
      </div>
      <div
        style={{ backgroundColor: "white", margin: "15px", padding: "10px" }}
      >
        <div style={styles.row}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Receipt Name</label>
            <input
              style={styles.input}
              type="text"
              value={receiptName}
              onChange={(e) => setReceiptName(e.target.value)}
              placeholder="Receipt Name"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Paid Date</label>
            <input
              style={styles.input}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Paid Date"
            />
          </div>
        </div>
        <div style={styles.row}>
        <div>
    <h4 className="title">Upload Receipt</h4>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
      <div>
        <label>Select file:</label>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
      </div>
      <div
          style={{ display: "flex", alignItems: "flex-start", margin: "25px" }}
        >
          <button
            style={styles.createButton}
            type="submit" 
          >
            Upload
          </button>
          <button style={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
        </div>
    </form>
  </div>  
        </div>
       
      </div>
    </div>
  );
};

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginRight: "10px",
  },
  label: {
    textAlign: "left",
    color: "#3E3E3E",
    opacity: 1,
    fontSize: "16px"
  },
  input: {
    width: "400px",
    height: "35px",
    background: "#FAFAFA",
    border: "1px solid #D9D9D9",
    opacity: 1,
    borderRadius: "8px",
    paddingLeft: "10px",
    marginTop: "5px"
  },
  createButton: {
    background: "#28317a",
    boxShadow: "0px 3px 6px #BFEEFF",
    borderRadius: "8px",
    opacity: 1,
    width: "120px",
    height: "35px",
    color: "white",
    border: "none",
    marginRight: "10px",
    cursor: "pointer",
  },
  disabledButton: {
    boxShadow: "0px 3px 6px #BFEEFF",
    borderRadius: "8px",
    width: "120px",
    height: "35px",
    color: "white",
    border: "none",
    marginRight: "10px",
    backgroundColor: "#8A8C8F",
    cursor: "not-allowed",
    opacity: 0.5,
  },
  cancelButton: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #C9C9C929",
    border: "1px solid #8A8C8F",
    opacity: 1,
    borderRadius: "8px",
    width: "120px",
    height: "35px",
    color: "#8A8C8F",
    cursor: "pointer",
  },
};

export default CreateReceipt;
