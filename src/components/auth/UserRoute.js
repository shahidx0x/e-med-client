import { Navigate, useLocation } from "react-router-dom";
import useRole from "../../hooks/useRole";
// eslint-disable-next-line react/prop-types
export default function UserRoute({ children }) {
  const role = useRole();
  const location = useLocation();

  if (role === "user") {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
}
