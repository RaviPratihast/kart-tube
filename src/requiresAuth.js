import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/auth-context";

function RequiresAuth({ children }) {
  const { loggedIn } = useAuth();
  const location = useLocation();

  return loggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequiresAuth;
