import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OctopodaFinal from "./components/OctopodaFinal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OctopodaFinal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;