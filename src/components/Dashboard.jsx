// Dashboard.jsx

import React, { useContext } from "react";
import UserContext from "../store/UserContext";

function Dashboard() {
  const userCtx = useContext(UserContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, you are logged in!</p>
      <p> Your token: {userCtx.token}</p>{" "}
    </div>
  );
}

export default Dashboard;
