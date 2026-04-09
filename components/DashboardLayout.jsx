import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import AddProducts from "./AddProducts";
import ProductList from "./ProductList";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full flex flex-col">
        <Header />
        <AddProducts />
        <ProductList />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
