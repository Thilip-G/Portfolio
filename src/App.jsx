import React from "react";
import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Project from "./Components/Project";

const App=()=>{
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </>
    );
}

export default App;