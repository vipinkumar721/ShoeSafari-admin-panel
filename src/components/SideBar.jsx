import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-6">Admin</h1>
        <nav className="flex flex-col gap-3">
          <a href="#" className="p-2 rounded">
            Dashboard
          </a>
          <a href="#" className="p-2 rounded">
            Users
          </a>
          <a href="#" className="p-2 rounded">
            Settings
          </a>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
