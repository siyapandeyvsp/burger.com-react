import { useState, useEffect } from "react"
import React, { Component } from 'react';
import { Global, css } from "@emotion/react";
import PropagateLoader from 'react-spinners/PropagateLoader';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import Header from "./Components/Header";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";

import './App.css';
// import { Router } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top:20%;`;
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])
  return (
    <div className="App">
    {
      loading ? <PropagateLoader color={"#3d2514"} Loading={loading} css={override} size={40} />
        :
        <>
          <Navbar />
          <Header/>
          <Products/>
          <About/>
        <Contact/>
        </>
    }
  </div>
  );


}
export default App;
//practice for second commit