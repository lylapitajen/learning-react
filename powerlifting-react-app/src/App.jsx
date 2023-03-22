import { useState } from "react";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Blogs />
      <Products />
      <Footer />
    </React.Fragment>
  );
}

export default App;
