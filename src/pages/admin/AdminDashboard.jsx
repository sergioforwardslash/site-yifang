import { AdminDashboardLinks } from "../../components";
import "./admin.css";

function App() {
  return (
    <div className="admin-dashboard">
      <h1>
        <a href="/admin">Admin Dashboard</a>
      </h1>
      <div className="admin-container">
        <AdminDashboardLinks />
        <div className="admin-viewbox">
          <h2>Welcome to the Admin Dashboard</h2>
          <p>Here you can manage your admin tasks.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
