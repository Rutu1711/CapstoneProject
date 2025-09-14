import React from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import { BrowserRouter as Router, Routes, Route } from "react-router";
// import SignupPage from "./SignupPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
