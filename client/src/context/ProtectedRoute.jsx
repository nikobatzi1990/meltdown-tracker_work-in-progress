import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";

function ProtectedRoute({ children }) {
  const { user } = UserAuth();

  if (user) {
    return children;
  }
  return <Navigate to="/" />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
