import { useState } from "react";
import "./App.css";

import { Outlet } from "react-router-dom";

// 5- link entre páginas
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <Outlet />
        <p>Footer</p>
      </div>
    </>
  );
}

export default App;
