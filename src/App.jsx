import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link as RouterLink,
} from "react-router-dom";

import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import ProtectedPage from "./components/ProtectedPage.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/protected" element={<ProtectedPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
