import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aboutme from "./components/Aboutme";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <div>
      
    <Navbar/>
    <Aboutme/>
    <Work/>
    <Skills/>
    <Footer/>
      
        </div>
       
    </Router>
    
    
    </>
    
  );
}

export default App;
