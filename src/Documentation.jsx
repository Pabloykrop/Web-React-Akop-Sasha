import React from 'react'
import office from './assets/office.png'

const Documentation = () => {
  return (
    <section className="bg-[url('./assets/Circle.png')] bg-cover">
      <div className='h-screen flex items-center justify-center'>
        <div className="text-center text-5xl font-bold py-12, dark:text-white">
          <p>
            <span className="block text-pink-600 text-3xl, dark:text-[#FFCC00]">Our Documentation</span>
            See what our profile is like and how we work for your business
          </p>
          <div>
            <img src={office} alt="office" className="w-4/5 rounded-3xl relative left-45 top-20" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Documentation
