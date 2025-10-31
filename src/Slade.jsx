import React, { useState, useEffect } from "react"
import Quotmarks_Orange from './assets/Quotmarks_Orange.png'
import Quotmarks_Blue from './assets/Quotmarks_Blue.png'

const Slade = () => {
  const slides = [
    {
      quote: "We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.",
      author: "Mark Garfield",
      company: "CEO & Head of Product"
    },
    {
      quote: "Ваше время ограничено, не тратьте его, живя чужой жизнью.",
      author: "Стив Джобс",
      company: "Apple Inc."
    },
    {
      quote: "Не важно, как медленно ты идёшь, пока ты не останавливаешься.",
      author: "Конфуций",
      company: "Древний Китай"
    },
    {
      quote: "Лучший способ предсказать будущее — создать его самому.",
      author: "Питер Друкер",
      company: "Drucker Institute"
    },
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative  h-[700px] bg-orange-400 text-white flex flex-col justify-center items-center mt-40 text-center px-6 rounded-xl dark:bg-[#020E2D]">
      
      <img scr={Quotmarks_Orange} className="block, dark:hidden"/>
      <img src={Quotmarks_Blue} className="hidden, dark:block"/>
      <button
        className="absolute left-10 top-1/2 -translate-y-1/2 w-17 h-17 bg-white text-gray-700 text-6xl px-4 py-1 rounded-full hover:bg-indigo-600 hover:text-white transition"
        onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
      >
        ❮
      </button>

      <div className="animate-fadeIn max-w-3xl">
        <p className="text-2xl italic mb-6">“{slides[index].quote}”</p>
        <p className="text-xl font-semibold">{slides[index].author}</p>
        <p className="opacity-90">{slides[index].company}</p>
      </div>

      <button
        className="absolute right-10 top-1/2 -translate-y-1/2 w-17 h-17 bg-white text-gray-700 text-6xl rounded-full hover:bg-indigo-600 hover:text-white transition"
        onClick={() => setIndex((i) => (i + 1) % slides.length)}  
      >
        ❯
      </button>

      <div className="absolute bottom-10 flex gap-3">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3.5 h-3.5 rounded-full cursor-pointer transition ${i === index ? "bg-white scale-110" : "bg-white/50"}`}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Slade
