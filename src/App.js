import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </div>
  );
}

export default App;
