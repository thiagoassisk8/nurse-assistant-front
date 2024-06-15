import React, { useContext } from "react";
import UserContext from "../store/UserContext";

const ProtectedPage = () => {
  const userCtx = useContext(UserContext);

  const handleLogout = () => {
    userCtx.logout();

    localStorage.removeItem("token");
  };

  return (
    <div>
      <h2>Protected Page</h2>
      <p>Welcome! Your token is: {userCtx.token}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProtectedPage;
