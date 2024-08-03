import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Technologies from './component/Technologies';
import C from './component/C';
import './App.css';

function App() {
  return (
    <div className='example  overflow-x-clip'>
      <Navbar/>
      <Home/>
      <Projects/>
      <Technologies/>
      <About/>
      {/* <C/> */}

    </div>
  )
}

export default App
