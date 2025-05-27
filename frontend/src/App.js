import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OctopodaSimple from "./components/OctopodaSimple";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OctopodaSimple />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;