import React, { useState } from "react";
import Yellow_Blue from './assets/Yellow_Blue.png'

const Question = () => {
  const [open, setOpen] = useState(false);
  const [open_1, setOpen_1] = useState(false);
  const [open_2, setOpen_2] = useState(false);
  const [open_3, setOpen_3] = useState(false);
  const [open_4, setOpen_4] = useState(false);

  return (
    <section className="bg-[url('./assets/Yellow_Blue.png')] bg-cover">
        <div>
            <p className="text-5xl font-bold text-center dark:text-white">
                <span className="block text-pink-600 text-3xl mb-2 dark:text-[#FFCC00]">Frequently Ask Question</span>
                Some of our frequently asked questions
            </p>
        </div>

        <div className="w-[1000px] mx-auto mt-20 bg-gray-100 rounded-xl shadow-md overflow-hidden transition-all duration-300">            
            <button
                onClick={() => setOpen(!open)}
                className="flex justify-between items-center w-full px-5 py-10 bg-gray-50 hover:bg-gray-200 transition-colors"
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
                <p className="text-gray-700 text-1xl">
                Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
                </p>
            </div>
        </div>

        <div className="w-[1000px] mx-auto mt-10 bg-gray-100 rounded-xl shadow-md overflow-hidden transition-all duration-300">            
            <button
                onClick={() => setOpen_1(!open_1)}
                className="flex justify-between items-center w-full px-5 py-10 bg-gray-50 hover:bg-gray-200 transition-colors"
            >
                <span className="font-semibold text-gray-800">How can I submit a proposal for cooperation?</span>


                <svg
                className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
                    open_1 ? "rotate-180" : "rotate-0"
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
                open_1 ? "max-h-40 py-" : "max-h-0 py-0"
                }`}
            >
                <p className="text-gray-700 text-1xl">
                Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
                </p>
            </div>
        </div>

        <div className="w-[1000px] mx-auto mt-10 bg-gray-100 rounded-xl shadow-md overflow-hidden transition-all duration-300">            
            <button
                onClick={() => setOpen_2(!open_2)}
                className="flex justify-between items-center w-full px-5 py-10 bg-gray-50 hover:bg-gray-200 transition-colors"
            >
                <span className="font-semibold text-gray-800">I come from a faraway place, can collaboration be done full time online through several meeting applications?</span>


                <svg
                className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
                    open_2 ? "rotate-180" : "rotate-0"
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
                open_2 ? "max-h-40 py-" : "max-h-0 py-0"
                }`}
            >
                <p className="text-gray-700 text-1xl">
                Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
                </p>
            </div>
        </div>

        <div className="w-[1000px] mx-auto mt-10 bg-gray-100 rounded-xl shadow-md overflow-hidden transition-all duration-300">            
            <button
                onClick={() => setOpen_3(!open_3)}
                className="flex justify-between items-center w-full px-5 py-10 bg-gray-50 hover:bg-gray-200 transition-colors"
            >
                <span className="font-semibold text-gray-800">How do I get the payment complete?</span>


                <svg
                className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
                    open_3 ? "rotate-180" : "rotate-0"
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
                open_3 ? "max-h-40 py-" : "max-h-0 py-0"
                }`}
            >
                <p className="text-gray-700 text-1xl">
                Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
                </p>
            </div>
        </div>
        

        <div className="w-[1000px] mx-auto mt-10 bg-gray-100 rounded-xl shadow-md overflow-hidden transition-all duration-300">            
            <button
                onClick={() => setOpen_4(!open_4)}
                className="flex justify-between items-center w-full px-5 py-10 bg-gray-50 hover:bg-gray-200 transition-colors"
            >
                <span className="font-semibold text-gray-800">How long can the collaboration last?</span>


                <svg
                className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
                    open_4 ? "rotate-180" : "rotate-0"
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
                open_4 ? "max-h-40 py-" : "max-h-0 py-0"
                }`}
            >
                <p className="text-gray-700 text-1xl">
                Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
                </p>
            </div>
        </div>

    </section>
  );
};

export default Question;