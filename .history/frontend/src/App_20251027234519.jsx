import { useState } from 'react'


function App() {

  return (
    <>
      <header className='bg-[#0F0E0E] h-[90px] w-full absolute shadow-lg shadow-[#dc143c]'>
        <div className='flex justify-around items-center h-full text-white'>
          <h1 className='font-bold font-montserrat text-[25px]'>My Portfolio</h1>
          
          <div className='flex font-montserrat gap-6 font-semibold text-[20px]'>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
      </header>

      <body className='bg-linear-180 from-[#1E1E1E] to-[#0F0E0E] h-screen text-white'>
        <div className='flex justify-around items-center h-screen'>
          <div>
            <div>
            <h1 className='font-semibold'>Hi There!</h1>
            <p>Im Stephen</p>
            </div>
            <div className='mt-6'>
              <p className='font-semibold'>I'm a Frontend Web Developer</p>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

export default App
