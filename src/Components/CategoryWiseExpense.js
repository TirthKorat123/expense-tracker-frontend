import React from "react";
import { useState } from "react";

export default function CategorySummary({ transactions }) {

    const [expenses, setExpenses] = useState([]);
    console.log(expenses);
  // Group by category and type
  const summary = {};
  const loadData = () => {
    fetch("http://localhost:5000/transaction")
      .then(res => res.json())
      .then(data => {
        setExpenses(Array.isArray(data) ? data : [data]);
      });
  };

  expenses.forEach((txn) => {
    const key = txn.category + "_" + txn.type;

    if (!summary[key]) {
      summary[key] = {
        category: txn.category,
        type: txn.type,
        total: 0,
      };
    }

    summary[key].total += Number(txn.amount);
  });

  const summaryList = Object.values(summary);

  return (
    <div className="container py-4">
      <h3 className="mb-4">Category-wise Summary</h3>
      <button
        className="btn btn-primary mb-3"
        onClick={loadData}
      >
        Load Transaction History
      </button>

      <div className="row g-4">
        {summaryList.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div
              className={`card shadow-sm border-${
                item.type === "Income" ? "success" : "danger"
              }`}
            >
              <div className={`card-body text-${
                item.type === "Income" ? "success" : "danger"
              }`}>
                <h5 className="card-title">{item.category}</h5>
                <p className="card-text">
                  Type: <strong>{item.type}</strong>
                </p>
                <p className="card-text fs-5 fw-bold">
                  ₹{item.total.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
