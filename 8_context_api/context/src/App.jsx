import { useState } from "react";
import "./App.css";

import Navbar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <h1>Context API</h1>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
