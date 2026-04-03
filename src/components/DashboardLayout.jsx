import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;