import React, { useState } from "react";
import Blue_Yellow from './assets/Blue_Yellow.png'

const Question = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[url('./assets/Blue_Yellow.png')] bg-cover mt-50 h-100">
        <p className="text-5xl font-bold text-center">
            <span className="block text-pink-600 text-3xl mb-2">Frequently Ask Question</span>
            Some of our frequently asked questions
        </p>


        <div className="w-[350px] mx-auto mt-10 bg-gray-100 rounded-xl shadow-md overflow-hidden transition-all duration-300">            
            <button
                onClick={() => setOpen(!open)}
                className="flex justify-between items-center w-full px-5 py-3 bg-gray-200 hover:bg-gray-300 transition-colors"
            >
                <span className="font-semibold text-gray-800">What are the services provided to customers?</span>


                <svg
                className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
                    open ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>



            <div
                className={`px-5 transition-all duration-500 overflow-hidden ${
                open ? "max-h-40 py-" : "max-h-0 py-0"
                }`}
            >
                <p className="text-gray-700 text-sm">
                Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
                </p>
            </div>


            
        </div>
    </section>
  );
};

export default Question;