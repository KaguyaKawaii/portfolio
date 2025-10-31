import { useState, useEffect } from 'react'
import pic from './assets/image.png'
import project from './assets/project.png'
import project2 from './assets/project2.png'
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import resumePDF from './assets/Portfolio - Stephen P. Madero Jr..pdf';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Back to top button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header className='bg-[#0F0E0E] h-[70px] md:h-[90px] w-full shadow-lg shadow-[#dc143c] fixed top-0 z-50'>
        <div className='flex justify-between items-center h-full text-white px-4 md:px-8 lg:px-20'>
          <h1 className='font-bold font-montserrat text-[20px] md:text-[25px] hover:text-red-500 transition-colors duration-300'>My Portfolio</h1>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex font-montserrat gap-4 lg:gap-6 font-semibold text-[16px] lg:text-[18px]'>
            <button
              onClick={() => {
                document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer transform hover:scale-110 transition-transform"
            >
              <p>Home</p>
            </button>
            
            <button
              onClick={() => {
                document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer transform hover:scale-110 transition-transform"
            >
              <p>About Me</p>
            </button>

            <button
              onClick={() => {
                document.getElementById("project").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer transform hover:scale-110 transition-transform"
            >
              <p>Project</p>
            </button>

            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-red-500 duration-300 cursor-pointer transform hover:scale-110 transition-transform"
            >
              <p>Contact</p>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button 
              className='text-white text-2xl hover:text-red-500 transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden bg-[#0F0E0E] absolute top-full left-0 w-full shadow-lg animate-slideIn'>
            <div className='flex flex-col items-center py-4 gap-4 font-montserrat font-semibold'>
              <button
                onClick={() => {
                  document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-red-500 text-white duration-300 cursor-pointer py-3 min-h-[44px] min-w-[44px] flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                <p>Home</p>
              </button>
              
              <button
                onClick={() => {
                  document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-red-500 text-white duration-300 cursor-pointer py-3 min-h-[44px] min-w-[44px] flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                <p>About Me</p>
              </button>

              <button
                onClick={() => {
                  document.getElementById("project").scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-red-500 text-white duration-300 cursor-pointer py-3 min-h-[44px] min-w-[44px] flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                <p>Project</p>
              </button>

              <button
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-red-500 text-white duration-300 cursor-pointer py-3 min-h-[44px] min-w-[44px] flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                <p>Contact</p>
              </button>

              {/* Close button for mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-red-500 border border-red-500 rounded-full px-6 py-2 mt-2 hover:bg-red-500 hover:text-white transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 z-40 transform hover:scale-110 hover:shadow-red-500/50"
        >
          ↑
        </button>
      )}

      <main className='bg-linear-180 from-[#1E1E1E] to-[#0F0E0E] min-h-screen text-white pt-[70px] md:pt-[90px] relative overflow-hidden'>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5 animate-pulse pointer-events-none"></div>
        
        <div id='home' className='flex flex-col-reverse md:flex-row justify-between items-center min-h-[90vh] px-4 md:px-8 lg:px-20 py-8 lg:py-0 gap-8 lg:gap-4 relative'>
          {/* Content - Comes FIRST in mobile (appears above image) */}
          <div className='text-center md:text-left w-full md:w-1/2 z-10'>
            <div className='text-xl md:text-2xl lg:text-3xl'>
              <h1 className='font-semibold animate-fade-in'>Hello, I'm Stephen P. Madero Jr.</h1>
            </div>
            <div className='mt-4 md:mt-6 animate-fade-in'>
              <p className='font-semibold text-2xl md:text-4xl lg:text-5xl leading-tight'>
                I'm a <span className="drop-shadow-[0_0_50px_#dc143c] text-red-500 animate-pulse bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Frontend Web Developer &lt;/&gt;</span>
              </p>

              <div className="my-6 md:my-8">
                <a
                  href={resumePDF}
                  download="Stephen-Madero-Portfolio.pdf"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-3xl w-full md:w-[280px] p-4 text-center hover:from-red-700 hover:to-red-800 transition-all duration-300 cursor-pointer font-semibold shadow-lg hover:shadow-red-500/50 mx-auto md:mx-0 block transform hover:scale-105 hover-lift"
                >
                  📄 Download Resume
                </a>
              </div>

              <div className='flex justify-center md:justify-start gap-4 md:gap-6 pt-4 md:pt-8'>
                {/* Email */}
                <a
                  href="mailto:stephenpatingomadero@gmail.com"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[50px] h-[50px] md:w-[55px] md:h-[55px] text-lg md:text-xl flex justify-center items-center hover:scale-110 shadow-lg hover:shadow-red-500/50 hover-lift"
                >
                  <MdEmail />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/KaguyaKawaii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[50px] h-[50px] md:w-[55px] md:h-[55px] text-lg md:text-xl flex justify-center items-center hover:scale-110 shadow-lg hover:shadow-red-500/50 hover-lift"
                >
                  <FaGithub />
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/callmekaguyaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[50px] h-[50px] md:w-[55px] md:h-[55px] text-lg md:text-xl flex justify-center items-center hover:scale-110 shadow-lg hover:shadow-red-500/50 hover-lift"
                >
                  <FaXTwitter />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/kaguya.kawaii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[50px] h-[50px] md:w-[55px] md:h-[55px] text-lg md:text-xl flex justify-center items-center hover:scale-110 shadow-lg hover:shadow-red-500/50 hover-lift"
                >
                  <FaInstagram />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/stephenpatingo.madero.jr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[50px] h-[50px] md:w-[55px] md:h-[55px] text-lg md:text-xl flex justify-center items-center hover:scale-110 shadow-lg hover:shadow-red-500/50 hover-lift"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Image - Comes SECOND in mobile (appears below content) */}
          <div className='w-full md:w-1/2 flex justify-center z-10'>
            <div className='w-4/5 md:w-3/5 lg:w-4/5 xl:w-3/4 hover-lift transform hover:scale-105 transition-transform duration-300'>
              <img
                src={pic}
                alt="profile"
                className="w-full h-auto object-cover rounded-4xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500"
                style={{
                  maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                }}
              />  
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center text-gray-400 text-sm md:text-base font-montserrat font-semibold animate-bounce w-full py-4 md:py-8'>
          Scroll down ↓
        </div>
        
        {/* Skills Section */}
        <div className='w-full pt-8 md:pt-16 pb-8 md:pb-16 bg-gradient-to-b from-[#1E1E1E] to-[#2a1a1a] px-4 md:px-8 lg:px-20 relative'>
          <div className='text-center mb-8 md:mb-12'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4'>Skills & Technologies</h2>
            <p className='text-gray-300 max-w-2xl mx-auto'>Technologies I use to bring ideas to life</p>
          </div>
          
          <div className='flex gap-3 md:gap-4 lg:gap-6 justify-center items-center min-h-[10vh] font-semibold text-lg md:text-2xl lg:text-3xl text-white'>
            <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-6 justify-center">
              <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-6 justify-center text-white">
                {/* HTML5 */}
                <div className="flex items-center hover:scale-110 transition-all ring-1 hover:ring-red-100 rounded-lg p-3 md:p-4 lg:p-5 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500 hover-lift group">
                  <i className="devicon-html5-plain text-orange-500 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>HTML</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>

                {/* CSS3 */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-4 lg:p-5 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500 hover-lift group">
                  <i className="devicon-css3-plain text-blue-500 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>CSS</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>

                {/* JavaScript */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-4 lg:p-5 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500 hover-lift group">
                  <i className="devicon-javascript-plain text-yellow-400 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>JS</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>

                {/* React.js */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-4 lg:p-5 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500 hover-lift group">
                  <i className="devicon-react-original text-cyan-400 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>React</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>

                {/* Node.js */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-4 lg:p-5 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500 hover-lift group">
                  <i className="devicon-nodejs-plain text-green-500 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>Node.js</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>

                {/* Express.js */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-4 lg:p-5 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500 hover-lift group">
                  <i className="devicon-express-original text-gray-500 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>Express</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>

                {/* MongoDB */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-4 lg:p-5 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500 hover-lift group">
                  <i className="devicon-mongodb-plain text-green-600 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>MongoDB</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-green-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>

                {/* GitHub */}
                <div className="flex items-center hover:scale-110 transition-transform border rounded-lg p-3 md:p-4 lg:p-5 gap-2 md:gap-3 lg:gap-4 bg-white shadow-lg hover:shadow-red-500 duration-500 hover-lift group">
                  <i className="devicon-github-original text-black text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className='text-sm md:text-base lg:text-lg text-gray-800 font-semibold'>GitHub</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-black rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id='about' className='w-full pt-12 md:pt-16 pb-12 md:pb-16 bg-gradient-to-b from-[#2a1a1a] to-[#1E1E1E] px-4 md:px-8 lg:px-20'>
          <div className='max-w-6xl mx-auto'>
            <h1 className='text-white font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2'>About Me</h1>
            <div className='w-24 h-1 bg-red-500 mx-auto mb-8 rounded-full'></div>
            <p className='text-gray-200 font-montserrat text-center mt-6 md:mt-8 mx-auto leading-relaxed text-sm md:text-base lg:text-lg max-w-4xl bg-gray-900/50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-red-500/20 transition-all duration-300'>
              Hi! I'm Stephen, a 22-year-old Frontend Web Developer who began my journey in web development back in school. What started as simple curiosity soon grew into a genuine passion for creating websites that don't just look good but also feel great to use.

              I specialize in building business websites that are clean, responsive, and easy to navigate. Using tools like React.js, Vite, and Tailwind CSS, I love turning ideas into interactive and visually appealing experiences. I pay close attention to design and functionality because I believe a great website should connect with people, not just display information.

              Beyond coding, I'm driven by the goal of constantly improving myself learning new techniques, refining my skills, and staying up to date with the ever-evolving world of frontend development. Every project I take on is an opportunity to challenge myself and bring something meaningful to life on the web.
            </p> 
          </div>
        </div>

        {/* Project Section */}
        <div id='project' className='w-full pt-12 md:pt-16 pb-12 md:pb-16 bg-gradient-to-b from-[#1E1E1E] to-[#2a1a1a] px-4 md:px-8 lg:px-20'>
          <div className='max-w-6xl mx-auto'>
            <h1 className='text-white font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2'>Projects</h1>
            <div className='w-24 h-1 bg-red-500 mx-auto mb-8 rounded-full'></div>
            
            <div className='flex flex-col mt-8 md:mt-12'>
              <div className='flex flex-col lg:flex-row items-center justify-between min-h-[400px] md:min-h-[500px] gap-8 md:gap-12 lg:gap-16 hover-lift'>
                
                <div className='w-full lg:w-1/2 relative'>
                  <a className='block group' href="https://circulink-beta-testing.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={project}
                      className='rounded-2xl shadow-2xl hover:shadow-red-800 transition-all duration-500 hover:scale-105 w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover group-hover:brightness-110'
                      alt="CircuLink Project" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white font-semibold bg-red-600 px-4 py-2 rounded-full">View Live Demo →</span>
                    </div>
                  </a>
                </div>

                <div className='text-center lg:text-left w-full lg:w-1/2'>
                  <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>CircuLink</h1>
                  <p className="text-red-500 font-medium text-sm md:text-base mt-3">Capstone Project | Web-Based Library Room Reservation System</p>
                  <div className='border-b my-5 md:my-6 border-gray-600'></div>
                  
                  <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">React</span>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">Express</span>
                  </div>
                  
                  <p className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed bg-gray-900/30 p-4 rounded-xl">
                    CircuLink is an innovative web-based system that simplifies how library rooms are reserved and managed. 
                    Built with a focus on accessibility and efficiency, it enables students and faculty to book rooms effortlessly, 
                    view real-time schedules, and receive instant updates ensuring a smooth and organized reservation experience for everyone.
                  </p>
                  
                  <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                    <a 
                      href="https://circulink-beta-testing.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 font-semibold hover-lift"
                    >
                      Live Demo
                    </a>
                    <a 
                      href="https://github.com/KaguyaKawaii" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-gray-600 text-gray-300 px-6 py-2 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors duration-300 font-semibold hover-lift"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="min-h-[50vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#2a1a1a] to-[#0F0E0E] text-white text-center px-4 md:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Get In Touch</h2>
            <div className='w-16 h-1 bg-red-500 mx-auto mb-8 rounded-full'></div>
            <p className="text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
              Interested in working together? Feel free to reach out and let's create something amazing!
            </p>
            
            <div className='flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12'>
              <button
                onClick={() => {
                  document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base transform hover:scale-110 transition-transform px-4 py-2 rounded-lg hover:bg-gray-800/50"
              >
                <p>Home</p>
              </button>
              
              <button
                onClick={() => {
                  document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base transform hover:scale-110 transition-transform px-4 py-2 rounded-lg hover:bg-gray-800/50"
              >
                <p>About Me</p>
              </button>

              <button
                onClick={() => {
                  document.getElementById("project").scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base transform hover:scale-110 transition-transform px-4 py-2 rounded-lg hover:bg-gray-800/50"
              >
                <p>Project</p>
              </button>

              <button
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base transform hover:scale-110 transition-transform px-4 py-2 rounded-lg hover:bg-gray-800/50"
              >
                <p>Contact</p>
              </button>
            </div>

            <div className="flex justify-center gap-4 md:gap-6 text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12">
              <a
                href="mailto:stephenpatingomadero@gmail.com"
                className="hover:text-red-500 transition hover:scale-110 duration-300 p-3 rounded-full hover:bg-gray-800/50"
              >
                <MdEmail />
              </a>

              <a
                href="https://github.com/KaguyaKawaii"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition hover:scale-110 duration-300 p-3 rounded-full hover:bg-gray-800/50"
              >
                <FaGithub />
              </a>

              <a
                href="https://x.com/callmekaguyaaa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition hover:scale-110 duration-300 p-3 rounded-full hover:bg-gray-800/50"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.instagram.com/kaguya.kawaii/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition hover:scale-110 duration-300 p-3 rounded-full hover:bg-gray-800/50"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/stephenpatingo.madero.jr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition hover:scale-110 duration-300 p-3 rounded-full hover:bg-gray-800/50"
              >
                <FaFacebook />
              </a>
            </div>

            <div className='border-t-2 w-full border-gray-800 pt-8 md:pt-12'>
              <p className="text-gray-500 text-sm md:text-base">© 2025 Stephen P. Madero Jr. All rights reserved.</p>
              <p className="text-gray-600 text-xs mt-2">Built with React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App