import React from 'react'
import logo from './assets/logo.png'
import Woman from './assets/Woman.png'

const Head = () => {
  return (
    <>
      <header className="flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" className='ml-20'/>
        </div>

        <nav className="flex gap-18 text-lg font-medium">
          <a href="#home" className="text-gray-800 hover:text-indigo-600, dark:text-white hover:text-[#FFCC00]">Home</a>
          <a href="#works" className="text-gray-800 hover:text-indigo-600, dark:text-white hover:text-[#FFCC00]">Works</a>
          <a href="#about" className="text-gray-800 hover:text-indigo-600, dark:text-white hover:text-[#FFCC00]">About</a>
        </nav>

        <button className="w-30 h-13 mr-20 bg-[#4C40F7] text-white rounded-[10px] cursor-pointer border-none hover:opacity-90 transition">
            Contact us
        </button>
      </header>

      <section className="flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl font-bold leading-tight, dark:text-white">
            Make your business <br />
            <span className="text-orange-500, dark:text-[#FFCC00]">more powerful</span> <br />
            with us
          </h1>
          <p className="text-lg text-gray-600 mt-6, dark:text-white">
            We provide various services to make <br/> 
            your business grow and get bigger. Your <br/>
            satisfaction is our first priority.
          </p>
          <button className="w-30 h-13 mt-5 bg-[#4C40F7] text-white rounded-[10px] cursor-pointer border-none hover:opacity-90 transition">
            Get Started
          </button>
        </div>
        
        <div>
          <img src={Woman} alt="Woman"/>
        </div>
      </section>
    </>
  )
}

export default Head
