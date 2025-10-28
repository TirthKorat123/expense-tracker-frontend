import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { db } from "./firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function ExpenseHistory() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Load all transactions from Firestore
  const loadTransactions = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "transactions"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(), // here if don't use triple dots then object becomes like   { id: "abc123", data: { title: "Tea", amount: 51 } }
      }));             // if we use this then it doesn't becomes nested and its like { id: "abc123", title: "Tea", amount: 51 }
      setExpenses(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setLoading(false);
    }
  };
  

  // 🧠 Fetch data on page load
  useEffect(() => {
    loadTransactions();
  }, []);

  const handleEdit = (id) => {
    alert(`Edit expense with ID: ${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      await deleteDoc(doc(db, "transactions", id));
      loadTransactions(); // refresh after delete
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Expense History</h2>

      {/* <button className="btn btn-primary mb-3" onClick={loadTransactions}>
        Reload Transactions
      </button> */}

      {loading ? (
        <h3>Please Wait... Transactions are loading</h3>
      ) : expenses.length > 0 ? (
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
              {expenses.map((exp, index) => (
                <tr key={exp.id}>
                  <td>{index + 1}</td>
                  <td>{exp.title}</td>
                  <td>{exp.category}</td>
                  <td>
                    <span
                      className={
                        exp.type === "Income"
                          ? "badge bg-success"
                          : "badge bg-danger"
                      }
                    >
                      {exp.type}
                    </span>
                  </td>
                  <td
                    className={
                      exp.type === "Income"
                        ? "text-success fw-bold"
                        : "text-danger fw-bold"
                    }
                  >
                    ₹{exp.amount}
                  </td>
                  <td>{exp.date}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(exp.id)}
                    >
                      <FaEdit className="me-1" /> Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(exp.id)}
                    >
                      <FaTrash className="me-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3>No transactions found</h3>
      )}
    </div>
  );
}
