import { useState } from 'react'
import pic from './assets/image.png'
import project from './assets/project.png'
import project2 from './assets/project2.png'
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className='bg-[#0F0E0E] h-[70px] md:h-[90px] w-full shadow-lg shadow-[#dc143c] fixed top-0 z-50'>
        <div className='flex justify-between md:justify-around items-center h-full text-white px-4 md:px-0'>
          <h1 className='font-bold font-montserrat text-[20px] md:text-[25px]'>My Portfolio</h1>
          
          {/* Desktop Navigation */}
          <nav className='hidden md:flex font-montserrat gap-4 lg:gap-6 font-semibold text-[18px] md:text-[20px]'>
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
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0F0E0E] absolute top-[70px] left-0 right-0 shadow-lg shadow-[#dc143c]">
            <div className="flex flex-col py-4 font-montserrat font-semibold text-[18px]">
              <button
                onClick={() => {
                  document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="hover:text-red-500 duration-300 cursor-pointer py-3 px-6"
              >
                Home
              </button>
              
              <button
                onClick={() => {
                  document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="hover:text-red-500 duration-300 cursor-pointer py-3 px-6"
              >
                About Me
              </button>

              <button
                onClick={() => {
                  document.getElementById("project").scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="hover:text-red-500 duration-300 cursor-pointer py-3 px-6"
              >
                Project
              </button>

              <button
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="hover:text-red-500 duration-300 cursor-pointer py-3 px-6"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      <main className='bg-linear-180 from-[#1E1E1E] to-[#0F0E0E] text-white pt-[70px] md:pt-[90px]'>
        {/* Home Section */}
        <section id='home' className='flex flex-col lg:flex-row justify-around items-center min-h-screen px-4 md:px-8 lg:px-0 py-8 lg:py-0'>
          <div className='text-center lg:text-left lg:w-1/2 lg:pl-12 xl:pl-24'>
            <div className='text-[20px] md:text-2xl'>
              <h1 className='font-semibold'>Hello, I'm Stephen P. Madero Jr.</h1>
            </div>
            <div className='mt-6 animate-fade-in'>
              <p className='font-semibold text-[32px] md:text-4xl lg:text-5xl'>
                I'm a <span className="drop-shadow-[0_0_50px_#dc143c] text-red-500 animate-pulse">Frontend Web Developer &lt;/&gt;</span>
              </p>

              <div className='m-6 flex justify-center lg:justify-start'>
                <button className='ring-1 ring-red-500 text-red-500 rounded-3xl w-[250px] p-3 text-center hover:text-gray-800 hover:bg-white hover:ring-gray-800 transition-all duration-300 cursor-pointer hover:font-semibold'>
                  Download Resume
                </button>
              </div>

              <div className='flex justify-center lg:justify-start gap-4 md:gap-6 pt-[30px] md:pt-[50px]'>
                {/* Email */}
                <a
                  href="mailto:stephenpatingomadero@gmail.com"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-2 w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-lg md:text-2xl flex justify-center items-center hover:scale-110"
                >
                  <MdEmail />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/stephenmadero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-2 w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-lg md:text-2xl flex justify-center items-center hover:scale-110"
                >
                  <FaGithub />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/stephenmadero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-2 w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-lg md:text-2xl flex justify-center items-center hover:scale-110"
                >
                  <FaXTwitter />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/stephenmadero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-2 w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-lg md:text-2xl flex justify-center items-center hover:scale-110"
                >
                  <FaInstagram />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/stephenmadero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-2 w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-lg md:text-2xl flex justify-center items-center hover:scale-110"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          <div className='mt-8 lg:mt-0 lg:w-1/2 flex justify-center'>
            <img
              src={pic}
              alt="profile"
              className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-full lg:h-full max-w-[500px] object-cover rounded-2xl lg:rounded-4xl"
              style={{
                maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
              }}
            />  
          </div>
        </section>

        <div className='flex justify-center items-center text-gray-700 text-[14px] md:text-lg font-montserrat font-semibold animate-pulse pb-10 md:pb-10 w-full'>
          Scroll down
        </div>
        
        {/* Skills Section */}
        <section className='w-full py-12 md:py-20 bg-[#1E1E1E] px-4'>
          <div className='flex gap-4 md:gap-6 justify-center items-center min-h-[20vh] font-semibold text-2xl md:text-3xl text-white'>
            <div className="flex flex-wrap gap-3 md:gap-6 justify-center w-full max-w-7xl">
              <div className="flex flex-wrap gap-3 md:gap-6 justify-center text-white w-full">
                {/* HTML5 */}
                <div className="flex items-center hover:scale-110 transition-all ring-1 hover:ring-red-100 rounded-lg p-3 md:p-5 gap-3 md:gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-html5-plain text-orange-500 text-2xl md:text-5xl"></i>
                  <p className='text-[16px] md:text-2xl text-gray-800 font-semibold'>HTML</p>
                </div>

                {/* CSS3 */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-5 gap-3 md:gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-css3-plain text-blue-500 text-2xl md:text-5xl"></i>
                  <p className='text-[16px] md:text-2xl text-gray-800 font-semibold'>CSS</p>
                </div>

                {/* JavaScript */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-5 gap-3 md:gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-javascript-plain text-yellow-400 text-2xl md:text-5xl"></i>
                  <p className='text-[16px] md:text-2xl text-gray-800 font-semibold'>Javascript</p>
                </div>

                {/* React.js */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-5 gap-3 md:gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-react-original text-cyan-400 text-2xl md:text-5xl"></i>
                  <p className='text-[16px] md:text-2xl text-gray-800 font-semibold'>React.js</p>
                </div>

                {/* Node.js */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-5 gap-3 md:gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-nodejs-plain text-green-500 text-2xl md:text-5xl"></i>
                  <p className='text-[16px] md:text-2xl text-gray-800 font-semibold'>Node.js</p>
                </div>

                {/* Express.js */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-5 gap-3 md:gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-express-original text-gray-500 text-2xl md:text-5xl"></i>
                  <p className='text-[16px] md:text-2xl text-gray-800 font-semibold'>Express.js</p>
                </div>

                {/* MongoDB */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-5 gap-3 md:gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-mongodb-plain text-green-600 text-2xl md:text-5xl"></i>
                  <p className='text-[16px] md:text-2xl text-gray-800 font-semibold'>MongoDB</p>
                </div>

                {/* GitHub */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-5 gap-3 md:gap-5 bg-white shadow-lg hover:shadow-red-500 duration-500">
                  <i className="devicon-github-original text-black text-2xl md:text-5xl"></i>
                  <p className='text-[16px] md:text-2xl text-gray-800 font-semibold'>Github</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id='about' className='w-full py-12 md:py-20 bg-[#1E1E1E] px-4 md:px-8'>
          <h1 className='text-white font-montserrat text-3xl md:text-4xl font-bold text-center pb-8'>About Me</h1>
          <div className='max-w-6xl mx-auto'>
            <p className='text-gray-200 font-montserrat text-center text-[14px] md:text-base lg:text-lg mt-6 mx-0 md:mx-20 leading-relaxed'>
Hi! I'm Stephen, a 22-year-old Frontend Web Developer who began my journey in web development back in school. What started as simple curiosity soon grew into a genuine passion for creating websites that don't just look good but also feel great to use.

I specialize in building business websites that are clean, responsive, and easy to navigate. Using tools like React.js, Vite, and Tailwind CSS, I love turning ideas into interactive and visually appealing experiences. I pay close attention to design and functionality because I believe a great website should connect with people, not just display information.

Beyond coding, I'm driven by the goal of constantly improving myself learning new techniques, refining my skills, and staying up to date with the ever-evolving world of frontend development. Every project I take on is an opportunity to challenge myself and bring something meaningful to life on the web.            </p> 
          </div>
        </section>

        {/* Project Section */}
        <section id='project' className='w-full py-12 md:py-20 bg-[#1E1E1E] px-4 md:px-8'>
          <h1 className='text-white font-montserrat text-3xl md:text-4xl font-bold text-center pb-8'>Project</h1>
          
          <div className='flex flex-col'>
            <div className='flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-16 min-h-[500px] max-w-7xl mx-auto'>
              
              <div className='xl:w-1/2 flex justify-center'>
                <a href="https://circulink-beta-testing.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={project}
                    className='rounded-2xl shadow-2xl hover:shadow-red-800 transition-all duration-500 hover:scale-105 w-full max-w-[500px] xl:max-w-full h-auto'
                    alt="CircuLink Project" 
                  />
                </a>
              </div>

              <div className='xl:w-1/2 text-center xl:text-left'>
                <h1 className='text-2xl md:text-3xl xl:text-4xl font-semibold' >CircuLink</h1>
                <p className="text-red-500 font-medium text-sm md:text-base">Capstone Project | Web-Based Library Room Reservation System</p>
                <div className='border-b my-4 md:my-5 border-gray-500'></div>
                <p className="mt-2 text-gray-200 text-sm md:text-base w-full xl:max-w-[550px] mx-auto xl:mx-0">
  CircuLink is an innovative web-based system that simplifies how library rooms are reserved and managed. 
  Built with a focus on accessibility and efficiency, it enables students and faculty to book rooms effortlessly, 
  view real-time schedules, and receive instant updates ensuring a smooth and organized reservation experience for everyone.
</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <footer id="contact" className="w-full py-12 md:py-16 bg-[#0F0E0E] text-white text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Me</h2>
          <div className='flex flex-wrap justify-center gap-4 md:gap-6 mb-6'>
            <button
              onClick={() => {
                document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base"
            >
              Home
            </button>
            
            <button
              onClick={() => {
                document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base"
            >
              About Me
            </button>

            <button
              onClick={() => {
                document.getElementById("project").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base"
            >
              Project
            </button>

            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base"
            >
              Contact
            </button>
          </div>

          <div className="flex justify-center gap-4 md:gap-6 text-xl md:text-3xl mb-6">
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

          <div className='border-t-2 w-full max-w-4xl mx-auto mt-6 border-gray-900 pt-6'>
            <p className="text-gray-500 text-sm md:text-base">© 2025 Stephen P. Madero Jr. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App