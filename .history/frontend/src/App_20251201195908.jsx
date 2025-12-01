import { useState, useEffect } from 'react'
import pic from './assets/image.png'
import project from './assets/project.png'
import project2 from './assets/project2.png'
// Add more project images if you have them
import project3 from './assets/project3.png' // Example additional image
import project4 from './assets/project4.png' // Example additional image
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdClose, MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import resumePDF from './assets/Madero - Resume.pdf';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Modal gallery state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define project images for gallery
  const projectGalleries = {
    circulink: [
      project,
      project3, // Add more images for CircuLink
      project4,
      // Add more image imports as needed
    ],
    deliverdash: [
      project2,
      // Add more images for DeliverDash if available
    ]
  };

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Open modal with project images
  const openProjectModal = (projectId) => {
    setCurrentProject(projectId);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
  };

  // Navigate to next image
  const nextImage = () => {
    if (currentProject && projectGalleries[currentProject]) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === projectGalleries[currentProject].length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Navigate to previous image
  const prevImage = () => {
    if (currentProject && projectGalleries[currentProject]) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? projectGalleries[currentProject].length - 1 : prevIndex - 1
      );
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentProject, currentImageIndex]);

  return (
    <>
      <header className={`${isDarkMode ? 'bg-[#1E201E]' : 'bg-white'} h-[70px] md:h-[90px] w-full shadow-sm ${isDarkMode ? 'shadow-[#dc143c]' : 'shadow-gray-300'} fixed top-0 z-50 transition-colors duration-300`}>
        <div className='flex justify-between items-center h-full text-white px-4 md:px-8 lg:px-20'>
          <h1 className={`font-bold font-montserrat text-[20px] md:text-[25px] ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>My Portfolio</h1>
          
          {/* Dark/Light Mode Toggle */}
          <div className='flex items-center gap-4'>
            {/* Desktop Navigation */}
            <div className='hidden md:flex font-montserrat gap-4 lg:gap-6 font-semibold text-[16px] lg:text-[18px]'>
              <button
                onClick={() => {
                  document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
                }}
                className={`hover:text-red-500 duration-300 cursor-pointer relative group ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                <p>Home</p>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
              </button>
              
              <button
                onClick={() => {
                  document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
                }}
                className={`hover:text-red-500 duration-300 cursor-pointer relative group ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                <p>About Me</p>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
              </button>

              <button
                onClick={() => {
                  document.getElementById("project").scrollIntoView({ behavior: 'smooth' });
                }}
                className={`hover:text-red-500 duration-300 cursor-pointer relative group ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                <p>Project</p>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
              </button>

              <button
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
                }}
                className={`hover:text-red-500 duration-300 cursor-pointer relative group ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                <p>Contact</p>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
              </button>

              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {isDarkMode ? (
                  // Sun Icon (Light Mode)
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  // Moon Icon (Dark Mode)
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button 
              className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div 
          className="absolute bottom-0 left-0 h-1 bg-red-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Mobile Menu */}
        <div className={`md:hidden ${isDarkMode ? 'bg-[#0F0E0E]' : 'bg-gray-100'} absolute top-full left-0 w-full shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
          <div className='flex flex-col items-center py-4 gap-4 font-montserrat font-semibold'>
            <button
              onClick={() => {
                document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className={`hover:text-red-500 duration-300 cursor-pointer py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              <p>Home</p>
            </button>
            
            <button
              onClick={() => {
                document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className={`hover:text-red-500 duration-300 cursor-pointer py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              <p>About Me</p>
            </button>

            <button
              onClick={() => {
                document.getElementById("project").scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className={`hover:text-red-500 duration-300 cursor-pointer py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              <p>Project</p>
            </button>

            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className={`hover:text-red-500 duration-300 cursor-pointer py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              <p>Contact</p>
            </button>

            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {isDarkMode ? (
                // Sun Icon (Light Mode)
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                // Moon Icon (Dark Mode)
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className={`${isDarkMode ? 'bg-linear-to-b from-[#1E1E1E] to-[#0F0E0E]' : 'bg-linear-to-t from-gray-100 to-white'} min-h-screen ${isDarkMode ? 'text-white' : 'text-gray-900'} pt-[70px] md:pt-[90px] transition-colors duration-300`}>
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
                  className={`${isDarkMode ? 'text-gray-800 bg-white hover:text-red-600' : 'text-white bg-gray-800 hover:text-red-400'} transition rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110`}
                >
                  <MdEmail />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/stephen-madero-766750391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-gray-800 bg-white hover:text-red-600' : 'text-white bg-gray-800 hover:text-red-400'} transition rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110`}
                >
                  <FaLinkedin />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/KaguyaKawaii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-gray-800 bg-white hover:text-red-600' : 'text-white bg-gray-800 hover:text-red-400'} transition rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110`}
                >
                  <FaGithub />
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/callmekaguyaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-gray-800 bg-white hover:text-red-600' : 'text-white bg-gray-800 hover:text-red-400'} transition rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110`}
                >
                  <FaXTwitter />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/kaguya.kawaii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-gray-800 bg-white hover:text-red-600' : 'text-white bg-gray-800 hover:text-red-400'} transition rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110`}
                >
                  <FaInstagram />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/stephenpatingo.madero.jr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-gray-800 bg-white hover:text-red-600' : 'text-white bg-gray-800 hover:text-red-400'} transition rounded-full p-3 w-[45px] h-[45px] md:w-[50px] md:h-[50px] text-lg md:text-xl flex justify-center items-center hover:scale-110`}
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
                className={`w-full h-auto object-cover rounded-4xl transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                style={{
                  maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                }}
              />  
            </div>
          </div>
        </div>

        <div className={`flex justify-center items-center ${isDarkMode ? 'text-gray-700' : 'text-gray-400'} text-sm md:text-base font-montserrat font-semibold animate-pulse w-full py-4 md:py-8`}>
          Scroll down
        </div>
        
        {/* Skills Section */}
        <div className={`w-full pt-8 md:pt-16 pb-8 md:pb-16 ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-100'} px-4 md:px-8 lg:px-20 transition-colors duration-300`}>
          <div className='flex flex-col items-center mb-8'>
            <h1 className={`font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Skills & Certifications</h1>
            <a 
              href="https://drive.google.com/drive/folders/1QEwTTBYydzJ2M3oX7A6PBsBQVQTrtXau?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 text-red-500 hover:text-red-400 transition-colors flex items-center gap-2"
            >
              View my certificates on Google Drive <span>→</span>
            </a>
          </div>
          <div className='flex gap-3 md:gap-4 lg:gap-6 justify-center items-center min-h-[10vh] font-semibold text-lg md:text-2xl lg:text-3xl'>
            <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-6 justify-center">
              <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-6 justify-center">
                {/* HTML5 */}
                <div className={`flex items-center hover:scale-110 transition-all ring-1 hover:ring-red-100 rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 ${isDarkMode ? 'bg-white' : 'bg-gray-800'} shadow-lg hover:shadow-red-500 duration-500`}>
                  <i className="devicon-html5-plain text-orange-500 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className={`text-sm md:text-base lg:text-lg font-semibold ${isDarkMode ? 'text-gray-800' : 'text-white'}`}>HTML</p>
                </div>

                {/* CSS3 */}
                <div className={`flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 ${isDarkMode ? 'bg-white' : 'bg-gray-800'} shadow-lg hover:shadow-red-500 duration-500`}>
                  <i className="devicon-css3-plain text-blue-500 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className={`text-sm md:text-base lg:text-lg font-semibold ${isDarkMode ? 'text-gray-800' : 'text-white'}`}>CSS</p>
                </div>

                {/* JavaScript */}
                <div className={`flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 ${isDarkMode ? 'bg-white' : 'bg-gray-800'} shadow-lg hover:shadow-red-500 duration-500`}>
                  <i className="devicon-javascript-plain text-yellow-400 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className={`text-sm md:text-base lg:text-lg font-semibold ${isDarkMode ? 'text-gray-800' : 'text-white'}`}>JS</p>
                </div>

                {/* React.js */}
                <div className={`flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 ${isDarkMode ? 'bg-white' : 'bg-gray-800'} shadow-lg hover:shadow-red-500 duration-500`}>
                  <i className="devicon-react-original text-cyan-400 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className={`text-sm md:text-base lg:text-lg font-semibold ${isDarkMode ? 'text-gray-800' : 'text-white'}`}>React</p>
                </div>

                {/* Node.js */}
                <div className={`flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 ${isDarkMode ? 'bg-white' : 'bg-gray-800'} shadow-lg hover:shadow-red-500 duration-500`}>
                  <i className="devicon-nodejs-plain text-green-500 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className={`text-sm md:text-base lg:text-lg font-semibold ${isDarkMode ? 'text-gray-800' : 'text-white'}`}>Node.js</p>
                </div>

                {/* Express.js */}
                <div className={`flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 ${isDarkMode ? 'bg-white' : 'bg-gray-800'} shadow-lg hover:shadow-red-500 duration-500`}>
                  <i className="devicon-express-original text-gray-500 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className={`text-sm md:text-base lg:text-lg font-semibold ${isDarkMode ? 'text-gray-800' : 'text-white'}`}>Express</p>
                </div>

                {/* MongoDB */}
                <div className={`flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 ${isDarkMode ? 'bg-white' : 'bg-gray-800'} shadow-lg hover:shadow-red-500 duration-500`}>
                  <i className="devicon-mongodb-plain text-green-600 text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className={`text-sm md:text-base lg:text-lg font-semibold ${isDarkMode ? 'text-gray-800' : 'text-white'}`}>MongoDB</p>
                </div>

                {/* GitHub */}
                <div className={`flex items-center hover:scale-110 transition-transform border rounded-lg p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 ${isDarkMode ? 'bg-white' : 'bg-gray-800'} shadow-lg hover:shadow-red-500 duration-500`}>
                  <i className="devicon-github-original text-black text-2xl md:text-3xl lg:text-4xl"></i>
                  <p className={`text-sm md:text-base lg:text-lg font-semibold ${isDarkMode ? 'text-gray-800' : 'text-white'}`}>GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id='about' className={`w-full pt-8 md:pt-12 pb-8 md:pb-12 ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-100'} px-4 md:px-8 lg:px-20 transition-colors duration-300`}>
          <h1 className={`font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h1>
          <p className={`font-montserrat text-center mt-4 md:mt-6 mx-auto leading-relaxed text-sm md:text-base lg:text-lg max-w-4xl ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            Hi! I'm Stephen, a 22-year-old Frontend Web Developer who began my journey in web development back in school. What started as simple curiosity soon grew into a genuine passion for creating websites that don't just look good but also feel great to use.

            I specialize in building business websites that are clean, responsive, and easy to navigate. Using tools like React.js, Vite, and Tailwind CSS, I love turning ideas into interactive and visually appealing experiences. I pay close attention to design and functionality because I believe a great website should connect with people, not just display information.

            Beyond coding, I'm driven by the goal of constantly improving myself learning new techniques, refining my skills, and staying up to date with the ever-evolving world of frontend development. Every project I take on is an opportunity to challenge myself and bring something meaningful to life on the web.
          </p> 
        </div>

        {/* Project Section */}
        <div id='project' className={`w-full pt-8 md:pt-12 pb-8 md:pb-12 ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-gray-100'} px-4 md:px-8 lg:px-20 transition-colors duration-300`}>
          <h1 className={`font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Project</h1>
          
          <div className='flex flex-col mt-6 md:mt-8'>
            <div className='flex flex-col lg:flex-row items-center justify-between min-h-[400px] md:min-h-[500px] gap-6 md:gap-8 lg:gap-12'>
              
              <div className='w-full lg:w-1/2'>
                <button 
                  className='block w-full focus:outline-none'
                  onClick={() => openProjectModal('circulink')}
                >
                  <img 
                    src={project}
                    className='rounded-2xl shadow-2xl hover:shadow-red-800 transition-all duration-500 hover:scale-105 w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover cursor-pointer'
                    alt="CircuLink Project" 
                  />
                </button>
              </div>

              <div className='text-center lg:text-left w-full lg:w-1/2'>
                <h1 className={`text-xl md:text-2xl lg:text-3xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>CircuLink</h1>
                <p className="text-red-500 font-medium text-sm md:text-base mt-2">Capstone Project | Web-Based Library Room Reservation System</p>
                <div className={`border-b my-4 md:my-5 ${isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}></div>
                <p className={`text-sm md:text-base lg:text-lg leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  CircuLink is an innovative web-based system that simplifies how library rooms are reserved and managed. 
                  Built with a focus on accessibility and efficiency, it enables students and faculty to book rooms effortlessly, 
                  view real-time schedules, and receive instant updates ensuring a smooth and organized reservation experience for everyone.
                </p>

                <div className="mt-4 flex gap-4 justify-center lg:justify-start">
                  <a 
                    href="https://github.com/KaguyaKawaii/circulink-beta-testing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} `}
                  >
                    <FaGithub /> GitHub Repository
                  </a>
                  <a 
                    href="https://circulink-beta-testing.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors text-white"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center justify-between min-h-[400px] md:min-h-[500px] gap-6 md:gap-8 lg:gap-12 mt-12'>
            <div className='w-full lg:w-1/2'>
              <button 
                className='block w-full focus:outline-none'
                onClick={() => openProjectModal('deliverdash')}
              >
                <img 
                  src={project2}
                  className='rounded-2xl shadow-2xl hover:shadow-red-800 transition-all duration-500 hover:scale-105 w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover cursor-pointer'
                  alt="DeliverDash Project" 
                />
              </button>
            </div>

            <div className='text-center lg:text-left w-full lg:w-1/2'>
              <h1 className={`text-xl md:text-2xl lg:text-3xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>DeliverDash</h1>
              <p className="text-red-500 font-medium text-sm md:text-base mt-2">Course Project | Delivery & Order Management System</p>
              <div className={`border-b my-4 md:my-5 ${isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}></div>
              <p className={`text-sm md:text-base lg:text-lg leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                DeliverDash is a delivery and order management system built using PHP, MySQL, and XAMPP. It allows users to create and track orders, manage deliveries, and handle CRUD operations efficiently. Focused on backend logic and database management.
              </p>

              <div className="mt-4 flex gap-4 justify-center lg:justify-start">
                <a 
                  href="https://github.com/KaguyaKawaii/DeliverDash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} `}
                >
                  <FaGithub /> GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className={`min-h-[40vh] flex flex-col items-center justify-center ${isDarkMode ? 'bg-[#0F0E0E]' : 'bg-gray-200'} text-center px-4 md:px-8 py-12 md:py-16 transition-colors duration-300`}>
          <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Me</h2>
          <div className='flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8'>
            <button
              onClick={() => {
                document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
              }}
              className={`hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base relative group ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              <p>Home</p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
            </button>
            
            <button
              onClick={() => {
                document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
              }}
              className={`hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base relative group ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              <p>About Me</p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
            </button>

            <button
              onClick={() => {
                document.getElementById("project").scrollIntoView({ behavior: 'smooth' });
              }}
              className={`hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base relative group ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              <p>Project</p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
            </button>

            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
              }}
              className={`hover:text-red-500 duration-300 cursor-pointer text-sm md:text-base relative group ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              <p>Contact</p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
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
              href="https://www.linkedin.com/in/stephen-madero-766750391"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dc143c] transition hover:scale-110"
            >
              <FaLinkedin />
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
              href="https://www.facebook.com/stephenpatingo.madero.jr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dc143c] transition hover:scale-110"
            >
              <FaFacebook />
            </a>
          </div>

          <div className={`border-t-2 w-full ${isDarkMode ? 'border-gray-900' : 'border-gray-300'} pt-6 md:pt-8`}>
            <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>© 2025 Stephen P. Madero Jr. All rights reserved.</p>
          </div>
        </div>
      </main>

      {/* Project Image Modal */}
      {isModalOpen && currentProject && projectGalleries[currentProject] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 md:-right-10 text-white hover:text-red-500 text-2xl md:text-3xl z-10 transition-colors"
            >
              <MdClose />
            </button>
            
            {/* Navigation Buttons */}
            {projectGalleries[currentProject].length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:-left-12 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500 text-3xl md:text-4xl z-10 transition-colors p-2"
                >
                  <MdNavigateBefore />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:-right-12 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500 text-3xl md:text-4xl z-10 transition-colors p-2"
                >
                  <MdNavigateNext />
                </button>
              </>
            )}
            
            {/* Image Counter */}
            {projectGalleries[currentProject].length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {projectGalleries[currentProject].length}
              </div>
            )}
            
            {/* Project Image */}
            <img
              src={projectGalleries[currentProject][currentImageIndex]}
              alt={`Project ${currentProject} - Image ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Project Title */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                {currentProject === 'circulink' ? 'CircuLink Project' : 'DeliverDash Project'} 
                <span className="ml-2 text-gray-300">
                  (Image {currentImageIndex + 1})
                </span>
              </h3>
              <p className="text-gray-400 mt-2">
                Use arrow keys or click navigation buttons to browse images
              </p>
            </div>
            
            {/* Image Dots Indicator */}
            {projectGalleries[currentProject].length > 1 && (
              <div className="flex justify-center mt-6 gap-2">
                {projectGalleries[currentProject].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-red-500 scale-125' 
                        : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default App