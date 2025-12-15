import { Outlet } from "react-router";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex bg-white">
      <Sidebar />

      <div className="flex-1  md:ml-64">
        <div className="p-5 max-w-7xl mx-auto bg-amber-700">
          <div className="pt-24 min-h-[calc(100vh-68px)]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
