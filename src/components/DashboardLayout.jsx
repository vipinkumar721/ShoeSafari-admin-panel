import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import AddProducts from "./AddProducts";
import AddNewProduct from "./AddNewProduct";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full flex flex-col">
        <Header />
        <AddNewProduct/>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;