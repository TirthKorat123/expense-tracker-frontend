import { useState } from "react";
import { useEffect } from "react";
import {collection , getDocs } from "firebase/firestore";
import { db } from "./firebase";


export default function Dashboard() {
  

  const [expenses, setExpenses] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  async function getDataFromFirebase() {
    const querySnapshot=await getDocs(collection(db,"transactions"));
    const data = querySnapshot.docs.map((doc)=>({
      id: doc.id,
      ...doc.data()
  }));
  setExpenses(data);
  }

  useEffect(() => {
    getDataFromFirebase();
    const income = expenses
      .filter(txn => txn.type === "Income")
      .reduce((sum, txn) => sum + Number(txn.amount), 0);

    const expense = expenses
      .filter(txn => txn.type === "Expense")
      .reduce((sum, txn) => sum + Number(txn.amount), 0);


    setTotalIncome(income);
    setTotalExpense(expense);
  }, [expenses]);

  const recentTransactions = [...expenses]
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // sort latest first
    .slice(0, 5);

  const totalBalance = totalIncome - totalExpense;
  return (
    <div className="container py-4">
      <h2 className="mb-4">Dashboard</h2>

      {/* Balance Summary */}
      <div className="alert alert-primary fs-5">
        Your Balance: ₹{totalBalance.toLocaleString()}
      </div>

      {/* Income & Expense Summary */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card border-success shadow-sm">
            <div className="card-body text-success">
              <h5 className="card-title">Total Income</h5>
              <p className="card-text fs-4 fw-bold">
                ₹{totalIncome}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-danger shadow-sm">
            <div className="card-body text-danger">
              <h5 className="card-title">Total Expenses</h5>
              <p className="card-text fs-4 fw-bold">
                ₹{totalExpense}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="card shadow-sm">
        <div className="card-header fw-bold">Recent Transactions</div>
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Type</th>
                <th>Amount (₹)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((txn, index) => (
                <tr key={txn.id}>
                  <td>{index + 1}</td>
                  <td>{txn.title}</td>
                  <td>
                    <span
                      className={
                        txn.type === "Income"
                          ? "badge bg-success"
                          : "badge bg-danger"
                      }
                    >
                      {txn.type}
                    </span>
                  </td>
                  <td
                    className={
                      txn.type === "Income"
                        ? "text-success fw-bold"
                        : "text-danger fw-bold"
                    }
                  >
                    {txn.type === "Income" ? "+" : "-"} ₹
                    {txn.amount.toLocaleString()}
                  </td>
                  <td>{txn.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
