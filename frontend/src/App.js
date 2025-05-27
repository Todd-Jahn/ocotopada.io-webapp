import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OctopodaChinese from "./components/OctopodaChinese";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OctopodaChinese />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;