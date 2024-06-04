import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { toast } from 'react-toastify';

const CreateExpense = () => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [category, setCategory] = useState("Accomodation");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [method, setMethod] = useState("Debit");

  const navigate = useNavigate();

  const handleCreateExpense = () => {
    let expense = {
        "amount": parseInt(amount),
        "name": expenseName,
        "description": description,
        "category": category,
        "date": expenseDate,
        "method": method
    };
    api.expense.createExpense(expense).then(() => {
        toast.success('Expense created successfully!!');
        navigate("/dashboard");
    }); 
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="header">
        <h2>Create Expense</h2>
      </div>
      <div
        style={{ backgroundColor: "white", margin: "15px", padding: "10px" }}
      >
        <div style={styles.row}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Expense Name</label>
            <input
              style={styles.input}
              type="text"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              placeholder="Expense Name"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Date</label>
            <input
              style={styles.input}
              type="date"
              value={expenseDate}
              onChange={(e) => setExpenseDate(e.target.value)}
              placeholder="Expense Date"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Category</label>
            <select
              style={styles.input}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Accomodation">Accomodation</option>
              <option value="Fees">Fees</option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Utilities">Utilities</option>
              <option value="Groceries">Groceries</option>
            </select>
          </div>
        </div>
        <div style={styles.row}>
        <div style={styles.inputContainer}>
            <label style={styles.label}>Amount (in CAD)</label>
            <input
              style={styles.input}
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              min="0" 
            />
          </div>
          <div style={styles.inputContainer}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Expense Description</label>
            <input
              style={styles.input}
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Expense Description"
            />
          </div>
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Payment Method</label>
            <select
              style={styles.input}
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="Debit">Debit</option>
              <option value="Credit">Credit</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "flex-start", margin: "25px" }}
        >
          <button
            style={styles.createButton}
            onClick={handleCreateExpense}
          >
            Create
          </button>
          <button style={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
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

export default CreateExpense;
