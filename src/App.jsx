import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link as RouterLink,
} from "react-router-dom";
import { UserContextProvider } from "./store/UserContext";
import Login from "./Pages/Login.jsx";
import ProtectedPage from "./Pages/ProtectedPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <ProtectedPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;
