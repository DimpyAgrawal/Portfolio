import React from 'react'

function About() {
  return (
    <div id='about' className='bg-custom-navbar-bg flex flex-col text-custom-font-color'>
      <h1 className='text-4xl ml-[17%] font-sans text-custom-white font-semibold'>About Me</h1>
      <p className='ml-[17%] font-sans mt-[1%]'>Passionate MERN stack developer proficient in MongoDB, Express.js, React.js, and Node.js,<br /> with a focus on crafting scalable web applications.<br /> With expertise in Java and data structures,I leverage DSA to create optimized algorithms and structures,<br /> forming the backbone of efficient software development</p>
      <div className='sm:flex justify-between w-[70%] mt-[2%] ml-[17%] shadow-custom-shadow shadow-md'>
        
        <div className='shadow-custom-shadow shadow-xl mt-2'>
          <h1 className='text-custom-white font-sans font-semibold text-xl'>2021</h1>
          <p className='sm:mt-2 text-gray-400'>Started my journey</p>
        </div>

        <div className='mt-5 sm:mt-0'>
          <h1 className='text-custom-white font-sans font-semibold text-xl'>2022</h1>
          <p className='sm:mt-2 text-gray-400'>Leveraged skills in<br/> DSA </p>
        </div>

        <div className='mt-5 sm:mt-0'>
          <h1 className='text-custom-white font-sans font-semibold text-xl'>2023</h1>
          <p className='sm:mt-2 text-gray-400'>Acquired web development skills<br/> </p>
        </div>

        <div className='mt-5 sm:mt-0'>
          <h1 className='text-custom-white font-sans font-semibold text-xl'>2024</h1>
          <p className=' sm:mt-2 text-gray-400'>Developing Projects</p>
        </div>
      </div>

      < hr className='ml-[17%] mt-8 mb-6 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />
      <h1 className='text-4xl ml-[17%] font-sans text-custom-white font-semibold'>Personal Achievements</h1>

      <div className='sm:flex ml-[17%] w-[70%] justify-between mt-[2%] '>
        <div className=' shadow-lg bg-slate-900 shadow-gray-950 w-[50%] sm:w-[20%] p-4 rounded-xl pr-10'>
          <h1 className='font-sans font-bold text-2xl text-custom-welcom'>400+</h1>
          <p className='mt-1 text-gray-400'>LeetCode Questions</p>
        </div>

        <div className='mt-2 sm:mt-0 shadow-lg bg-slate-900 w-[50%] sm:w-[20%] shadow-gray-950 p-4 rounded-xl pr-10'>
          <h1 className='font-sans font-bold text-2xl text-custom-welcom'>5&#11088;</h1>
          <p className='mt-1 text-gray-400'>Hackerrank <br/>JAVA</p>
        </div>

        <div className='mt-2 sm:mt-0 shadow-lg bg-slate-900 w-[50%] sm:w-[20%] shadow-gray-950 p-4 rounded-xl pr-10'>
          <h1 className='font-sans font-bold text-2xl text-custom-welcom'>400+</h1>
          <p className='mt-1 text-gray-400'>CodeChef Questions</p>
        </div>

        <div className='mt-2 sm:mt-0 shadow-lg bg-slate-900 w-[50%] sm:w-[20%] shadow-gray-950 p-4 rounded-xl pr-10'>
          <h1 className='font-sans font-bold text-2xl text-custom-welcom'>3+</h1>
          <p className='mt-1 text-gray-400'>Tech Hackathons</p>
        </div>
        
        
        
        
       
      </div>

      < hr className='ml-[17%] mt-8 mb-6 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />

      <div className='flex ml-[17%] w-[40%] mt-[2%] justify-between '>
        <div > 
          <p className=' text-custom-font-color'>CALL</p>
          <p className='text-gray-400 mt-4'> +91 8979998506</p>
        </div>
        <div> 
          <p className=' text-custom-font-color'>Email</p>
          <p className='text-gray-400 mt-4  '>dimpyagrawal101@gmail.com</p>
        </div>
      </div>


    </div>
  )
}

export default About
