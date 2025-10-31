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
  const [isDark, setIsDark] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Scroll progress indicator
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    { name: 'HTML', level: 90, icon: 'devicon-html5-plain', color: 'text-orange-500' },
    { name: 'CSS', level: 85, icon: 'devicon-css3-plain', color: 'text-blue-500' },
    { name: 'JavaScript', level: 80, icon: 'devicon-javascript-plain', color: 'text-yellow-400' },
    { name: 'React', level: 75, icon: 'devicon-react-original', color: 'text-cyan-400' },
    { name: 'Node.js', level: 70, icon: 'devicon-nodejs-plain', color: 'text-green-500' },
    { name: 'Express', level: 65, icon: 'devicon-express-original', color: 'text-gray-500' },
    { name: 'MongoDB', level: 60, icon: 'devicon-mongodb-plain', color: 'text-green-600' },
    { name: 'GitHub', level: 85, icon: 'devicon-github-original', color: 'text-black' },
  ];

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-red-500 z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <header className='bg-[#0F0E0E] h-[70px] md:h-[90px] w-full shadow-lg shadow-[#dc143c] fixed top-0 z-50'>
        <div className='flex justify-between items-center h-full text-white px-4 md:px-8 lg:px-20'>
          <h1 className='font-bold font-montserrat text-[20px] md:text-[25px]'>My Portfolio</h1>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex font-montserrat gap-4 lg:gap-6 font-semibold text-[16px] lg:text-[18px] items-center'>
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

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center gap-4'>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? '🌙' : '☀️'}
            </button>
            <button 
              className='text-white text-2xl'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-[#0F0E0E]/95 backdrop-blur-sm absolute top-full left-0 w-full shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className='flex flex-col items-center py-4 gap-4 font-montserrat font-semibold'>
            <button
              onClick={() => {
                document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-red-500 text-white duration-300 cursor-pointer py-2 text-lg"
            >
              <p>Home</p>
            </button>
            
            <button
              onClick={() => {
                document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-red-500 text-white duration-300 cursor-pointer py-2 text-lg"
            >
              <p>About Me</p>
            </button>

            <button
              onClick={() => {
                document.getElementById("project").scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-red-500 text-white duration-300 cursor-pointer py-2 text-lg"
            >
              <p>Project</p>
            </button>

            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-red-500 text-white duration-300 cursor-pointer py-2 text-lg"
            >
              <p>Contact</p>
            </button>
          </div>
        </div>
      </header>

      <main className={`${isDark ? 'bg-linear-180 from-[#1E1E1E] to-[#0F0E0E]' : 'bg-gradient-to-br from-gray-100 to-white'} min-h-screen text-white pt-[70px] md:pt-[90px] transition-colors duration-300`}>
        {/* Hero Section with Animated Background */}
        <div id='home' className='relative overflow-hidden'>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/5 animate-pulse"></div>
          <div className='flex flex-col-reverse md:flex-row justify-between items-center min-h-[90vh] px-4 md:px-8 lg:px-20 py-8 lg:py-0 gap-8 lg:gap-4 relative z-10'>
            
            {/* Content */}
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
                    className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110 shadow-lg hover:shadow-red-500/50"
                  >
                    <MdEmail />
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/KaguyaKawaii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110 shadow-lg hover:shadow-red-500/50"
                  >
                    <FaGithub />
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://x.com/callmekaguyaaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110 shadow-lg hover:shadow-red-500/50"
                  >
                    <FaXTwitter />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/kaguya.kawaii/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110 shadow-lg hover:shadow-red-500/50"
                  >
                    <FaInstagram />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/stephenpatingo.madero.jr/"
                    className="text-gray-800 hover:text-red-600 transition bg-white rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110 shadow-lg hover:shadow-red-500/50"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className='w-full md:w-1/2 flex justify-center'>
              <div className='w-4/5 md:w-3/5 lg:w-4/5 xl:w-3/4'>
                <img
                  src={pic}
                  alt="profile"
                  className={`w-full h-auto object-cover rounded-4xl transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                  }}
                  onLoad={() => setImageLoaded(true)}
                />  
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center text-gray-700 text-sm md:text-base font-montserrat font-semibold animate-pulse w-full py-4 md:py-8'>
          Scroll down
        </div>
        
        {/* Enhanced Skills Section */}
        <div className={`w-full pt-8 md:pt-16 pb-8 md:pb-16 ${isDark ? 'bg-[#1E1E1E]' : 'bg-gray-200'} px-4 md:px-8 lg:px-20 transition-colors duration-300`}>
          <h1 className={`text-center font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Skills & Technologies
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`group relative overflow-hidden rounded-xl p-4 md:p-6 transition-all duration-500 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-gray-50 shadow-lg'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3">
                  <i className={`${skill.icon} ${skill.color} text-2xl md:text-3xl`}></i>
                  <span className={`font-semibold text-sm md:text-base ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {skill.name}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className={`w-full h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}>
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                {/* Percentage on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-red-500/90 to-red-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}>
                  <span className="text-white font-bold text-lg">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div id='about' className={`w-full pt-8 md:pt-12 pb-8 md:pb-12 ${isDark ? 'bg-[#1E1E1E]' : 'bg-gray-100'} px-4 md:px-8 lg:px-20 transition-colors duration-300`}>
          <h1 className={`font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            About Me
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className={`font-montserrat text-center mt-4 md:mt-6 mx-auto leading-relaxed text-sm md:text-base lg:text-lg ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Hi! I'm Stephen, a 22-year-old Frontend Web Developer who began my journey in web development back in school. What started as simple curiosity soon grew into a genuine passion for creating websites that don't just look good but also feel great to use.

              I specialize in building business websites that are clean, responsive, and easy to navigate. Using tools like React.js, Vite, and Tailwind CSS, I love turning ideas into interactive and visually appealing experiences. I pay close attention to design and functionality because I believe a great website should connect with people, not just display information.

              Beyond coding, I'm driven by the goal of constantly improving myself learning new techniques, refining my skills, and staying up to date with the ever-evolving world of frontend development. Every project I take on is an opportunity to challenge myself and bring something meaningful to life on the web.
            </p>
          </div>
        </div>

        {/* Enhanced Project Section */}
        <div id='project' className={`w-full pt-8 md:pt-12 pb-8 md:pb-12 ${isDark ? 'bg-[#1E1E1E]' : 'bg-gray-200'} px-4 md:px-8 lg:px-20 transition-colors duration-300`}>
          <h1 className={`font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Projects
          </h1>
          
          <div className='flex flex-col mt-6 md:mt-8'>
            <div className='flex flex-col lg:flex-row items-center justify-between min-h-[400px] md:min-h-[500px] gap-6 md:gap-8 lg:gap-12'>
              
              <div className='w-full lg:w-1/2 group relative'>
                <a className='block' href="https://circulink-beta-testing.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={project}
                    className='rounded-2xl shadow-2xl hover:shadow-red-800 transition-all duration-500 group-hover:scale-105 w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover'
                    alt="CircuLink Project" 
                  />
                  {/* Project Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center gap-4">
                    <button className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300 font-semibold">
                      Live Demo
                    </button>
                    <button className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-semibold">
                      View Code
                    </button>
                  </div>
                </a>
              </div>

              <div className='text-center lg:text-left w-full lg:w-1/2'>
                <h1 className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  CircuLink
                </h1>
                <p className="text-red-500 font-medium text-sm md:text-base mt-2">
                  Capstone Project | Web-Based Library Room Reservation System
                </p>
                <div className={`border-b my-4 md:my-5 ${isDark ? 'border-gray-500' : 'border-gray-300'}`}></div>
                <p className={`text-sm md:text-base lg:text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  CircuLink is an innovative web-based system that simplifies how library rooms are reserved and managed. 
                  Built with a focus on accessibility and efficiency, it enables students and faculty to book rooms effortlessly, 
                  view real-time schedules, and receive instant updates ensuring a smooth and organized reservation experience for everyone.
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-red-500/20 text-red-500 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Section */}
        <div id="contact" className={`min-h-[50vh] flex flex-col items-center justify-center ${
          isDark ? 'bg-[#0F0E0E]' : 'bg-gray-800'
        } text-white text-center px-4 md:px-8 py-12 md:py-16 transition-colors duration-300 relative`}>
          
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="absolute top-8 right-8 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Back to top"
          >
            ↑
          </button>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-8 max-w-2xl">
            I'm always open to discussing new opportunities, creative projects, or just having a friendly chat about tech!
          </p>
          
          <div className='flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8'>
            {['Home', 'About Me', 'Project', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  document.getElementById(item.toLowerCase().replace(' ', '')).scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-4 md:gap-6 text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
            <a
              href="mailto:stephenpatingomadero@gmail.com"
              className="hover:text-red-500 transition hover:scale-110 p-3 rounded-full hover:bg-white/10"
              aria-label="Email"
            >
              <MdEmail />
            </a>

            <a
              href="https://github.com/KaguyaKawaii"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition hover:scale-110 p-3 rounded-full hover:bg-white/10"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://x.com/callmekaguyaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition hover:scale-110 p-3 rounded-full hover:bg-white/10"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/kaguya.kawaii/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition hover:scale-110 p-3 rounded-full hover:bg-white/10"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/stephenpatingo.madero.jr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition hover:scale-110 p-3 rounded-full hover:bg-white/10"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-2xl mb-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/10 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white/10 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="bg-white/10 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors md:col-span-2"
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 md:col-span-2"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className='border-t-2 w-full border-gray-700 pt-6 md:pt-8'>
            <p className="text-gray-500 text-sm md:text-base">
              © 2025 Stephen P. Madero Jr. All rights reserved. | Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App