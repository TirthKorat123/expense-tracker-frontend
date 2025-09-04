import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";


export default function ExpenseHistory() {
  const [expenses, setExpenses] = useState([]);
  console.log(expenses);
  console.log(expenses.type);

  const loadTransactions = () => {
    fetch("http://localhost:5000/transaction")
      .then(res => res.json())
      .then(data => {
        setExpenses(Array.isArray(data) ? data : [data]);
      });
  };

  useEffect(()=>{
    loadTransactions();
  },[]);
  

  const handleEdit = (id) => {
    alert(`Edit expense with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Deleted expense with ID: ${id}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Expense History</h2>
      
      <button
        className="btn btn-primary mb-3"
        onClick={loadTransactions}
      >
        Load Transaction History
      </button>

      {expenses.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Type</th>
                <th>Amount (₹)</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>
                    <span
                      className={
                        item.type === "Income"
                          ? "badge bg-success"
                          : "badge bg-danger"
                      }
                    >
                      {item.type}
                    </span>
                  </td>
                  <td
                    className={
                      item.type === "Income"
                        ? "text-success fw-bold"
                        : "text-danger fw-bold"
                    }
                  >
                    ₹{item.amount}
                  </td>
                  <td>{item.date}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(item.id)}
                    >
                      <FaEdit className="me-1" /> Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      <FaTrash className="me-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {expenses.length === 0 && (
        <h3>Please Wait !!! Transactions are loading</h3>
      )}
    </div>
  );
}
