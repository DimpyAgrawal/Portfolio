import React, { useEffect } from 'react'
import AOS from 'aos' 
import 'aos/dist/aos.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Dash from '../assets/dashboard.png'
import Sociafy from '../assets/sociafy.png'
import Movie from '../assets/moviehunt.png'
import Legal from '../assets/legalease.png'

import Mallikors from '../assets/mallikors1.png'

const CarouselPage = () => {
  useEffect(()=>{
    AOS.init({duration:2000});

  },[]);
  return (
    <div id='projects' className='w-[100vw]  bg-custom-navbar-bg  flex flex-col '>
      <h1 className='text-4xl p-4 sm:p-0 sm:text-5xl sm:ml-[17%] font-sans mt-[5%] text-custom-white font-semibold' data-aos="fade-down-right">Projects</h1>

        <Carousel className='mx-auto w-full sm:w-[40rem] mt-[5rem] sm:card' >

        
        <div className='w-full sm:w-[80%] font-sans text-xl m-auto mt-[3rem] ' data-aos="flip-up">
            <div class='flex flex-col bg-custom-navbar-bg text-gray-100 shadow-xl shadow-gray-700 m-1 mt-5 lg:mt-0'>
              <img src={Mallikors} alt="" />
              <h1 class='flex text-2xl sm:text-4xl m-auto mt-2 font-roboto font-semibold text-gray-400'>Mallikors</h1>
              <hr class='mt-5 m-auto mb-5 bg-gradient-to-r from-green-400 to-blue-500 w-20 h-2 rounded-full' data-aos="fade-right" />
              <p class='shadow-sm ml-8  mr-8 m-auto shadow-black text-custom-font-color font-sans'>Mallikors Demo is a platform that helps businesses assess growth potential by comparing them to industry peers and provides a feature to connect with local service providers based on user needs.</p>

              <h2 class='flex m-auto mt-10 text-custom-font-color'>Stack</h2>
              <div class='ml-2 sm:ml-8 mr-8 flex mt-10 justify-between text-custom-font-color'>
                <p class='shadow-lg rounded-s-xl  shadow-black'>Mongo</p>
                <p class='shadow-lg rounded-s-xl ml-1 shadow-black'>Express</p>
                <p class='shadow-lg rounded-s-xl ml-1 shadow-black'>React</p>
                <p class='shadow-lg rounded-s-xl ml-1 shadow-black'>Node</p>
              </div>
              <div class='ml-8 mr-8 flex text-xl sm:text-2xl  mt-6 justify-around pb-2'>
                <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://github.com/DimpyAgrawal/Mallikors">Code</a></p>
                <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://mallikors.onrender.com/">View</a></p>
              </div>
            </div>
          </div>

          <div className=' w-full sm:w-[80%] font-sans text-xl m-auto mt-[3rem] ' data-aos="flip-up">
            <div class='flex flex-col bg-custom-navbar-bg text-gray-100 shadow-xl shadow-gray-700 m-1 mt-5 lg:mt-0'>
              <img src={Sociafy} alt="" />
              <h1 class='flex text-2xl sm:text-4xl  m-auto mt-2 font-roboto  font-semibold text-gray-400'>Sociafy</h1>
              <hr cla
              ss='mt-5 m-auto mb-5 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />
              <p class='shadow-sm ml-8 mr-8 m-auto shadow-black text-custom-font-color font-sans'>Sociafy is a social networking platform, facilitating connections and content sharing among
                users. </p>
              <h2 class='flex m-auto mt-10 text-xl text-custom-font-color'>Stack</h2>
              <div class='ml-8 mr-8 flex mt-10 justify-between text-custom-font-color'>
                <p class='shadow-lg rounded-s-xl shado`1w-black'>Mongo</p>
                <p class='shadow-lg rounded-s-xl shadow-black'>Express</p>
                <p class='shadow-lg rounded-s-xl shadow-black'>React</p>
                <p class='shadow-lg rounded-s-xl shadow-black'>Node</p>
              </div>
              <div class='ml-8 text-xl sm:text-2xl  mr-8 flex mt-14 justify-around pb-2'>
                <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://github.com/DimpyAgrawal/SociafyDimpy">Code</a></p>
                <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://sociafy-kk9x.onrender.com/">View</a></p>
              </div>
            </div>
          </div>  


          <div className='w-full sm:w-[80%] font-sans text-xl m-auto mt-[3rem] ' data-aos="flip-up">
            <div className='flex flex-col bg-custom-navbar-bg text-gray-100 shadow-xl shadow-gray-700 m-1 mt-5 lg:mt-0'>
              <img src={Legal} alt="" />
              <h1 class='flex text-2xl sm:text-4xl m-auto mt-2 font-roboto font-semibold text-gray-400'>LegalEase(SIH1286)</h1>
              <hr class='mt-5 m-auto mb-5 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />
              <p class='shadow-sm ml-8 mr-8 m-auto shadow-black text-custom-font-color font-sans'>Legal services platform serving as a vital intermediary between legal service providers and clients,
                facilitating seamless communication and collaboration.</p>
              <h2 class='flex m-auto mt-10 text-custom-font-color'>Stack</h2>
              <div class='ml-2 sm:ml-8 mr-8 flex mt-3 justify-between text-custom-font-color'>
                <p class='shadow-lg rounded-s-xl shadow-black'>Mongo</p>
                <p class='shadow-lg rounded-s-xl ml-1 shadow-black'>Express</p>
                <p class='shadow-lg rounded-s-xl ml-1 shadow-black'>React</p>
                <p class='shadow-lg rounded-s-xl ml-1 shadow-black'>Node</p>
              </div>
              <div class='ml-8 mr-8 text-xl sm:text-2xl  flex mt-14 justify-around pb-2'>
                <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://github.com/DimpyAgrawal/LegalEase1">Code</a></p>
                <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://legalease.onrender.com/">View</a></p>
              </div>
            </div>

          </div>

          <div className='w-full sm:w-[80%] font-sans text-xl m-auto mt-[3rem] ' data-aos="flip-up">
            <div class='flex flex-col bg-custom-navbar-bg text-gray-100 shadow-xl shadow-gray-700 m-1 mt-5 lg:mt-0'>
              <img src={Movie} alt="" />
              <h1 class='flex text-2xl sm:text-4xl m-auto mt-2 font-roboto font-semibold text-gray-400'>MovieHunt</h1>
              <hr class='mt-5 m-auto mb-5 bg-gradient-to-r from-green-400 to-blue-500 w-20 h-2 rounded-full' data-aos="fade-right" />
              <p class='shadow-sm ml-8  mr-8 m-auto shadow-black text-custom-font-color font-sans'>A web app enhancing your movie experience by allowing you to search, organize, and share films. With user authentication, personalized lists, and OMDB API integration, MovieHunt offers a sleek interface for curating your cinematic universe.</p>

              <h2 class='flex m-auto mt-10 text-custom-font-color'>Stack</h2>
              <div class='ml-2 sm:ml-8 mr-8 flex mt-10 justify-between text-custom-font-color'>
                <p class='shadow-lg rounded-s-xl  shadow-black'>Mongo</p>
                <p class='shadow-lg rounded-s-xl ml-1 shadow-black'>Express</p>
                <p class='shadow-lg rounded-s-xl ml-1 shadow-black'>React</p>
                <p class='shadow-lg rounded-s-xl ml-1 shadow-black'>Node</p>
              </div>
              <div class='ml-8 mr-8 flex text-xl sm:text-2xl  mt-6 justify-around pb-2'>
                <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://github.com/DimpyAgrawal/MovieHunt">Code</a></p>
                <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://moviehunt-ukw3.onrender.com/">View</a></p>
              </div>
            </div>
          </div>

          <div className='w-full sm:w-[80%] font-sans text-xl m-auto mt-[3rem] ' data-aos="flip-up">
            <div class='flex flex-col bg-custom-navbar-bg text-gray-100 shadow-xl shadow-gray-700 m-1 mt-5 lg:mt-0'>
              <img src={Dash} alt="" />
              <h1 class='flex text-2xl sm:text-4xl m-auto mt-2 font-sans font-semibold text-gray-400'>DashBoard</h1>
              <hr class='mt-5 m-auto mb-5 bg-gradient-to-r from-green-400 to-blue-500 w-20 h-2 rounded-full' data-aos="fade-right" />
                <p class='shadow-sm ml-8 mr-8 m-auto shadow-black text-custom-font-color font-sans'>Discover DashBoard: a portal to captivating imagery with the Random Picture API. Craft personalized cards, add titles, and edit them—all from your browser, letting each image tell its own story.
                </p>
                <h2 class='flex m-auto mt-10 text-custom-font-color'>Stack</h2>
              <div class='ml-2 sm:ml-8 mr-8 flex mt-10 justify-between text-custom-font-color'>
                <p class='shadow-lg rounded-s-xl shadow-black'>Express</p>
                <p class='shadow-lg rounded-s-xl shadow-black'>React</p>
                <p class='shadow-lg rounded-s-xl shadow-black'>Node</p>
              </div>
              <div class='ml-8 mr-8   text-xl sm:text-2xl flex mt-14 justify-around pb-2'>
                <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://github.com/DimpyAgrawal/Internship_Project1">Code</a></p>
                <p class='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'><a href="https://dashboard-5vfg.onrender.com/">View</a></p>
              </div>
            </div>
          </div>

        </Carousel>
    
    </div>
  );
};
export default CarouselPage