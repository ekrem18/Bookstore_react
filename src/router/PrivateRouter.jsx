import React, { useContext } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { user } = useAuthContext();

  console.log(Boolean(user));
  
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
