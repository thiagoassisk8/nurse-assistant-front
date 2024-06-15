import React from "react";
import { UserContext } from "../store/UserContext";

const AuthProvider = ({ children }) => {
  return <UserContext>{children}</UserContext>;
};

export default AuthProvider;
