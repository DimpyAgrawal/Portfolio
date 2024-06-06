import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-custom-navbar-bg  sm:flex justify-around h-[10vh] text-custom-white shadow-sm shadow-black'>

      <div className='flex mt-5 ml-[25%] sm:ml-0 font-semibold font-sans '>
        <span class="material-symbols-outlined">circles</span>
         <a href="#home"> <h2>Portfolio</h2></a>
      </div>

      <div className='sm:flex ml-[17%] sm:ml-0  mt-5 font-semibold font-sans' >
        <a className=' scroll-smooth ' href="#technologies">Technologies</a>
        <a className='sm:ml-16 scroll-smooth ml-2' href="#projects">Projects</a>
        <a className='sm:ml-16 scroll-smooth ml-2' href="#about">About</a>
      </div>

      <div className='flex  mt-5  ml-[17%] sm:ml-0 ' >
        <a href="https://github.com/DimpyAgrawal"><img className='h-[30px]' src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="" /></a>
        <a href="https://www.linkedin.com/in/dimpy-agrawal/"><img className='h-[30px] ml-8' src="https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square-Dark.png" alt="" /></a>
        <a href=""><img className='h-[30px] ml-8' src="https://www.citypng.com/public/uploads/preview/hd-square-white-instagram-logo-icon-png-701751695118869dhkjddwaed.png" alt="" /></a>
      </div>


    </div>
  )
}

export default Navbar
