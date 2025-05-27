import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OctopodaLanding from "./components/OctopodaLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OctopodaLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;