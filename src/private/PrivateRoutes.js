import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
  return <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading.....</span>
      </div>
    </div>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
