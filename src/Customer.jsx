import React from 'react'
import Galochka from './assets/Galochka.png'

const stats = [
  { value: "70K+", text: "We have more than customers" },
  { value: "100+", text: "Projects we have completed" },
  { value: "10M+", text: "People who are helped because of our hard work" },
  { value: "200+", text: "Support from world-renowned companies" },
]

const points = [
  "Provide idea support from our creative team",
  "Provide attractive and professional design services",
  "Support for service 24 hours a week",
  "Helping our customers to grow their business",
  "Provide support to market products through online marketplace",
]

const Customer = () => {
  return (
    <section className="bg-gray-100 flex gap-40 justify-center dark:bg-[#020E2D]">
      <div className='flex gap-40 justify-center mt-30 mb-30'>
        <div className="grid grid-cols-2 gap-8">
          {stats.map((item, i) => (
            <div key={i} className="bg-white w-64 h-72 rounded-xl text-center shadow-md flex flex-col items-center justify-center dark:bg-[#4C40F7]">
              <h1 className="text-indigo-600 text-6xl font-bold, dark:text-[#4ADB61]">{item.value}</h1>
              <p className="text-lg mt-4, dark:text-white">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-md">
          <h1 className="text-5xl font-bold leading-tight mb-6, dark:text-white">
            Customer <br /> satisfaction is <br /> our first priority
          </h1>
          <p className="text-gray-600 mb-6, dark:text-white">
            We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies. 
            Their satisfaction is our pleasure. We strive to provide the best service by:
          </p>
          <div className="flex flex-col space-y-4, dark:text-white">
            {points.map((text, i) => (
              <p key={i} className="flex items-start gap-2">
                <img src={Galochka} alt="check" className="w-5 h-5 mt-1" />
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customer
