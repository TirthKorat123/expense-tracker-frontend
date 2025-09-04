import React from 'react'
import { Link } from 'react-router-dom'

export default function Namebar() {
    return (
        <>
            <div>
                {/* Top Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            Expense Tracker
                        </Link>
                        <div className="dropdown ms-auto">
                            <a
                                href="#"
                                className="d-flex align-items-center text-decoration-none dropdown-toggle"
                                id="userDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="/profile.png"
                                    alt="Profile"
                                    width="40"
                                    height="40"
                                    className="rounded-circle me-2"
                                />
                                <span>Profile</span>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="userDropdown"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Sidebar + Main Content */}
                
            </div>

        </>
    )
}
