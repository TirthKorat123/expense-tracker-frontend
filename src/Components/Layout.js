import React from 'react'
import Namebar from './Namebar'
import Sidenavbar from './Sidenavbar'
import { Outlet } from 'react-router-dom'


export default function Layout() {
    return (
        <div>
            <Namebar />
            <div className="d-flex">
                <Sidenavbar />
                <div className="flex-grow-1 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
