import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import AddExpense from "./Components/AddExpense";
import About from "./Components/About";
import ExpenseHistory from "./Components/ExpenseHistory";
import CategoryWiseExpense from "./Components/CategoryWiseExpense";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Components/firebase";

function App() {
  const [user, setUser] = useState(null);

  // check login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes (only for logged-in users) */}
        {user ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="addexpense" element={<AddExpense />} />
            <Route path="about" element={<About />} />
            <Route path="history" element={<ExpenseHistory />} />
            <Route path="categorywise" element={<CategoryWiseExpense />} />
          </Route>
        ) : (
          // Redirect to login if not logged in
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
