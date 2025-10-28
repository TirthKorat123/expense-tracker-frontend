import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function AddExpense() {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "Expense",
    category: "",
    date: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "amount" ? Number(value) : value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("New Expense Submitted:", form);
    let { title, amount, type, category, date } = form;

    try {
      // Save to Firestore
      await addDoc(collection(db, "transactions"), {
        title,
        amount,
        type,
        category,
        date,
        createdAt: new Date(), // optional timestamp
      });
      console.log("Transaction Added!");

      alert("Expense Added!");
    } catch (error) {
      console.error("Error adding transaction: ", error);
      alert("Failed to add expense, check console.");
    }

    // Reset form after submission
    setForm({
      title: "",
      amount: "",
      type: "Expense",
      category: "",
      date: "",
    });
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Add New Expense</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter title..."
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Amount (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter amount..."
                  name="amount"
                  value={form.amount || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Type</label>
                <select
                  className="form-select"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                >
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option value="">-- Select Category --</option>
                  <option value="Food">Food</option>
                  <option value="Rent">Rent</option>
                  <option value="Travel">Travel</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-4">
              <button type="submit" className="btn btn-primary">
                Add Transaction
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
