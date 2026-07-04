import { Navigate } from "react-router-dom";

const AUTH_KEY = "mcan-admin-auth";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = typeof window !== "undefined" && window.localStorage.getItem(AUTH_KEY) === "true";

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}
