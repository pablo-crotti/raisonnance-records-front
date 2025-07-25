import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { getAccessToken } from "../services/authService";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = getAccessToken();
  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
