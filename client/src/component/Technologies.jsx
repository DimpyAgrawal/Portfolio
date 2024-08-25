import React, { useEffect } from 'react'
import AOS from 'aos' 
import 'aos/dist/aos.css'
function Technologies() { 
   useEffect(()=>{
  AOS.init({duration:2000});

},[]);

  
  return (
    <div id='technologies' className=' p-4 sm:p-0 example bg-custom-navbar-bg font-sans flex flex-col text-custom-font-color w-screen overflow-clip'>
      <h1 className='text-4xl sm:text-5xl heading-bounce sm:ml-[17%] font-roboto mt-[7%] text-custom-white font-semibold' data-aos="fade-down">Technologies</h1>
      <p className='p-2 sm:p-2 sm:ml-[17%] text-xl font-sans leading-loose mt-[3%]' data-aos="zoom-out-up">I've worked with a range of technologies in the web development <br />world. From Back-end To Design</p>
     
      <div className=' sm:flex p-4 sm:ml-[17%] lg:w-[45vw]  sm:w-[80vw] text-xl mr-[40%] mt-[5%] justify-between'  data-aos="flip-left">
        <div className='sm:mt-2 tech cursor-pointer'>
          <img className='h-[70px]' src="https://www.digital-dividend.com/wp-content/uploads/2021/06/React-icon.png" alt="" />
          <h2 className='text-2xl sm:text-3xl mt-5 font-semibold text-custom-white'>Front-End</h2>
          <p className='mt-5'>Experience with <br /> React.js</p>
        </div>

        <div className='mt-10 sm:mt-2 tech cursor-pointer'  data-aos="flip-left">
          <img className='h-[70px]' src="https://companieslogo.com/img/orig/MDB.D-9b200438.png?t=1648915248" alt="" />
          <h2 className='text-2xl sm:text-3xl mt-5 font-semibold text-custom-white'>Back-End</h2>
          <p className='mt-5'>Experience with <br /> Node and Databases</p>
        </div>

        <div className='mt-10 sm:mt-2 tech cursor-pointer'  data-aos="flip-left">
          <img className='h-[70px]' src="https://www.buildateam.io/wp-content/uploads/2018/07/logo-java.png" alt="" />
          <h2 className='text-2xl sm:text-3xl mt-5 font-semibold text-custom-white'>DSA</h2>
          <p className='mt-5'>Experience with <br />JAVA</p>
        </div>

      </div>
      < hr className='heading-slide-left sm:ml-[17%] mt-[8rem] mb-6 bg-gradient-to-r from-green-400 to-blue-500 w-20 h-2 rounded-full' />

    </div>
  )
}

export default Technologies
