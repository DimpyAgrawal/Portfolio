import React from 'react'
import Dash from '../assets/dashboard.png'
import Sociafy from '../assets/sociafy.png'
import Movie from '../assets/moviehunt.png'
import Legal from '../assets/legalease.png'


function Projects() {
  return (
    <div id='projects' className='bg-custom-navbar-bg  flex flex-col '>
      <h1 className='text-4xl ml-[17%] font-sans text-custom-white font-semibold'>Projects</h1>
    
      <div class='flex flex-wrap md:ml-[20%] justify-between mt-[5%] w-[50vw] m-auto'>
      


        <div class='flex flex-col bg-custom-navbar-bg text-gray-100 w-[100%] lg:w-[48%]  shadow-xl shadow-gray-700 m-1 mt-5 lg:mt-0 '>
          <img src={Sociafy} alt="" />
          <h1 class='flex text-2xl m-auto mt-2 font-sans font-semibold text-gray-400'>Sociafy</h1>
          <hr class='mt-5 m-auto mb-5 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />
          <p class='shadow-sm ml-8 mr-8 m-auto shadow-black text-custom-font-color font-sans'>Sociafy is a social networking platform, facilitating connections and content sharing among   
users. </p>
          <h2 class='flex m-auto mt-2 text-custom-font-color'>Stack</h2>
          <div class='ml-8 mr-8 sm:flex mt-3 justify-between text-custom-font-color'>
            <p class='shadow-lg rounded-s-xl shadow-black'>Mongo</p>
            <p class='shadow-lg rounded-s-xl shadow-black'>Express</p>
            <p class='shadow-lg rounded-s-xl shadow-black'>React</p>
            <p class='shadow-lg rounded-s-xl shadow-black'>Node</p>
          </div>
          <div class='ml-8 mr-8 flex mt-6 justify-around pb-2'>
            <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://github.com/DimpyAgrawal/SociafyDimpy">Code</a></p>
            <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://sociafy-kk9x.onrender.com/">View</a></p>
          </div>
        </div>


        <div class='flex flex-col mt-5 bg-custom-navbar-bg text-gray-100 w-[100%] lg:w-[48%]  shadow-xl shadow-gray-700 m-1'>
          <img src={Legal} alt="" />
          <h1 class='flex text-2xl m-auto mt-2 font-sans font-semibold text-gray-400'>LegalEase(SIH1286)</h1>
          <hr class='mt-5 m-auto mb-5 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />
          <p class='shadow-sm ml-8 mr-8 m-auto shadow-black text-custom-font-color font-sans'>Legal services platform serving as a vital intermediary between legal service providers and clients,
facilitating seamless communication and collaboration.</p>
          <h2 class='flex m-auto mt-2 text-custom-font-color'>Stack</h2>
          <div class='ml-8 mr-8 sm:flex mt-3 justify-between text-custom-font-color'>
            <p class='shadow-lg rounded-s-xl shadow-black'>Mongo</p>
            <p class='shadow-lg rounded-s-xl shadow-black'>Express</p>
            <p class='shadow-lg rounded-s-xl shadow-black'>React</p>
            <p class='shadow-lg rounded-s-xl shadow-black'>Node</p>
          </div>
          <div class='ml-8 mr-8 flex mt-6 justify-around pb-2'>
            <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://github.com/DimpyAgrawal/LegalEase1">Code</a></p>
            <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://legalease.onrender.com/">View</a></p>
          </div>
        </div>

        <div class='flex flex-col mt-5 bg-custom-navbar-bg text-gray-100 w-[100%] lg:w-[48%]  shadow-xl shadow-gray-700 m-1'>
          <img src={Movie} alt="" />
          <h1 class='flex text-2xl m-auto mt-2 font-sans font-semibold text-gray-400'>MovieHunt</h1>
          <hr class='mt-5 m-auto mb-5 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />
          <p class='shadow-sm ml-8 mr-8 m-auto shadow-black text-custom-font-color font-sans'>A feature-rich web application designed to enhance your movie-watching experience by allowing you to search, organize, and share your favorite films effortlessly. With user authentication, personalized movie lists, and seamless integration with the OMDB API, MovieHunt provides a sleek and intuitive interface to curate your own cinematic universe.</p>
          <h2 class='flex m-auto mt-2 text-custom-font-color'>Stack</h2>
          <div class='ml-8 mr-8 sm:flex mt-3 justify-between text-custom-font-color'>
            <p class='shadow-lg rounded-s-xl shadow-black'>Mongo</p>
            <p class='shadow-lg rounded-s-xl shadow-black'>Express</p>
            <p class='shadow-lg rounded-s-xl shadow-black'>React</p>
            <p class='shadow-lg rounded-s-xl shadow-black'>Node</p>
          </div>
          <div class='ml-8 mr-8 flex mt-6 justify-around pb-2'>
            <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://github.com/DimpyAgrawal/MovieHunt">Code</a></p>
            <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://moviehunt-ukw3.onrender.com/">View</a></p>
          </div>
        </div>

        <div class='flex flex-col  bg-custom-navbar-bg text-gray-100 w-[100%] lg:w-[48%] shadow-xl shadow-gray-700 m-1'>
          <img src={Dash} alt="" />
          <h1 class='flex text-2xl m-auto mt-2 font-sans font-semibold text-gray-400'>DashBoard</h1>
          <hr class='mt-5 m-auto mb-5 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />
          <p class='shadow-sm ml-8 mr-8 m-auto shadow-black text-custom-font-color font-sans'>Discover DashBoard: your portal to a world of captivating imagery! With every click, immerse yourself in a new visual adventure courtesy of the Random Picture API. Craft personalized cards, add titles, and effortlessly edit or delete them—all from your browser. Embrace spontaneity and let each image tell its own unique story.</p>
          <h2 class='flex m-auto mt-2 text-custom-font-color'>Stack</h2>
          <div class='ml-8 mr-8 sm:flex mt-3 justify-between text-custom-font-color'>
            <p class='shadow-lg rounded-s-xl shadow-black'>Express</p>
            <p class='shadow-lg rounded-s-xl shadow-black'>React</p>
            <p class='shadow-lg rounded-s-xl shadow-black'>Node</p>
          </div>
          <div class='ml-8 mr-8 flex mt-6 justify-around pb-2'>
            <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://github.com/DimpyAgrawal/Internship_Project1">Code</a></p>
            <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://dashboard-5vfg.onrender.com/">View</a></p>
          </div>
        </div>

      </div>






      < hr className='ml-[17%] mt-10 mb-6 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />

    </div>
  )
}

export default Projects
