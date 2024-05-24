import React from 'react'

function Projects() {
  return (
    <div id='projects' className='bg-custom-navbar-bg flex flex-col'>
      <h1 className='text-4xl ml-[17%] font-sans text-custom-white font-semibold'>Projects</h1>
      <div className='flex ml-[20%] mt-[5%]  w-[50vw] m-auto '>
      <div class="flex flex-col bg-custom-navbar-bg text-gray-100 w-[50vw] shadow-xl shadow-gray-700">         
       <img src="https://i.ytimg.com/vi/UkqgaKJxfZ0/maxresdefault.jpg" alt="" />
          <h1 className='flex text-2xl m-auto mt-2 font-sans font-semibold text-gray-400'> MERN Memories</h1>
          < hr className='mt-5 m-auto mb-5 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />
            <p className='shadow-sm ml-8 mr-8  m-auto shadow-black text-custom-font-color font-sans'>Lorem ipsum,  Vel molestias inventore rem, laboriosam atque illum aspernatur laudantium. Deserunt, dignissimos dolore. laudantium dolor nostrum repellendus magnam iusto animi?</p>
            <h2 className='flex m-auto mt-2 text-custom-font-color '>Stack</h2>
            <div className=' ml-8 mr-8 flex mt-3 justify-between text-custom-font-color '>
              <p className='shadow-lg rounded-s-xl shadow-black'>Mongo</p>
              <p className='shadow-lg rounded-s-xl shadow-black'>Express</p>
              <p className='shadow-lg rounded-s-xl shadow-black'>React</p>
              <p className='shadow-lg rounded-s-xl shadow-black'>Node</p>
            </div>
            <div className=' ml-8 mr-8 flex mt-6 justify-around pb-2 '>
              <p className='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'>Code</p>
              <p className='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'>Source</p>

            </div>
        </div>
        <div className='flex flex-col ml-[10%] text-gray-100  bg-custom-navbar-bg w-[50vw] shadow-xl shadow-gray-700'>
          <img src="https://i.ytimg.com/vi/UkqgaKJxfZ0/maxresdefault.jpg" alt="" />
          <h1 className='flex text-2xl m-auto mt-2 font-sans font-semibold text-gray-400'> MERN Memories</h1>
          < hr className='mt-5 m-auto mb-5 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />
            <p className='shadow-sm  ml-8 mr-8  m-auto shadow-black text-custom-font-color font-sans'>Lorem ipsum,  magni ab ipsa nihil incidunt delectus. Impedit harum soluta voluptate iure ut. Porro veritatis possimus itaque aperiam ab, laudantium dolor nostrum repellendus magnam iusto animi?</p>
            <h2 className='flex m-auto mt-2 text-custom-font-color '>Stack</h2>
            <div className=' ml-8 mr-8 flex mt-3 justify-between text-custom-font-color  '>
              <p className='shadow-lg rounded-s-xl shadow-black'>Mongo</p>
              <p className='shadow-lg rounded-s-xl shadow-black'>Express</p>
              <p className='shadow-lg rounded-s-xl shadow-black'>React</p>
              <p className='shadow-lg rounded-s-xl shadow-black'>Node</p>
            </div>
            <div className='  ml-8 mr-8 flex mt-6 justify-around pb-2 '>
              <p className='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'>Code</p>
              <p className='bg-orange-950 pl-3 pr-3 pt-1 pb-1 text-amber-800 font-semibold rounded-lg'>Source</p>

            </div>
        </div>

        
      </div>
        < hr className='ml-[17%] mt-10 mb-6 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />
      
    </div>
  )
}

export default Projects
