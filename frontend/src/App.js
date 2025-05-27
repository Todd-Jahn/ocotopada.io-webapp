import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OctopodaComplete from "./components/OctopodaComplete";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OctopodaComplete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;