import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import styles from "./app.module.css";
import About from "./components/About";
import Experience from "./components/Experience";
function App() {

  

  return (
    <div className={styles.container}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
    </div>
   
   
  );
}

export default App;
