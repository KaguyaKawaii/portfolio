import { useState } from 'react'
import pic from './assets/image.png'
import project from './assets/project.png'
import project2 from './assets/project2.png'


function App() {

  return (
    <>
      <header className='bg-[#0F0E0E] h-[90px] w-full shadow-lg shadow-[#dc143c] fixed top-0 z-50'>
        <div className='flex justify-around items-center h-full text-white'>
          <h1 className='font-bold font-montserrat text-[25px]'>My Portfolio</h1>
          
          <div className='flex font-montserrat gap-6 font-semibold text-[20px]'>

            <button
              onClick={() => {
                document.getElementById("home").scrollIntoView();
              }}
              className="hover:text-red-500 duration-300 cursor-pointer"
            >
              
            <p className=''>Home</p>
            </button>
            
            <button
              onClick={() => {
                document.getElementById("about").scrollIntoView();
              }}
              className="hover:text-red-500 duration-300 cursor-pointer"
            >
              
            <p>About Me</p>
            </button>

            <button
              onClick={() => {
                document.getElementById("project").scrollIntoView();
              }}
              className="hover:text-red-500 duration-300 cursor-pointer"
            >
              
            <p>Project</p>
            </button>

            <p>Contact</p>
          </div>
        </div>
      </header>

      <body className='bg-linear-180 from-[#1E1E1E] to-[#0F0E0E] h-screen text-white'>
        <div id='home' className='flex justify-around items-center h-screen'>
          <div>
            <div className='text-2xl'>
              <h1 className='font-semibold'>Hello, I'm Stephen</h1>
              
            </div>
            <div className='mt-6 animate-fade-in'>
              <p className='font-semibold text-5xl'>I'm a  <span className="drop-shadow-[0_0_50px_#dc143c] text-red-500 animate-pulse">Frontend Web Developer &lt;/&gt;</span></p>

              <div className='m-6'>
                
                  <p className='ring-1 ring-red-500 text-red-500 rounded-3xl w-[150px] p-3 text-center hover:text-gray-800 hover:bg-white hover:ring-gray-800 transition-all duration-300 cursor-pointer'>Download CV</p>
                
              </div>
              
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
          <div className='h-full w-full pt-20 pb-20 bg-[#1E1E1E] '>

            <div className='flex gap-6 justify-center items-center h-[20vh] font-semibold text-3xl text-white'>
              <div className="flex flex-wrap gap-6 justify-center">

                <div className="flex flex-wrap gap-6 justify-center text-white">
                  {/* HTML5 */}
                  <div className="flex items-center hover:scale-110 transition-all ring-1 hover:ring-red-100 rounded-lg p-5 gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                    <i className="devicon-html5-plain text-orange-500 text-5xl"></i>
                    <p className='text-2xl text-gray-800 font-semibold'>HTML</p>
                  </div>

                  {/* CSS3 */}
                  <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-5 gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                    <i className="devicon-css3-plain text-blue-500 text-5xl"></i>
                    <p className='text-2xl text-gray-800 font-semibold'>CSS</p>
                  </div>

                  {/* JavaScript */}
                  <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-5 gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                    <i className="devicon-javascript-plain text-yellow-400 text-5xl"></i>
                    <p className='text-2xl text-gray-800 font-semibold'>Javascript</p>
                  </div>

                  {/* React.js */}
                  <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-5 gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                    <i className="devicon-react-original text-cyan-400 text-5xl"></i>
                    <p className='text-2xl text-gray-800 font-semibold'>React.js</p>
                  </div>

                  

                  {/* Node.js */}
                  <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-5 gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                    <i className="devicon-nodejs-plain text-green-500 text-5xl"></i>
                    <p className='text-2xl text-gray-800 font-semibold'>Node.js</p>
                  </div>

                  {/* Express.js */}
                  <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-5 gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                    <i className="devicon-express-original text-gray-500 text-5xl"></i>
                    <p className='text-2xl text-gray-800 font-semibold'>Express.js</p>
                  </div>

                  {/* MongoDB */}
                  <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-5 gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                    <i className="devicon-mongodb-plain text-green-600 text-5xl"></i>
                    <p className='text-2xl text-gray-800 font-semibold'>MongoDB</p>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-5 gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                    <i className="devicon-github-original text-black text-5xl"></i>
                    <p className='text-2xl text-gray-800 font-semibold'>Github</p>
                    
                  </div>
                </div>

              </div>

            </div>

            
            
          </div>

          <div id='about' className='h-full pt-6 pb-6 bg-[#1E1E1E]'>
              <h1 className='text-white font-montserrat text-4xl font-bold text-center pt-20'>About Me</h1>
              <p className='text-gray-400 font-montserrat text-center mt-6 mx-20 leading-relaxed'>
                I am a passionate frontend web developer with a knack for creating visually appealing and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive designs that adapt seamlessly across various devices. My goal is to deliver exceptional user experiences through clean code and innovative design solutions.
              </p> 

          </div>

          <div id='project' className='h-full pt-6 pb-6 bg-[#1E1E1E]'>

            <h1 className='text-white font-montserrat text-4xl font-bold text-center pt-20'>Project</h1>
              
              <div className='flex flex-col'>
                <div className='flex items-center justify-between mx-50  h-[600px]'>
                  
                  <div>
                    <a href="https://circulink-beta-testing.vercel.app/" target="_blank" rel="">
                    <img src={project}
                    className='rounded-2xl shadow-2xl hover:shadow-red-800 transition-all duration-500 hover:scale-110 w-[800px] h-[500px]'
                    alt="" />
                    </a>
                  </div>

                  <div className=''>
                    <h1 className='text-4xl font-semibold' >CircuLink</h1>
                    <p>Modern Web-Based Library Room Reservation System</p>
                  </div>
                  
                </div>

                {/* <div className='flex items-center justify-between mx-50  h-[600px]'>
                   <div className='text-left'>
                    <h1 className='text-4xl font-semibold' >DeliverDash</h1>
                    <p>Fast and Reliable Delivery Services</p>
                  </div>

                  <div>
                    <img src={project2}
                    className='rounded-2xl  shadow-2xl hover:shadow-red-800 transition-all duration-500 hover:scale-110 w-[800px] h-[500px]'
                    alt="" />
                  </div>

                 
                  
                </div> */}


              </div>

              
          </div>

          <div id="contact" className="py-20 bg-gray-900 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <p className="text-gray-300 mb-8">
              Feel free to reach out for collaborations or just a friendly hello 👋
            </p>

            <div className="flex justify-center gap-6 text-2xl">
              <a href="" className="hover:text-[#dc143c] transition">📧</a>
              <a href="" target="_blank" className="hover:text-[#dc143c] transition">💻</a>
              <a href="" target="_blank" className="hover:text-[#dc143c] transition">🐦</a>
              <a href="" target="_blank" className="hover:text-[#dc143c] transition">📷</a>
              <a href="" target="_blank" className="hover:text-[#dc143c] transition">📘</a>
            </div>
          </div>

      </body>

      

      
    </>
  )
}

export default App
