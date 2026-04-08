import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    let storage = localStorage.getItem("product_admin");
    if (storage) storage = JSON.parse(storage);

    if (!storage) {
      navigate("/signin");
    }
  }, []);
  return <div>{children}</div>;
};

export default PrivateRoute;
