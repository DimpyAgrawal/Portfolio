import React, { useEffect } from 'react'
import AOS from 'aos' 
import 'aos/dist/aos.css'

function About() {
  useEffect(()=>{
    AOS.init({duration:2000});

  },[]);
  return (
    <div id='about' className='example p-4 sm:p-0 bg-custom-navbar-bg flex flex-col text-custom-font-color w-screen'>
      <h1 className='text-4xl sm:text-5xl sm:ml-[17%] mt-[7%] font-roboto text-custom-white font-semibold' data-aos="fade-up">About Me</h1>
      <p className=' sm:ml-[17%] text-xl font-sans leading-loose mt-[3%]' data-aos="zoom-in"> Passionate MERN stack developer proficient in MongoDB, Express.js, React.js, and Node.js,<br /> with a focus on crafting scalable web applications.<br /> With expertise in Java and data structures,I leverage DSA to create optimized algorithms and structures,<br /> forming the backbone of efficient software development</p>
      <div className='sm:flex justify-between text-2xl  w-[70%] mt-[6%] sm:ml-[17%] shadow-custom-shadow shadow-md'>
        
        <div className='  shadow-custom-shadow shadow-xl p-2 ' data-aos="fade-right">
          <h1 className='text-custom-white font-sans font-semibold text-2xl'>2021</h1>
          <p className='sm:mt-2 text-gray-400 text-xl'>Started my journey</p>
        </div>

        <div className='mt-5 sm:mt-0 p-2' data-aos="fade-up">
          <h1 className='text-custom-white font-sans font-semibold text-2xl'>2022</h1>
          <p className='sm:mt-2 text-gray-400 text-xl'>Leveraged skills in<br/> DSA </p>
        </div>

        <div className=' mt-5 sm:mt-0 p-2' data-aos="fade-down">
          <h1 className='text-custom-white font-sans font-semibold text-2xl'>2023</h1>
          <p className='sm:mt-2 text-gray-400 text-xl'>Acquired web development skills<br/> </p>
        </div>

        <div className='mt-5 sm:mt-0 p-2 ' data-aos="fade-left">
          <h1 className='text-custom-white font-sans font-semibold text-2xl'>2024</h1>
          <p className=' sm:mt-2 text-gray-400 text-xl'>Developing Projects</p>
        </div>
      </div>

      < hr className=' sm:ml-[17%] mt-[8rem] mb-6 bg-gradient-to-r from-green-400 to-blue-500 w-20 h-2 rounded-full' data-aos="fade-right" />
      <h1 className='text-4xl sm:text-5xl sm:ml-[17%] font-roboto mt-[8.5%] text-custom-white font-semibold' data-aos="flip-left"
      >Personal Achievements</h1>

      <div className='text-xl sm:flex sm:ml-[17%] w-full sm:w-[70%] justify-between mt-[10%] sm:mt-[6%] '  >
        <div className=' shadow-lg bg-slate-900 shadow-gray-950 w-[50%] sm:w-[20%] p-4 rounded-xl pr-10 ' data-aos="fade-down" >
          <h1 className='font-sans font-bold text-2xl text-custom-welcom'>450+</h1>
          <p className='mt-1 text-gray-400'>LeetCode Questions</p>
        </div>

        <div className=' mt-10 sm:mt-0 shadow-lg text-xl bg-slate-900 w-[50%] sm:w-[20%] shadow-gray-950 p-4 rounded-xl pr-10' data-aos="fade-down">
          <h1 className='font-sans font-bold text-2xl text-custom-welcom'>5&#11088;</h1>
          <p className='mt-1 text-gray-400'>Hackerrank <br/>JAVA</p>
        </div>

        <div className='mt-10 sm:mt-0 shadow-lg bg-slate-900 w-[50%] sm:w-[20%] shadow-gray-950 p-4 rounded-xl pr-10' data-aos="fade-down">
          <h1 className='font-sans font-bold text-2xl text-custom-welcom'>400+</h1>
          <p className='mt-1 text-gray-400 '>CodeChef Questions</p>
        </div>

        <div className='mt-10  sm:mt-0 shadow-lg bg-slate-900 w-[50%] sm:w-[20%] shadow-gray-950 p-4 rounded-xl pr-10' data-aos="fade-down">
          <h1 className='font-sans font-bold text-2xl text-custom-welcom'>3+</h1>
          <p className='mt-1 text-gray-400'>Tech Hackathons</p>
        </div>
        
        
        
        
       
      </div>

      < hr className=' sm:ml-[17%] mt-[8rem] mb-6 bg-gradient-to-r from-green-400 to-blue-500 w-20 h-2 rounded-full'  data-aos="fade-right"  />

      <div className='flex flex-col md:flex sm:ml-[12%] w-[40%] sm:p-20 text-xl sm:text-2xl pb-36 mt-[3%] justify-between '>
        <div data-aos="fade-up"  > 
          <p className=' text-custom-font-color'>CALL</p>
          <p className='text-gray-400 mt-4'> +918979998506</p>
        </div>
        <div  className='mt-10' data-aos="fade-up" > 
          <p className=' text-custom-font-color '>Email</p>
          <p className='text-gray-400 mt-4  '>dimpyagrawal101@gmail.com</p>
        </div>
      </div>


    </div>
  )
}

export default About
