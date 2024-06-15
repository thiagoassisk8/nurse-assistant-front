import { createContext, useState, useEffect } from "react";

const UserContext = createContext({
  isLoggedIn: false,
  token: null,
  login: (token) => {},
});

export function UserContextProvider(props) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
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
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
