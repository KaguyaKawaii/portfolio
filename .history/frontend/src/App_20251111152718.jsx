import { useState } from 'react'
import pic from './assets/image.png'
import project from './assets/project.png'
import project2 from './assets/project2.png'
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import resumePDF from './assets/Portfolio - Stephen P. Madero Jr..pdf'; // adjust path if needed



function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className='bg-[#0F0E0E] h-[70px] md:h-[90px] w-full shadow-lg shadow-[#dc143c] fixed top-0 z-50'>
        <div className='flex justify-between items-center h-full text-white px-4 md:px-8 lg:px-20'>
          <h1 className='font-bold font-montserrat text-[20px] md:text-[25px]'>My Portfolio</h1>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex font-montserrat gap-4 lg:gap-6 font-semibold text-[16px] lg:text-[18px]'>
            <button
              onClick={() => {
                document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer"
            >
              <p>Home</p>
            </button>
            
            <button
              onClick={() => {
                document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer"
            >
              <p>About Me</p>
            </button>
           

            <button
              onClick={() => {
                document.getElementById("project").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer"
            >
              <p>Project</p>
            </button>

            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer"
            >
              <p>Contact</p>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button 
              className='text-white text-2xl'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden bg-[#0F0E0E] absolute top-full left-0 w-full shadow-lg'>
            <div className='flex flex-col items-center py-4 gap-4 font-montserrat font-semibold'>
              <button
                onClick={() => {
                  document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-red-500 text-white duration-300 cursor-pointer py-2"
              >
                <p>Home</p>
              </button>
              
              <button
                onClick={() => {
                  document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-red-500 text-white duration-300 cursor-pointer py-2"
              >
                <p>About Me</p>
              </button>

              <button
                onClick={() => {
                  document.getElementById("project").scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-red-500 text-white duration-300 cursor-pointer py-2"
              >
                <p>Project</p>
              </button>

              <button
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-red-500 text-white duration-300 cursor-pointer py-2"
              >
                <p>Contact</p>
              </button>
            </div>
          </div>
        )}
      </header>

      <main className='bg-linear-180 from-[#1E1E1E] to-[#0F0E0E] min-h-screen text-white pt-[70px] md:pt-[90px]'>
        <div id='home' className='flex flex-col-reverse md:flex-row justify-between items-center min-h-[90vh] px-4 md:px-8 lg:px-20 py-8 lg:py-0 gap-8 lg:gap-4'>
          {/* Content - Comes FIRST in mobile (appears above image) */}
          <div className='text-center md:text-left w-full md:w-1/2'>
            <div className='text-xl md:text-2xl lg:text-3xl'>
              <h1 className='font-semibold'>Hello, I'm Stephen P. Madero Jr.</h1>
            </div>
            <div className='mt-4 md:mt-6 animate-fade-in'>
              <p className='font-semibold text-2xl md:text-4xl lg:text-5xl leading-tight'>
                I'm a <span className="drop-shadow-[0_0_50px_#dc143c] text-red-500 animate-pulse">Frontend Web Developer &lt;/&gt;</span>
              </p>

              <div className="my-6 md:my-8">
      <a
        href={resumePDF}
        download="Stephen-Madero-Portfolio.pdf"
        className="ring-1 ring-red-500 text-red-500 rounded-3xl w-full md:w-[250px] p-3 text-center hover:text-gray-800 hover:bg-white hover:ring-gray-800 transition-all duration-300 cursor-pointer hover:font-semibold mx-auto md:mx-0 block"
      >
        Download Resume
      </a>
    </div>

              <div className='flex justify-center md:justify-start gap-4 md:gap-6 pt-4 md:pt-8'>
                {/* Email */}
                <a
                  href="mailto:stephenpatingomadero@gmail.com"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110"
                >
                  <MdEmail />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/KaguyaKawaii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110"
                >
                  <FaGithub />
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/callmekaguyaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110"
                >
                  <FaXTwitter />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/kaguya.kawaii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110"
                >
                  <FaInstagram />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/stephenpatingo.madero.jr/"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Image - Comes SECOND in mobile (appears below content) */}
          <div className='w-full md:w-1/2 flex justify-center'>
            <div className='w-4/5 md:w-3/5 lg:w-4/5 xl:w-3/4'>
              <img
                src={pic}
                alt="profile"
                className="w-full h-auto object-cover rounded-4xl"
                style={{
                  maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                }}
              />  
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center text-gray-700 text-sm md:text-base font-montserrat font-semibold animate-pulse w-full py-4 md:py-8'>
          Scroll down
        </div>
        
        {/* Skills Section */}
        <div className='w-full pt-8 md:pt-16 pb-8 md:pb-16 bg-[#1E1E1E] px-4 md:px-8 lg:px-20'>
          <div className='flex gap-3 md:gap-4 lg:gap-6 justify-center items-center min-h-[10vh] font-semibold text-lg md:text-2xl lg:text-3xl text-white'>
            <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-6 justify-center">
              <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-6 justify-center text-white">
                {/* HTML5 */}
                <div className="flex items-center hover:scale-110 transition-all ring-1 hover:ring-red-100 rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-html5-plain text-orange-500 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>HTML</p>
                </div>

                {/* CSS3 */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-css3-plain text-blue-500 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>CSS</p>
                </div>

                {/* JavaScript */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-javascript-plain text-yellow-400 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>JS</p>
                </div>

                {/* React.js */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-react-original text-cyan-400 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>React</p>
                </div>

                {/* Node.js */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-nodejs-plain text-green-500 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>Node.js</p>
                </div>

                {/* Express.js */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-express-original text-gray-500 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>Express</p>
                </div>

                {/* MongoDB */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-mongodb-plain text-green-600 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>MongoDB</p>
                </div>

                {/* GitHub */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-github-original text-black text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id='about' className='w-full pt-8 md:pt-12 pb-8 md:pb-12 bg-[#1E1E1E] px-4 md:px-8 lg:px-20'>
          <h1 className='text-white font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-center'>About Me</h1>
          <p className='text-gray-200 font-montserrat text-center mt-4 md:mt-6 mx-auto leading-relaxed text-sm md:text-base lg:text-lg max-w-4xl'>
            Hi! I'm Stephen, a 22-year-old Frontend Web Developer who began my journey in web development back in school. What started as simple curiosity soon grew into a genuine passion for creating websites that don't just look good but also feel great to use.

            I specialize in building business websites that are clean, responsive, and easy to navigate. Using tools like React.js, Vite, and Tailwind CSS, I love turning ideas into interactive and visually appealing experiences. I pay close attention to design and functionality because I believe a great website should connect with people, not just display information.

            Beyond coding, I'm driven by the goal of constantly improving myself learning new techniques, refining my skills, and staying up to date with the ever-evolving world of frontend development. Every project I take on is an opportunity to challenge myself and bring something meaningful to life on the web.
          </p> 
        </div>

        {/* Project Section */}
        <div id='project' className='w-full pt-8 md:pt-12 pb-8 md:pb-12 bg-[#1E1E1E] px-4 md:px-8 lg:px-20'>
          <h1 className='text-white font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-center'>Project</h1>
          
          <div className='flex flex-col mt-6 md:mt-8'>
            <div className='flex flex-col lg:flex-row items-center justify-between min-h-[400px] md:min-h-[500px] gap-6 md:gap-8 lg:gap-12'>
              
              <div className='w-full lg:w-1/2'>
                <a className='block' href="https://circulink-beta-testing.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={project}
                    className='rounded-2xl shadow-2xl hover:shadow-red-800 transition-all duration-500 hover:scale-105 w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover'
                    alt="CircuLink Project" 
                  />
                </a>
              </div>

              <div className='text-center lg:text-left w-full lg:w-1/2'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>CircuLink</h1>
                <p className="text-red-500 font-medium text-sm md:text-base mt-2">Capstone Project | Web-Based Library Room Reservation System</p>
                <div className='border-b my-4 md:my-5 border-gray-500'></div>
                <p className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed">
                  CircuLink is an innovative web-based system that simplifies how library rooms are reserved and managed. 
                  Built with a focus on accessibility and efficiency, it enables students and faculty to book rooms effortlessly, 
                  view real-time schedules, and receive instant updates ensuring a smooth and organized reservation experience for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="min-h-[40vh] flex flex-col items-center justify-center bg-[#0F0E0E] text-white text-center px-4 md:px-8 py-12 md:py-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">Contact Me</h2>
          <div className='flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8'>
            <button
              onClick={() => {
                document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base"
            >
              <p>Home</p>
            </button>
            
            <button
              onClick={() => {
                document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base"
            >
              <p>About Me</p>
            </button>

            <button
              onClick={() => {
                document.getElementById("project").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base"
            >
              <p>Project</p>
            </button>

            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base"
            >
              <p>Contact</p>
            </button>
          </div>

          <div className="flex justify-center gap-4 md:gap-6 text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
            <a
              href="mailto:stephenpatingomadero@gmail.com"
              className="hover:text-[#dc143c] transition hover:scale-110"
            >
              <MdEmail />
            </a>

            <a
              href="https://github.com/KaguyaKawaii"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dc143c] transition hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://x.com/callmekaguyaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dc143c] transition hover:scale-110"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/kaguya.kawaii/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dc143c] transition hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dc143c] transition hover:scale-110"
            >
              <FaFacebook />
            </a>
          </div>

          <div className='border-t-2 w-full border-gray-900 pt-6 md:pt-8'>
            <p className="text-gray-500 text-sm md:text-base">© 2025 Stephen P. Madero Jr. All rights reserved.</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App