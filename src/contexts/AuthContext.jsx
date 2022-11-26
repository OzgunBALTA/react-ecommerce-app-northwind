import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  const login = (response, user) => {
    setIsLoggedIn(true);
    setUser(user.data.data[0]);

    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("user", JSON.stringify(user.data.data[0]));
    localStorage.setItem("access-token", response.data.data.token);
    localStorage.setItem("refresh-token", response.data.data.refreshToken);
  };

  const logout = (callback) => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("Cart");
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    callback();
  };

  const values = {
    user,
    isLoggedIn,
    login,
    logout,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
