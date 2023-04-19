import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";

function ProtectedRoute ({children}) {
  const { user } = UserAuth();
  
  if (Object.keys(user).length === 0) {
    return <Navigate to='/' />
  }
  return children;
}

export default ProtectedRoute;