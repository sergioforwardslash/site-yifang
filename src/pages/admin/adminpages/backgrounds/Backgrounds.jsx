import React from 'react'
import { AdminDashboardLinks } from "../../../../components";

const Backgrounds = () => {
  return (
    <div className="admin-dashboard">
      <h1>
        <a href="/admin">Admin Dashboard</a>
      </h1>
      <div className="admin-container">
        <AdminDashboardLinks />
        <div className='admin-viewbox'>
          Backgrounds
        </div>
      </div>
    </div>
  )
}

export default Backgrounds