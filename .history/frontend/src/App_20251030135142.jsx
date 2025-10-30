import { useState } from 'react'
import pic from './assets/image.png'
import project from './assets/project.png'
import project2 from './assets/project2.png'
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


function App() {

  return (
    <>
      <header className='bg-[#0F0E0E] h-[90px] w-full shadow-lg shadow-[#dc143c] absolute top-0 z-50'>
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

            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView();
              }}
              className="hover:text-red-500 duration-300 cursor-pointer"
            >
              
            <p>Contact</p>
            </button>
          </div>
        </div>
      </header>

      <body className='bg-linear-180 from-[#1E1E1E] to-[#0F0E0E] h-screen text-white'>
        <div id='home' className='flex justify-around items-center h-screen'>
          <div>
            <div className='text-2xl'>
              <h1 className='font-semibold'>Hello, I'm Stephen P. Madero Jr.</h1>
              
            </div>
            <div className='mt-6 animate-fade-in'>
              <p className='font-semibold text-5xl'>I'm a  <span className="drop-shadow-[0_0_50px_#dc143c] text-red-500 animate-pulse">Frontend Web Developer &lt;/&gt;</span></p>

              <div className='m-6'>
                
                  <p className='ring-1 ring-red-500 text-red-500 rounded-3xl w-[250px] p-3 text-center hover:text-gray-800 hover:bg-white hover:ring-gray-800 transition-all duration-300 cursor-pointer hover:font-semibold'>Download Resume</p>
                
              </div>

              <div className='flex gap-6 pt-[50px]'>
                {/* Email */}
              <a
                href=""
                className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-2  w-[50px] h-[50px] text-2xl flex justify-center items-center hover:scale-120"
              >
                <MdEmail />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/stephenmadero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-2  w-[50px] h-[50px] text-2xl flex justify-center items-center hover:scale-120"
              >
                <FaGithub />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/stephenmadero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-2  w-[50px] h-[50px] text-2xl flex justify-center items-center hover:scale-120"
              >
                <FaXTwitter />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/stephenmadero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-2  w-[50px] h-[50px] text-2xl flex justify-center items-center hover:scale-120"
              >
                <FaInstagram />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/stephenmadero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-2  w-[50px] h-[50px] text-2xl flex justify-center items-center hover:scale-120"
              >
                <FaFacebook />
              </a>
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
              <p className='text-gray-200 font-montserrat text-center mt-6 mx-20 leading-relaxed'>
Hi! I’m Stephen, a 22-year-old Frontend Web Developer who began my journey in web development back in school. What started as simple curiosity soon grew into a genuine passion for creating websites that don’t just look good but also feel great to use.

I specialize in building business websites that are clean, responsive, and easy to navigate. Using tools like React.js, Vite, and Tailwind CSS, I love turning ideas into interactive and visually appealing experiences. I pay close attention to design and functionality because I believe a great website should connect with people, not just display information.

Beyond coding, I’m driven by the goal of constantly improving myself learning new techniques, refining my skills, and staying up to date with the ever-evolving world of frontend development. Every project I take on is an opportunity to challenge myself and bring something meaningful to life on the web.              </p> 

          </div>

          <div id='project' className='h-full pt-6 pb-6 bg-[#1E1E1E]'>

            <h1 className='text-white font-montserrat text-4xl font-bold text-center pt-20'>Project</h1>
              
              <div className='flex flex-col'>
                <div className='flex items-center justify-between mx-50  h-[600px]'>
                  
                  <div>
                    <a  href="https://circulink-beta-testing.vercel.app/" target="_blank" rel="">
                    <img src={project}
                    
                    alt="" />
                    </a>
                  </div>

                  <div className=''>
                    <h1 className='text-4xl font-semibold' >CircuLink</h1>
                    <p className="text-red font-medium">Capstone Project | Web-Based Library Room Reservation System</p>
                    <div className='border-b my-5 border-gray-500'></div>
                    <p className="mt-2 text-gray-200 w-[550px]">
  CircuLink is an innovative web-based system that simplifies how library rooms are reserved and managed. 
  Built with a focus on accessibility and efficiency, it enables students and faculty to book rooms effortlessly, 
  view real-time schedules, and receive instant updates ensuring a smooth and organized reservation experience for everyone.
</p>
                  </div>
                  
                </div>


              </div>

              
          </div>

          <div id="contact" className="h-[30vh] flex flex-col items-center justify-center bg-[#0F0E0E] text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <div className='flex gap-6'>
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

            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView();
              }}
              className="hover:text-red-500 duration-300 cursor-pointer"
            >
              
            <p>Contact</p>
            </button>
            </div>

            <div className="flex justify-center gap-6 text-3xl mt-6">


                  

              {/* Email */}
              <a
                href="mailto:stephenpatingomadero@gmail.com"
                className="hover:text-[#dc143c] transition"
              >
                <MdEmail />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/KaguyaKawaii"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dc143c] transition"
              >
                <FaGithub />
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/callmekaguyaaa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dc143c] transition"
              >
                <FaXTwitter />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kaguya.kawaii/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dc143c] transition"
              >
                <FaInstagram />
              </a>

              {/* Facebook */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dc143c] transition"
              >
                <FaFacebook />
              </a>
            </div>

            

            <div className='border-t-2 w-full mt-6 border-gray-900'>
              <p className="mt-6 text-gray-500">© 2025 Stephen P. Madero Jr. All rights reserved.</p>
            </div>
          </div>

      </body>

      

      
    </>
  )
}

export default App
