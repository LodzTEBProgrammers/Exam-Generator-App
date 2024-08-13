import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar/navbar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="flex h-screen">
        <Navbar />
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
export default Dashboard;
