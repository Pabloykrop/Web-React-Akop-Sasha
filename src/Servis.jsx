import React from 'react'
import Fire from './assets/Fire.png'
import Strelka from './assets/Strelka.png'
import Kist from './assets/Kist.png'
import Komp from './assets/Komp.png'
import Phone from './assets/Phone.png'
import Building from './assets/Building.png'
import Chart from './assets/Chart.png'

const cards = [
  { img: Fire, title: "Ideate", text: "We help you develop creative ideas so that your business can grow more rapidly", color: "shadow-indigo-500/50 hover:bg-[#4C40F7]" },
  { img: Kist, title: "Design", text: "We provide services with the best designs than our designer team for your business", color: "shadow-pink-500/50 hover:bg-[#FF2D59]" },
  { img: Komp, title: "Web Development", text: "We help develop company websites to be more professional and attractive", color: "shadow-green-500/50 hover:bg-[#4ADB61]" },
  { img: Phone, title: "App Development", text: "We help develop company mobile apps to be more professional and attractive", color: "shadow-yellow-400/50 hover:bg-[#FFCC00]" },
  { img: Building, title: "Business Growth", text: "We also provide services by providing input for your business growth", color: "shadow-blue-500/50 hover:bg-[#007BFF]" },
  { img: Chart, title: "Digital marketing", text: "We also help you market your products through an online marketplace", color: "shadow-orange-500/50 hover:bg-[#FF6800]" },
]

const Servis = () => {
  return (
    <section className="text-center mt-50">
      <div>
        <p className="text-5xl font-bold h-40, dark:text-white">
          <span className="block text-pink-600 text-3xl, dark:text-[#FFCC00]">Our Services</span>
          The various services we provide to make your <br /> business more powerful
        </p>
      </div>
      <div className='flex items-center justify-center h-screen'>
        <div className="grid grid-cols-3 gap-6 h-200 w-250 ">
          {cards.map((card, i) => (
            <div key={i} className={`bg-white w-80 h-95 rounded-xl text-center flex flex-col items-center gap-7 shadow-md ${card.color} hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-pointer, dark:bg-[#00113B] text-white`}>
              <img src={card.img} alt={card.title} className="w-35 h-35" />
              <h1 className="text-2xl font-semibold">{card.title}</h1>
              <p className="text-base">{card.text}</p>
              <img src={Strelka} className="w-10 h-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servis
