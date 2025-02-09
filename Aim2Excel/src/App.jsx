import React from "react";
import './App.css'
import Navbar from "./components/Shared/Navbar";
import Home from "./components/Shared/Home";
import About from "./components/Shared/About";

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <About/>
      </div>
    </>
  )
}

export default App
