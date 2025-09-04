import React from "react";
import { Link } from "react-router-dom";

export default function Namebar({ onMenuClick }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Menu button (mobile only) */}
        <button
          className="btn btn-outline-light me-3 d-lg-none"
          onClick={onMenuClick}
        >
          ☰
        </button>

        {/* Logo / Brand */}
        <Link className="navbar-brand" to="/">
          Expense Tracker
        </Link>

        {/* Profile dropdown */}
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
  );
}
