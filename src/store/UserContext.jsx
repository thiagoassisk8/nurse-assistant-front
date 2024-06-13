import { createContext, useState } from "react";

const UserContext = createContext({
  isLoggedIn: false,
  token: null,
  login: (token) => {},
  logout: () => {},
});

export function UserContextProvider(props) {
  const [token, setToken] = useState(null);

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

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
