import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OctopodaMinimal from "./components/OctopodaMinimal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OctopodaMinimal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;