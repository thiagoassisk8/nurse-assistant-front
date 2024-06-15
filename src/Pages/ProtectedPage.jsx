import React, { useContext } from "react";
import UserContext from "../store/UserContext";

const ProtectedPage = () => {
  const userCtx = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    userCtx.logout();
  };

  return (
    <div style={{ backgroundColor: "#333", color: "#fff", padding: "20px" }}>
      <h2 style={{ color: "#f0f0f0" }}>Protected Page</h2>
      <p style={{ color: "#ccc" }}>Welcome! Your token is: {userCtx.token}</p>
      <button
        style={{
          backgroundColor: "#555",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProtectedPage;
