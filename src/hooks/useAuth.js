import { useContext } from "react";
import { AuthContext } from "../contexts/index.jsx";

export const useAuth = () => {
  return useContext(AuthContext);
};
