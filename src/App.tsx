import { Routes, Route } from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
