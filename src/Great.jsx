import React from 'react'
import Brend from './assets/Brend.png'

const Great = () => {
  return (
    <section className="flex flex-col items-center justify-between h-100 text-center mt-30">
      <p className="text-5xl font-bold, dark:text-white">
        <span className="block text-pink-600 text-3xl mb-2, dark:text-[#FFCC00]">Some of Our Great Customers</span>
        Some of the companies we have worked with
      </p>
      <img src={Brend} alt="brands"/>
    </section>
  )
}

export default Great
