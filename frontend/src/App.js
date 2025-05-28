import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OctopodaSimpleFixed from "./components/OctopodaSimpleFixed";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OctopodaSimpleFixed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;