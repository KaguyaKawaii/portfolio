import { useState } from 'react'
import pic from './assets/image.png'
import project from './assets/project.png'

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
            <div className='text-2xl'>
              <h1 className='font-semibold'>Hi There!</h1>
              <p>Im Stephen</p>
            </div>
            <div className='mt-6'>
              <p className='font-semibold text-5xl'>I'm a  <span className="drop-shadow-[0_0_30px_#dc143c] text-red-500">Frontend Web Developer</span></p>
              
            </div>
          </div>

          <div className=''>
          <img
            src={pic}
            alt="profile"
            className="w-full h-full object-cover rounded-4xl"
            style={{
              maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
            }}
          />  
          </div>
        </div>

        <div className='flex justify-center items-center text-gray-700 text-lg font-montserrat font-semibold animate-pulse absolute bottom-10 w-full'>
          Scroll down
        </div>
        
          {/* Body 2 */}
          <div className='h-screen'>
            <div>
              <h1 className='text-white font-montserrat text-4xl font-bold text-center pt-20'>About Me</h1>
              <p className='text-gray-400 font-montserrat text-center mt-6 mx-20 leading-relaxed'>
                I am a passionate frontend web developer with a knack for creating visually appealing and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive designs that adapt seamlessly across various devices. My goal is to deliver exceptional user experiences through clean code and innovative design solutions.
              </p>

              <div className='flex flex-col items-center'>
                <h1 className='text-white font-montserrat text-4xl font-bold text-center pt-20'>Project</h1>

                <div className='flex justify-center items-center mt-10'>
                  <img src={project}
                  className='w-[1000px] h-[500px]'
                  alt="" />
                </div>
              </div>
            </div>
            
          </div>

      </body>

      

      
    </>
  )
}

export default App
