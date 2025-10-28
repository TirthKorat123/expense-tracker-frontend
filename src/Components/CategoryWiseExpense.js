import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect } from "react";

export default function CategorySummary({ transactions }) {

  const [expenses, setExpenses] = useState([]);
  console.log(expenses);
  // Group by category and type
  const summary = {};

  async function getDataFromFirebase() {
    const querySnapshot = await getDocs(collection(db, "transactions"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setExpenses(data);
  }

  useEffect(() => {
    getDataFromFirebase();
  }, []);


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
      {/* <button
        className="btn btn-primary mb-3"
        onClick={loadData}
      >
        Load Transaction History
      </button> */}

      <div className="row g-4">
        {summaryList.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div
              className={`card shadow-sm border-${item.type === "Income" ? "success" : "danger"
                }`}
            >
              <div className={`card-body text-${item.type === "Income" ? "success" : "danger"
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
