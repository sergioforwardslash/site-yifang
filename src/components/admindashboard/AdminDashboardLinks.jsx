import React from "react";

const AdminDashboardConstant = () => {
  return (
    <div className="admin-links">
      <h2>Functions</h2>
      <ul>
        <li>
          <a href="/admin/menuitem">Manage Menu Items</a>
        </li>
        <li>
          <a href="/admin/backgrounds">Change Background</a>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboardConstant;
