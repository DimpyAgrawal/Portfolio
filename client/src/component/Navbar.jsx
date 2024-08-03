import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 2000 });

  }, []);
  return (
    // <div className=' bg-custom-navbar-bg font-roboto  sm:flex justify-around h-[10vh] text-custom-white shadow-sm shadow-black' id="navbar-default">

    //   <button
    //     data-collapse-toggle="navbar-default"
    //     type="button"
    //     className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //     aria-controls="navbar-default"
    //     aria-expanded="false"
    //     onClick={() => document.getElementById('navbar-default').classList.toggle('hidden')}
    //   >
    //     <span className="sr-only">Open main menu</span>
    //     <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
    //     </svg>
    //   </button>

    //   <div className='flex mt-5 p-4 ml-[25%] sm:ml-0 font-semibold  ' data-aos="zoom-out-down">
    //     <span class="material-symbols-outlined text-6xl">circles</span>
    //     <a href="#home"> <h1 className='text-5xl'>Portfolio</h1></a>
    //   </div>

    //   <div className='sm:flex ml-[17%] sm:ml-0  mt-5 font-semibold text-4xl p-4 ' data-aos="zoom-out-down" >
    //     <a className=' scroll-smooth ' href="#technologies">Technologies</a>
    //     <a className='sm:ml-16 scroll-smooth ml-2' href="#projects">Projects</a>
    //     <a className='sm:ml-16 scroll-smooth ml-2' href="#about">About</a>
    //   </div>

    //   <div className='flex  mt-5 p-4 ml-[17%]  sm:ml-0 ' data-aos="fade-left" >
    //     <a href="https://github.com/DimpyAgrawal"><img className='h-[45px]' src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="" /></a>
    //     <a href="https://www.linkedin.com/in/dimpy-agrawal/"><img className='h-[45px] ml-8' src="https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square-Dark.png" alt="" /></a>
    //     <a href=""><img className='h-[45px] ml-8' src="https://www.citypng.com/public/uploads/preview/hd-square-white-instagram-logo-icon-png-701751695118869dhkjddwaed.png" alt="" /></a>
    //   </div>


    // </div>
    <nav className="example bg-custom-navbar-bg font-roboto text-custom-white shadow-sm shadow-black w-screen">
      {/* <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <div className="lg:hidden flex font-semibold" data-aos="zoom-out-down">
          <span className="material-symbols-outlined text-6xl">circles</span>
          <a href="#home" className="text-3xl">Portfolio</a>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center ml-[90%] p-2 w-10  justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => document.getElementById('navbar-default').classList.toggle('hidden')}
        >

          <span className=" sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div> */}

      <div className="hidden w-full lg:flex flex-col lg:flex-row items-center justify-around" id="navbar-default">
        <div className="flex mt-5 p-4 ml-[25%] sm:ml-0 font-semibold" data-aos="zoom-out-down">
          <span className="material-symbols-outlined text-5xl">circles</span>
          <a href="#home" className="text-4xl">Portfolio</a>
        </div>
        <div className="sm:flex ml-[17%] sm:ml-0 mt-5 font-semibold text-3xl p-4" data-aos="zoom-out-down">
          <a className="scroll-smooth" href="#technologies">Technologies</a>
          <a className="sm:ml-16 scroll-smooth ml-2" href="#projects">Projects</a>
          <a className="sm:ml-16 scroll-smooth ml-2" href="#about">About</a>
        </div>
        <div className="flex mt-5 p-4 ml-[17%] sm:ml-0" data-aos="fade-left">
          <a href="https://github.com/DimpyAgrawal"><img className="h-[40px]" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/dimpy-agrawal/"><img className="h-[40px] ml-8" src="https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square-Dark.png" alt="LinkedIn" /></a>
          <a href="https://www.instagram.com/dy.agrawal/"><img className="h-[40px] ml-8" src="https://www.citypng.com/public/uploads/preview/hd-square-white-instagram-logo-icon-png-701751695118869dhkjddwaed.png" alt="Instagram" /></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
