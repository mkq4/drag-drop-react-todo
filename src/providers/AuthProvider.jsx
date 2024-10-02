import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  const userLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("token", userData.accessToken);
    localStorage.setItem("user", JSON.stringify(userData.user))
  };
  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, userLogin, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
