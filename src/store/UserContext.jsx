// UserContextProvider.js
import { createContext, useState, useEffect } from "react";

const UserContext = createContext({
  isLoggedIn: false,
  token: null,
  login: (token) => {},
  logout: () => {},
});

export function UserContextProvider(props) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      loginHandler(storedToken);
    }
  }, []);

  const contextValue = {
    isLoggedIn: !!token,
    token: token,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
