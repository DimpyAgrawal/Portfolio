import React, { useEffect } from 'react'
import AOS from 'aos' 
import 'aos/dist/aos.css' 
import Projects from './Projects'
import Technologies from './Technologies'
import About from './About'
import '../App.css'
import photo from '../assets/dimpy.jpg'

function Home() {
  // useEffect(()=>{
  //   AOS.init({duration:2000});

  // },[]);

  return (
    <div id='home'  className='md:w-[100%] example  p-4 sm:p-0 bg-custom-navbar-bg flex w-screen'>
      <div className='text-custom-welcom sm:w-[40%] sm:ml-[17%] sm:mt-[4%]'>
        <h1 className=' text-4xl sm:text-5xl font-semibold font-roboto leading-normal mt-[4%]' data-aos="fade-right">Welcome To<br />Personal Portfolio </h1>
        <p className=' flex sm:p-0 text-xl mt-6 font-sans text-gray-400 leading-loose' data-aos="zoom-in-up">Dedicated software developer with expertise Data Structures and Algorithms and full-stack development using the MERN stack.
        </p>
        <button type="button" class=" bg-gradient-to-r font-semibold sm:pl-10 sm:pr-10  pl-2 pr-2 sm:pt-2 sm:pb-2 h-[2rem] sm:h-[4rem] mt-[10%] rounded-full from-green-400 to-blue-500" data-aos="fade-left" ><a className='font-thin sm:font-bold text-xl sm:text-2xl font-roboto' href="https://drive.google.com/file/d/1_AGw6n24Tt7Be9xwQJTK1f66C1v9JipQ/view?usp=sharing d">Get Resume</a></button>
        < hr className=' mt-14 mb-6 bg-gradient-to-r from-green-400 to-blue-500 w-20 h-2 rounded-full' data-aos="fade-right" />
      </div>
      <div className=' md:ml-[18%] mt-[9%] ' data-aos="zoom-in">
        <img className='h-[0] sm:w-[17vw] sm:h-[50vh] rounded-md ' src={photo} alt="" />
      </div>
    </div>

  )
}

export default Home
