import './App.css';
import { Routes } from "react-router-dom";
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import NutritionSearch from './components/nutrition/NutritionSearch';
import React, { useRef } from 'react';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';



function App() {
    const footerRef = useRef(null);
  
  return (
    <div className="App">
        <Navbar />
        <Banner footerRef={footerRef} />
        <Projects />
        <div ref={footerRef}>
            <NutritionSearch />
        </div>
        <Footer />
    </div>
  );
}

export default App;
