import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");

  // Agar token nahi hai
  if (!token) {

    return <Navigate to="/login" />;

  }

  // Agar token hai
  return children;
}

export default ProtectedRoute;