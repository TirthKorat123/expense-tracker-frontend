import React, { useState } from "react";
import Namebar from "./Namebar";
import Sidenavbar from "./Sidenavbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Namebar onMenuClick={() => setOpen(!open)} />

      {/* Sidebar + Main content */}
      <div className="d-flex">
        {/* Sidebar */}
        <div className={`sidebar ${open ? "open" : ""}`}>
          <Sidenavbar onClose={() => setOpen(false)} />
        </div>

        {/* Overlay (only on mobile) */}
        {open && <div className="sidebar-overlay" onClick={() => setOpen(false)}></div>}

        {/* Main content */}
        <div className="flex-grow-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
