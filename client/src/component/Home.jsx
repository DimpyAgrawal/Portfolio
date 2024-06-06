import React from 'react'
import Projects from './Projects'
import Technologies from './Technologies'
import About from './About'

function Home() {
  return (
    <div id='home' className='bg-custom-navbar-bg flex flex-col'>
      <div className='text-custom-welcom  font-sans w-[40%] ml-[17%] sm:mt-[4%] mt-[25%]'>
        <h1 className='text-5xl font-semibold font-sans '>Welcome To<br />My Personal Portfolio </h1>
        <p className='flex mt-6 font-sans text-gray-400'>Dedicated software developer with expertise Data Structures and Algorithms<br/> and full-stack development using the MERN stack.
        </p>
        <button type="button" class="bg-gradient-to-r font-semibold pl-10 pr-10 pt-2 pb-2 mt-6 rounded-full from-green-400 to-blue-500 "><a href="https://drive.google.com/file/d/1_AGw6n24Tt7Be9xwQJTK1f66C1v9JipQ/view?usp=sharing">Get CV</a></button>
        < hr className='mt-10 mb-6 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />
      </div>
    </div>

  )
}

export default Home
