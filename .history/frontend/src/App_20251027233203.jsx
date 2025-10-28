import { useState } from 'react'


function App() {

  return (
    <>
      <header className='bg-[#0F0E0E] h-[90px]'>
        <div className='flex justify-around items-center h-full text-white'>
          <h1 className='font-bold text-[25px]'>My Portfolio</h1>
          
          <div className='flex gap-6 font-semibold text-[20px]'>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
      </header>

      <body className='bg-linear-180 from-[#1E1E1E] to-[#0F0E0E] h-screen text-white'>
        <div>
          <h1></h1>
        </div>
        
      </body>
    </>
  )
}

export default App
