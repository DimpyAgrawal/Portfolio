import React from 'react'

function Technologies() {
  return (
    <div id='technologies' className='bg-custom-navbar-bg flex flex-col text-custom-font-color'>
      <h1 className='text-4xl ml-[17%] font-sans text-custom-white font-semibold'>Technologies</h1>
      <p className='ml-[17%] font-sans mt-[1%]'>I've worked with a range of technologies in the web development <br />world. From Back-end To Design</p>
      <div className='flex ml-[17%] mr-[40%] mt-[3%] justify-between'>
        <div>
          <img className='h-[30px]' src="https://www.digital-dividend.com/wp-content/uploads/2021/06/React-icon.png" alt="" />
          <h2 className='text-xl mt-2 font-semibold text-custom-white'>Front-End</h2>
          <p className='mt-1'>Experience with <br /> React.js</p>
        </div>

        <div>
          <img className='h-[30px]' src="https://companieslogo.com/img/orig/MDB.D-9b200438.png?t=1648915248" alt="" />
          <h2 className='text-xl mt-2 font-semibold text-custom-white'>Black-End</h2>
          <p className='mt-1'>Experience with <br /> Node and Databses</p>
        </div>

        <div>
          <img className='h-[30px]' src="https://www.buildateam.io/wp-content/uploads/2018/07/logo-java.png" alt="" />
          <h2 className='text-xl mt-2 font-semibold text-custom-white'>DSA</h2>
          <p className='mt-1'>Experience with <br />JAVA</p>
        </div>

      </div>
      < hr className='ml-[17%] mt-8 mb-6 bg-gradient-to-r from-green-400 to-blue-500 w-10 h-1 rounded-full' />

    </div>
  )
}

export default Technologies
