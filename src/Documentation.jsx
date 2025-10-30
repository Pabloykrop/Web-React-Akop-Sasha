import React from 'react'
import office from './assets/office.png'

const Documentation = () => {
  return (
    <section className="bg-[url('./assets/Circle.png')] bg-cover">
      <div className='h-screen flex items-center justify-center'>
        <div className="text-center text-5xl font-bold py-12">
          <p>
            <span className="block text-pink-600 text-3xl">Our Documentation</span>
            See what our profile is like and how we work for your business
          </p>
          <div>
            <img src={office} alt="office" className="w-3/4 rounded-2xl relative left-45 top-20" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Documentation
