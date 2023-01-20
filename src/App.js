import React from "react";
import "./index.css";
import Home from "./Routes/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/my-portfolio" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
