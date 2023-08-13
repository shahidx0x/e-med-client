import { Navigate, useLocation } from "react-router-dom";
import useRole from "../../hooks/useRole";

// eslint-disable-next-line react/prop-types
export default function AdminRoute({ children }) {
  const role = useRole();
  const location = useLocation();

  if (role === "admin") {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
}
