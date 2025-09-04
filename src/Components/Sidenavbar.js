import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidenavbar() {
  return (
    <><div className="d-flex">
                    {/* Sidebar */}
                    <div
                        className="bg-dark text-white p-3"
                        style={{ width: "250px", minHeight: "100vh" }}
                    >
                        <h4 className="text-white mb-4">Menu</h4>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="addexpense">
                                    Add Transaction
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="history">
                                    Expenses History
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="categorywise">
                                    Category wise Expense
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Main Content
                    <div className="flex-grow-1 p-4">
                        <h2>Add Expense</h2>
                        <p>Your form or page content goes here.</p>
                    </div> */}
                </div>
    </>
  )
}
