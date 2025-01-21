import React, { useState } from 'react'
import logo from "../images/Daco_5121866.png"
import avtar from "../images/man.jpeg"
import colleghub from "../images/collegehub.png"
import portfolio from "../images/portfolio.png"
import bookstore from "../images/bookStore.png"
import ed1 from "../images/manitlogo.png"
import ed2 from "../images/davlogo.png"

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [messageSent, setMessageSent] = useState(false); // Track if the message is sent

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <div className="bg-gray-800 text-white flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className='text-xl'>PORTFOLIO</div>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#education" className="hover:text-blue-500">Education</a>
          <a href="#resume" className="hover:text-blue-500">Resume</a>
          <a href="#contactme" className="hover:text-blue-500">Contact Me</a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-white">
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
          </button>
        </div>
      </div>

        {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 p-4 bg-gray-800 text-white">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#education" className="hover:text-blue-500">Education</a>
          <a href="#contactme" className="hover:text-blue-500">Contact Me</a>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row justify-between items-center p-8 md:p-16">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold">Hi There!</h1>
          <h1 className="text-3xl md:text-5xl font-bold">
            I'm <span className="text-blue-500">Arun Mourya</span>
          </h1>
          <div className="mt-4 text-lg text-gray-600">
            I’m a software developer, and here is my portfolio website.
            Here you’ll learn about my journey as a software developer.
          </div>
          <button onClick={() => document.getElementById('contactme').scrollIntoView()} className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600">
            Hire me
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center relative">
          <img src={avtar} alt="Profile" className="w-64 md:w-96 rounded-full" />
          <div className="absolute bottom-4 left-4 flex space-x-4">
            <a href="https://twitter.com/your-username" className="text-white hover:text-blue-500 text-2xl">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/your-username" className="text-white hover:text-blue-500 text-2xl">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/your-username" className="text-white hover:text-blue-500 text-2xl">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://github.com/amouryas362" className="text-white hover:text-blue-500 text-2xl">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-200 p-8 md:p-16 border-4 rounded-lg border-slate-200 w-full md:w-[1300px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="p-6 rounded-lg shadow-lg flex flex-col items-center bg-slate-800 text-white">
            <div className="text-3xl font-semibold mb-4">College Hub</div>
            <div className="mb-4">A social media platform for college students to access news, notices, and groups. Built using React, Node.js, and PostgreSQL.</div>
            <div className="text-gray-400 mb-4">React.js, Node.js, Express.js, PostgreSQL</div>
            <a href="https://github.com/amouryas362/College-hub" className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600">Link</a>
            <img src={colleghub} alt="Project 1" className="mt-4 w-full h-[12rem] object-cover rounded-md" />
          </div>

          {/* Project Card 2 */}
          <div className="p-6 rounded-lg shadow-lg flex flex-col items-center bg-slate-800 text-white">
            <div className="text-3xl font-semibold mb-4">Bookify</div>
            <div className="mb-4">A book buying platform where users can buy and review their favorite books. Built with React and Express.js.</div>
            <div className="text-gray-400 mb-4">React.js, Express.js</div>
            <a href="https://github.com/amouryas362/Bookify" className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600">Link</a>
            <img src={bookstore} alt="Project 2" className="mt-4 w-full h-[12rem] object-cover rounded-md" />
          </div>

          {/* Project Card 3 */}
          <div className="bg-slate-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-3xl font-semibold mb-4">Portfolio</div>
            <div className="mb-4">My personal portfolio showcasing my work and experience. Built with React.js and Tailwind CSS.</div>
            <div className="text-gray-400 mb-4">React.js, Tailwind CSS</div>
            <a href="https://github.com/amouryas362/Arun-Portfolio" className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600">Link</a>
            <img src={portfolio} alt="Project 3" className="mt-4 w-full h-[12rem] object-cover rounded-md" />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="p-8 md:p-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Education Background</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <img src={ed1} alt="University 1" className="w-[16rem] p-1 h-[15rem] mx-auto object-cover rounded-md mb-4 " />
            <h3 className="text-xl font-semibold">Maulana Azad National Institute of Technology, Bhopal</h3>
            <p className="text-gray-600">MCA (2022 - 2025) - Currently pursuing my Master's degree in Computer Applications.</p>
          </div>
          <div className="w-full sm:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <img src={ed2} alt="University 2" className="w-[16rem] p-1 h-[15rem] mx-auto object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">DAV Centenary College, Faridabad</h3>
            <p className="text-gray-600">BCA (2019 - 2021) - Completed my Bachelor's degree in Computer Applications with a focus on software development.</p>
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
      <div id='resume' className="p-8 md:p-16 flex justify-center items-center bg-slate-200">
        <a href="https://drive.google.com/file/d/1Bi2ybdZ6eyvXYfeeZKVJbaMO3vw45rgd/view?usp=sharing" target="_blank" className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600">
          Download Resume
        </a>
      </div>

      {/* Contact Me Section */}
      <section id="contactme" className="p-8 md:p-16 bg-slate-200 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form onSubmit={handleMessageSubmit} className="max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="mb-4 p-3 w-full bg-white border rounded-md" required />
          <input type="email" placeholder="Your Email" className="mb-4 p-3 w-full bg-white border rounded-md" required />
          <textarea placeholder="Your Message" className="mb-4 p-3 w-full bg-white border rounded-md" required></textarea>
          <button type="submit" className="bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 w-full">Send Message</button>
        </form>
        {messageSent && (
          <div className="mt-4 text-green-500 font-semibold">Your message has been sent successfully!</div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-8 mt-16 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/amouryas362" className="text-white hover:text-blue-500">
            GitHub
          </a>
          <a href="mailto:amouryaw362@gmail.com" className="text-white hover:text-blue-500">
            Email
          </a>
          <a href="tel:+7503931326" className="text-white hover:text-blue-500">
            Contact
          </a>
        </div>
        <div className="text-gray-400">
          &copy; 2024 Arun Kumar Mourya. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Home
