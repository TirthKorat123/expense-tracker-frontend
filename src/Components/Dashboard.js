import { useState } from "react";
import { useEffect } from "react";

export default function Dashboard() {
  // Dummy data
  // const totalBalance = 25000;
  // const totalIncome = 50000;
  // const totalExpenses = 25000;
  useEffect(() => {
    loadTransactions();
  }, []);

  const [expenses, setExpenses] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const loadTransactions = () => {
    fetch("http://localhost:5000/transaction")
      .then(res => res.json())
      .then(data => {
        setExpenses(Array.isArray(data) ? data : [data]);
      });

  };

  useEffect(() => {
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

  // const recentTransactions = [
  //   {
  //     id: 1,
  //     title: "Salary",
  //     amount: 50000,
  //     type: "Income",
  //     date: "2025-07-01",
  //   }
  // ];

  //calculate the Income and Expense 
  // const totalIncome=expenses
  //   .filter(txn=>txn.type === "Income")
  //   .reduce((sum,txn)=>sum=sum+txn.amount,0)
  // const totalExpense=expenses
  //   .filter(txn=>txn.type === "Expense")
  //   .reduce((sum,txn)=>sum=sum+txn.amount,0)
  const totalBalance = totalIncome - totalExpense;
  return (
    <div className="container py-4">
      <h2 className="mb-4">Dashboard</h2>

      {/* <button
        className="btn btn-primary mb-3"
        onClick={loadTransactions}
      >
        Load Transaction History
      </button> */}

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
