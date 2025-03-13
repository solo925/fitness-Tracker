import { createContext, useContext } from "react";
import useAuthStore from "../store/authStore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, login, logout } = useAuthStore();
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
