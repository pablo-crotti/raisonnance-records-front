import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { getUserData } from "../services/authService";

interface AdminRouteProps {
  children: ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const user = getUserData();

  return user?.role == "admin" || user?.role == "super_admin" ? (
    children
  ) : (
    <Navigate to="/admin" replace />
  );
};

export default AdminRoute;
