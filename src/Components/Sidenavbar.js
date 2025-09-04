import React from "react";
import { Link } from "react-router-dom";

export default function Sidenavbar({ onClose }) {
  return (
    <div className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
      <h4 className="text-white mb-4">Menu</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/" onClick={onClose}>
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="addexpense" onClick={onClose}>
            Add Transaction
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="history" onClick={onClose}>
            Expenses History
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="categorywise" onClick={onClose}>
            Category wise Expense
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="about" onClick={onClose}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/" onClick={onClose}>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
