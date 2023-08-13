import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

export default function useRole() {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/${user.email}`)
      .then((res) => setRole(res.data));
  }, [user.email]);
  return role;
}
