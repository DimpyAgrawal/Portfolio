import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Technologies from './component/Technologies';

function App() {
  return (
    <div>
      {/* <BrowserRouter>

        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/technologies' element={<Technologies />} />
        </Routes>
      </BrowserRouter> */}

      <Navbar/>
      <Home/>
      <Projects/>
      <Technologies/>
      <About/>

    </div>
  )
}

export default App
