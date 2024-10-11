// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileList from "./components/ProfileList";
import ProfileDetails from "./components/ProfileDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileList />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
